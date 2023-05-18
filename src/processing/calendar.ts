import { google } from "googleapis"
import MapsClient from "@googlemaps/google-maps-services-js"
import dotenv from 'dotenv'
import fs from "fs";
import { convert } from 'html-to-text'
import { DecoratedCalendarEvent } from "@/types";

const LINK_PATTERN = 'link:'
const TAGS_PATTERN = 'tags:'

interface GeocodingFile {
  version: number
  records: Record<string, { lat: number, lng: number }>,
}

async function getEvents() {
  const jwtClient = new google.auth.JWT(
    process.env.client_email,
    undefined,
    process.env.private_key,
    ["https://www.googleapis.com/auth/calendar"],
  );

  const calendar = google.calendar({
    version: 'v3',
    auth: jwtClient,
  })

  const res = await calendar.events.list({
    calendarId: process.env.calendar_id,
    timeMin: new Date().toISOString(),
    maxResults: 100,
    singleEvents: false,
  });

  console.log(`Loaded ${res.data.items?.length} items after ${new Date().toISOString()}`)
  return (res.data.items || []).filter(event => event.status !== 'cancelled');
}

async function processMetadata(events: DecoratedCalendarEvent[]) {
  events.forEach((event) => {
    if (!event.description) {
      return
    }
    const doc = convert(event.description, {
      selectors: [
        { selector: 'a', options: { ignoreHref: true } },
      ],
    })
    const lines = doc.split('\n')
    const metadata = {
      description: '',
      tags: [] as string[],
      link: '',
    }
    lines.forEach((line) => {
      if (line.toLowerCase().startsWith(TAGS_PATTERN)) {
        const tags = line.toLowerCase().replace(TAGS_PATTERN, '').split(',').map((tag) => tag.trim().toLowerCase())
        metadata.tags = tags
      }
      if (line.toLowerCase().startsWith(LINK_PATTERN)) {
        metadata.link = line.toLowerCase().replace(LINK_PATTERN, '').trim()
      }
    })
    if (metadata.tags.length === 0) {
      console.error('[ERROR] No tags found for event', event.summary)
    }
    if (!metadata.link) {
      console.error('[ERROR] No link found for event', event.summary)
    }
    event.metadata = metadata
  })
}

async function saveEvents(events: DecoratedCalendarEvent[]) {
  console.log('Saving events')
  fs.writeFileSync('src/data/events.json', JSON.stringify(events))
}

/** This function takes calendar events and runs them through google geocoder to get latitude and longitude */
async function bulkGeocode(events: DecoratedCalendarEvent[]) {
  const geocoder = new MapsClient.Client({})
  /**
   * Load existing locations from file
   */
  const locations: GeocodingFile = JSON.parse(fs.readFileSync('src/data/locations.json', 'utf-8'))

  await Promise.all(events.map(async (event) => {
    if (!event.location) {
      console.error(`[ERROR] No location for event ${event.summary}`)
      return 
    }
    const decoded = locations.records[event.location]
    if (!decoded) {
      console.log('Geocoding', event.location)
      const decoded = await geocoder.geocode({
        params: {
          address: event.location,
          key: process.env.google_maps_api_key || '',
        }
      })
      if (decoded.data.results.length > 0) {
        const result = decoded.data.results[0]
        locations.records[event.location] = result.geometry.location
        event.coordinates = result.geometry.location
      } else {
        throw new Error(`Could not find location ${event.location}`)
      }
    } else {
      event.coordinates = decoded
      console.log('Skipping geocoding for', event.summary)
    }
  }))
  fs.writeFileSync('src/data/locations.json', JSON.stringify(locations))
}

async function run() {
  dotenv.config()
  const events = await getEvents()
  await bulkGeocode(events)
  processMetadata(events)
  saveEvents(events)
}

run()