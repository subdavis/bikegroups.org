import { calendar_v3, google } from "googleapis"
import MapsClient from "@googlemaps/google-maps-services-js"
import dotenv from 'dotenv'
import fs from "fs";

interface GeocodingFile {
  version: number
  records: Record<string, { lat: number, lng: number }>,
}

interface DecoratedCalendarEvent extends calendar_v3.Schema$Event {
  coordinates?: { lat: number, lng: number }
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
    maxResults: 20,
    singleEvents: false,
  });

  console.log(`Loaded ${res.data.items?.length} items after ${new Date().toISOString()}`)
  return res.data.items || [];
}

async function saveEvents(events: DecoratedCalendarEvent[]) {
  console.log('Saving events')
  fs.writeFileSync('data/events.json', JSON.stringify(events))
}

/** This function takes calendar events and runs them through google geocoder to get latitude and longitude */
async function bulkGeocode(events: DecoratedCalendarEvent[]) {
  const geocoder = new MapsClient.Client({})
  /**
   * Load existing locations from file
   */
  const locations: GeocodingFile = JSON.parse(fs.readFileSync('data/locations.json', 'utf-8'))

  await Promise.all(events.map(async (event) => {
    if (!event.location) throw new Error(`Event ${event.summary} has no location`)
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
  fs.writeFileSync('data/locations.json', JSON.stringify(locations))
}

async function run() {
  dotenv.config()
  const events = await getEvents()
  await bulkGeocode(events)
  saveEvents(events)
}

run()