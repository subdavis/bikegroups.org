import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import fetch from 'node-fetch';

const csv_events_url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfbjcSW19Cn2IVERzRcTxivz1b0rtihIdaD_7oeRvP-mzfyWxJeaPbrKQ5qJjS1JtdSKgl4b7QFbja/pub?gid=1489216087&single=true&output=csv';

const columns = [
  'Image',
  'Image URL',
  'Title',
  'Status',
  'Start Date',
  'Start Time',
  'Description',
  'Source URL',
  'Categories',
  'Organizer Name',
  'Organizer Social Handle',
  'Location',
  'ICAL',
  'Discovery Timestamp',
] as const;

export type CalEvent = {
  [K in (typeof columns)[number]]: string;
} & {
  startTimestamp: Date;
};

const CACHE_FILE = path.join(process.cwd(), 'events.csv');
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

export const revalidate = 3600; // 1 hour for Next.js revalidation

async function downloadCSV(): Promise<string> {
  const response = await fetch(csv_events_url);
  if (!response.ok) {
    throw new Error(`Failed to download CSV: ${response.statusText}`);
  }
  return response.text();
}

async function getCachedCSV(): Promise<string> {
  try {
    const stats = await fs.promises.stat(CACHE_FILE);
    const age = Date.now() - stats.mtimeMs;

    if (age < CACHE_DURATION) {
      return await fs.promises.readFile(CACHE_FILE, 'utf-8');
    }
  } catch (error) {
    // File doesn't exist or other error, continue to download
  }

  const csv = await downloadCSV();
  await fs.promises.writeFile(CACHE_FILE, csv);
  return csv;
}

export default async function getEvents(): Promise<CalEvent[]> {
  // Disable for now
  return Promise.resolve([]);

  const csv = await getCachedCSV();
  const records = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });

  const events: CalEvent[] = records.map((record: any): CalEvent => {
    const event: Partial<CalEvent> = {};
    columns.forEach((column) => {
      event[column] = record[column] || '';
    });
    event['startTimestamp'] = new Date(event['Start Date'] + ' ' + event['Start Time']);
    return event as CalEvent;
  });
  events.sort((a, b) => {
    return a.startTimestamp.getTime() - b.startTimestamp.getTime();
  });
  return events;
}
