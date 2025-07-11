/**
 * Expose a function getCalEvents that can fetch the given Calendar events from a public Google Calendar using the Google Calendar v3 API.
 * Google api credentials are stored in the cal-creds.json file.
 * It should transform the events into an array of CalEvent objects.
 * It should cache the events for 1 hour.
 * Calendar events are sometimes recurring.  Recurring events should be transformed into a list of events for each occurrence (max 10 occurrences).
 */

import { OrgParams } from './org';
import { calendar_v3 } from '@googleapis/calendar';
import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from 'jsdom';
import OrgList from './orglist';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const CalendarId =
  '6a256e25e316cc67771b99bd499dfa57d2780d51f6eb5f9df1a9d84299a1b3c2@group.calendar.google.com';

export interface CalEvent {
  title: string;
  startDate: Date;
  description: string;
  sourceUrls: {
    href: string;
    text: string;
  }[]; // Every HREF in the description.
  location: string; // The location of the event.
  orgKey: string; // the name of the org that is hosting the event.
  //   categories: string[];
}

export interface CachedResponse {
  timestamp: number;
  response: calendar_v3.Schema$Events;
}

export interface AssociationCache {
  [eventId: string]: {
    organization: string;
    eventName: string;
  };
}

let calendarClient: calendar_v3.Calendar;
let anthropicClient: Anthropic;

async function initializeCalendarClient() {
  if (!calendarClient) {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(process.cwd(), 'cal-creds.json'),
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
    });

    calendarClient = google.calendar({ version: 'v3', auth });
  }
  return calendarClient;
}

function initializeAnthropicClient() {
  if (!anthropicClient) {
    const apiKey = process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_KEY;
    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY or ANTHROPIC_KEY environment variable is required');
    }
    anthropicClient = new Anthropic({ apiKey });
  }
  return anthropicClient;
}

function extractUrls(description: string): { href: string; text: string }[] {
  const dom = new JSDOM(description);
  const links = dom.window.document.getElementsByTagName('a');
  const urls: { href: string; text: string }[] = [];

  for (const link of links) {
    const href = link.getAttribute('href');
    if (!href) continue;

    // Clean up the href - remove any HTML that might have been included
    const cleanHref = href.replace(/[<>]/g, '').trim();

    // Get the text content, stripping HTML tags
    const text = link.textContent?.trim() || cleanHref;

    // Only add if we have a valid URL
    try {
      new URL(cleanHref);
      urls.push({
        href: cleanHref,
        text: text === cleanHref ? cleanHref : text,
      });
    } catch (e) {
      // Invalid URL, skip it
      continue;
    }
  }

  return urls;
}

async function findBestMatchingOrg(event: CalEvent): Promise<string | null> {
  try {
    const client = initializeAnthropicClient();

    // Create a summary of all organizations
    const orgList = OrgList();
    const orgSummaries = orgList
      .map((org, index) => {
        const description = typeof org.description === 'string' ? org.description : '';
        const quote = typeof org.quote === 'string' ? org.quote : '';

        return `${index + 1}. ${org.name}
   - Description: ${description.substring(0, 200)}
   - Quote: ${quote.substring(0, 200)}
   - Tags: ${(org.tags || []).join(', ')}
   - Location: ${org.location || 'N/A'}
   - Website: ${org.website || 'N/A'}
   - Instagram: ${org.instagram || 'N/A'}
   - Key: ${org.orgKey}`;
      })
      .join('\n\n');

    const prompt = `You are matching a cycling event to the best cycling organization from a list. 

EVENT DETAILS:
- Title: ${event.title}
- Description: ${event.description.substring(0, 500)}
- Location: ${event.location}
- Source URLs: ${event.sourceUrls.map((url) => `${url.text}: ${url.href}`).join(', ')}

AVAILABLE ORGANIZATIONS:
${orgSummaries}

Please analyze which organization is most likely to host or be associated with this event. Consider:
1. Name similarity or exact matches
2. Location matches  
3. Description/content similarity
4. URL matches (website, Instagram, Facebook)
5. Event type matching organization's typical activities

If there's a strong match (confidence > 0.3), respond with just the organization key exactly as listed above.
If no organization is a good match, respond with "NONE".

Examples:
- If event mentions "Utepils" and there's "Utepils Cycling" in the list, respond: "utepils"
- If there are multiple organizations that might match, pick the most specific.
  - For example, If the event is at Behind Bars but organized by "Handup Racing", respond: "handup"
  - Or if the event is at Behind Bars but organized by Bone Saw, respond: "bonesaw"
- If no clear match, respond: "NONE"

Do not include any other text in your response. Only an organization key or NONE.`;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 10000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const responseText = response.content[0].type === 'text' ? response.content[0].text.trim() : '';

    // Return the organization name if it's valid, otherwise null
    if (responseText === 'NONE' || responseText === '') {
      return null;
    }

    // Verify the response matches an actual organization name
    const matchingOrg = orgList.find((org) => org.orgKey === responseText);

    if (responseText && !matchingOrg) {
      throw new Error(`Claude returned a bad response: ${responseText}`);
    }

    return responseText;
  } catch (error) {
    // Handle rate limiting by returning null
    if (error.status === 429) {
      console.warn(`Rate limited when matching "${event.title}", skipping association...`);
      return null;
    }
    console.error(`Error matching "${event.title}":`, error);
    return null;
  }
}

function fetchCachedResponse(forceRefresh: boolean = false): calendar_v3.Schema$Events | null {
  if (forceRefresh) {
    console.log('Force refresh requested, skipping cache');
    return null;
  }

  const cacheFile = path.join(process.cwd(), '.cache', 'calendar-response.json');

  try {
    if (fs.existsSync(cacheFile)) {
      const cache: CachedResponse = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
      const now = Date.now();
      const cacheAge = now - cache.timestamp;
      const oneHourInMs = 60 * 60 * 1000;

      console.log(`Cache age: ${Math.round(cacheAge / 1000 / 60)} minutes`);

      // Check if cache is less than 1 hour old
      if (cacheAge < oneHourInMs) {
        console.log('Using cached response (less than 1 hour old)');
        return cache.response;
      } else {
        console.log('Cache is older than 1 hour, will fetch fresh data');
      }
    } else {
      console.log('No cache file found, will fetch fresh data');
    }
  } catch (error) {
    console.error('Error reading cache:', error);
  }

  return null;
}

function saveCachedResponse(response: calendar_v3.Schema$Events) {
  const cacheDir = path.join(process.cwd(), '.cache');
  const cacheFile = path.join(cacheDir, 'calendar-response.json');

  try {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    const cache: CachedResponse = {
      timestamp: Date.now(),
      response,
    };

    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
  } catch (error) {
    console.error('Error saving cache:', error);
  }
}

function loadAssociationCache(): AssociationCache {
  const cacheFile = path.join(process.cwd(), '.cache', 'associations.json');

  try {
    if (fs.existsSync(cacheFile)) {
      const cacheData = fs.readFileSync(cacheFile, 'utf-8');
      return JSON.parse(cacheData) as AssociationCache;
    }
  } catch (error) {
    console.error('Error loading association cache:', error);
  }

  return {};
}

function saveAssociationCache(cache: AssociationCache) {
  const cacheDir = path.join(process.cwd(), '.cache');
  const cacheFile = path.join(cacheDir, 'associations.json');

  try {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
  } catch (error) {
    console.error('Error saving association cache:', error);
  }
}

async function fetchCalEvents(forceRefresh: boolean = false): Promise<CalEvent[]> {
  // Try to get cached response first
  const cachedResponse = fetchCachedResponse(forceRefresh);
  let response: calendar_v3.Schema$Events;

  if (cachedResponse) {
    response = cachedResponse;
  } else {
    console.log('Fetching fresh response from Google Calendar API');
    const client = await initializeCalendarClient();
    const now = new Date();
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(now.getMonth() + 1);

    response = (
      await client.events.list({
        calendarId: CalendarId,
        timeMin: now.toISOString(),
        timeMax: oneMonthFromNow.toISOString(),
        singleEvents: true, // This expands recurring events
        maxResults: 100,
      })
    ).data;

    // Save the raw response to cache
    saveCachedResponse(response);
    console.log('Fresh response saved to cache');
  }

  const events = response.items || [];

  // Load existing association cache
  const associationCache = loadAssociationCache();
  let cacheUpdated = false;

  const calEvents: CalEvent[] = [];

  // Process events sequentially, using cache when available
  for (const event of events) {
    const calEvent: CalEvent = {
      title: event.summary || '',
      startDate: new Date(event.start?.dateTime || event.start?.date || ''),
      description: event.description || '',
      sourceUrls: extractUrls(event.description || ''),
      location: event.location || '',
      orgKey: '', // Will be set below
    };

    // Get the event ID for caching (prefer recurringEventId for recurring events)
    const eventId = event.recurringEventId || event.id || '';

    // Check if we already have a cached association
    if (eventId && associationCache[eventId]) {
      calEvent.orgKey = associationCache[eventId].organization;
    } else if (eventId) {
      // Find the best matching organization with a single API call
      const matchedOrgKey = await findBestMatchingOrg(calEvent);
      if (matchedOrgKey) {
        calEvent.orgKey = matchedOrgKey;
        // Cache the association
        associationCache[eventId] = {
          organization: matchedOrgKey,
          eventName: calEvent.title,
        };
        cacheUpdated = true;
      } else {
        // Cache that there's no association to avoid future API calls
        associationCache[eventId] = {
          organization: '',
          eventName: calEvent.title,
        };
        cacheUpdated = true;
      }

      console.log(`Processed event: ${calEvent.title} -> ${calEvent.orgKey || 'Not associated'}`);

      // Small delay between API calls to be gentle on the API
      await new Promise((resolve) => setTimeout(resolve, 200));
    } else {
      console.log(`No event ID for: ${calEvent.title} -> skipping cache`);
    }

    calEvents.push(calEvent);

    // Save updated cache if we made changes
    if (cacheUpdated) {
      saveAssociationCache(associationCache);
      cacheUpdated = false;
    }
  }

  return calEvents;
}

export async function getCalEvents(forceRefresh: boolean = false): Promise<CalEvent[]> {
  return fetchCalEvents(forceRefresh);
}
