import * as fs from 'fs';
import * as path from 'path';
import { CachedResponse, AssociationCache, CalEvent } from './cal-events';
import { JSDOM } from 'jsdom';

interface OrgEventsProps {
  orgKey: string;
}

interface DisplayCalEvent {
  Title: string;
  startTimestamp: Date;
  'Source URL': string;
  description: string;
  location: string;
  orgKey: string;
  eventId: string;
}

function extractUrls(description: string): { href: string; text: string }[] {
  const dom = new JSDOM(description);
  const links = dom.window.document.getElementsByTagName('a');
  const urls: { href: string; text: string }[] = [];

  for (const link of links) {
    const href = link.getAttribute('href');
    if (!href) continue;

    const cleanHref = href.replace(/[<>]/g, '').trim();
    const text = link.textContent?.trim() || cleanHref;

    try {
      new URL(cleanHref);
      urls.push({
        href: cleanHref,
        text: text === cleanHref ? cleanHref : text,
      });
    } catch (e) {
      continue;
    }
  }

  return urls;
}

async function getUpcomingEvents(orgKey: string): Promise<DisplayCalEvent[]> {
  const cacheFile = path.join(process.cwd(), '.cache', 'calendar-response.json');
  const associationCacheFile = path.join(process.cwd(), '.cache', 'associations.json');

  try {
    // Load calendar response cache
    if (!fs.existsSync(cacheFile)) {
      console.warn('Calendar cache file not found');
      return [];
    }

    const cache: CachedResponse = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    const events = cache.response.items || [];

    // Load association cache
    let associationCache: AssociationCache = {};
    if (fs.existsSync(associationCacheFile)) {
      associationCache = JSON.parse(fs.readFileSync(associationCacheFile, 'utf-8'));
    }

    // Filter events for this organization that are yesterday or later
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    const orgEvents: DisplayCalEvent[] = [];

    for (const event of events) {
      const eventId = event.recurringEventId || event.id || '';
      const eventDate = new Date(event.start?.dateTime || event.start?.date || '');

      // Skip events that are too old
      if (eventDate < yesterday) {
        continue;
      }

      // Check if this event is associated with the requested organization
      const association = associationCache[eventId];
      if (!association || association.organization !== orgKey) {
        continue;
      }

      const sourceUrls = extractUrls(event.description || '');
      const primaryUrl = sourceUrls.length > 0 ? sourceUrls[0].href : '';

      orgEvents.push({
        Title: event.summary || '',
        startTimestamp: eventDate,
        'Source URL': primaryUrl,
        description: event.description || '',
        location: event.location || '',
        orgKey: orgKey,
        eventId: event.recurringEventId || event.id || '',
      });
    }

    // Sort by date
    orgEvents.sort((a, b) => a.startTimestamp.getTime() - b.startTimestamp.getTime());

    return orgEvents;
  } catch (error) {
    console.error('Error loading upcoming events:', error);
    return [];
  }
}

function renderEvent(events: DisplayCalEvent[]) {
  const event = events[0];
  let dateText =
    event.startTimestamp.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }) +
    ' at ' +
    event.startTimestamp.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  if (events.length > 1) {
    dateText += ` (and ${events.length - 1} more)`;
  }
  return (
    <>
      <a href={event['Source URL']}>{event['Title']}</a>{' '}
      <time
        dateTime={event.startTimestamp.toISOString()}
        className="block text-xs text-gray-500 whitespace-nowrap"
      >
        {dateText}
      </time>
    </>
  );
}

export default async function OrgEvents({ orgKey }: OrgEventsProps) {
  if (!orgKey) return null;
  const upcomingEvents = await getUpcomingEvents(orgKey);
  const groupedEvents = Object.values(
    upcomingEvents.reduce(
      (acc, cur) => {
        if (acc[cur.eventId]) {
          acc[cur.eventId].push(cur);
        } else {
          acc[cur.eventId] = [cur];
        }
        return acc;
      },
      {} as Record<string, DisplayCalEvent[]>
    )
  );

  if (upcomingEvents.length === 0) return null;

  return (
    <section className="my-4 bg-red-50 rounded p-2 border-2 border-red-300">
      <h4 className="font-semibold mb-2">📅 Upcoming Events</h4>
      <div className="list-disc">
        {groupedEvents.map((evts) => (
          <div key={evts[0].eventId} className="mb-1">
            {renderEvent(evts)}
          </div>
        ))}
      </div>
    </section>
  );
}
