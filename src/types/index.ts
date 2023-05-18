import { calendar_v3 } from "googleapis";
import { RRule } from "rrule";

export interface DecoratedCalendarEvent extends calendar_v3.Schema$Event {
  coordinates?: { lat: number, lng: number }
  metadata?: {
    description: string
    tags: string[]
    link: string
  }
}

export interface StoreCalendarEvent extends DecoratedCalendarEvent {
  startDate: Date
  endDate: Date
  rrule: RRule | null
  rruleExpanded: Date[]
  nextEvent: Date
}

export interface MapBounds {
  _ne: {
    lat: number,
    lng: number,
  },
  _sw: {
    lat: number,
    lng: number,
  }
}