import { defineStore } from "pinia";
import eventData from '@/data/events.json'
import { DecoratedCalendarEvent, StoreCalendarEvent, MapBounds } from '@/types'
import { markRaw, shallowRef } from "vue";
import { RRule } from "rrule";
import dayjs from 'dayjs'
import mapboxgl from "mapbox-gl";

const recurringLimit = dayjs().add(1, 'year').toDate()
const events: StoreCalendarEvent[] = Object.values(eventData)
  .map((event: DecoratedCalendarEvent) => {
    const expanded = event.recurrence ? RRule.fromString(event.recurrence[0]).all((date) => {
      return date < recurringLimit
    }) : []
    const startDate = new Date(event.start?.dateTime || (event.start?.date + `T00:00:00`) || 0)
    const endDate = new Date(event.end?.dateTime || (event.end?.date + `T00:00:00`) || 0)
    return {
      ...event,
      startDate,
      endDate,
      rrule: event.recurrence ? RRule.fromString(event.recurrence[0]) : null,
      rruleExpanded: expanded,
      nextEvent: expanded.find((date) => date > new Date()) || startDate,
    }
  })
  .filter((event) => event.nextEvent >= new Date())

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    events,
    mapBounds: markRaw(shallowRef(null as MapBounds | null)),
    tags: [] as string[],
    whenToggle: "all",
    markers: [] as mapboxgl.Marker[],
    semiSelected: null as StoreCalendarEvent | null,
  }),
  getters: {
    sortedEvents(state): StoreCalendarEvent[] {
      // @ts-expect-error not sure why this is an error
      return state.events.sort((a, b) => {
        return a.nextEvent.getTime() - b.nextEvent.getTime()
      })
    },
    controlFilteredEvents(state): StoreCalendarEvent[] {
      return this.sortedEvents
        .filter((event) => {
          if (!event.metadata) {
            return false
          }
          if (state.tags.length) {
            return event.metadata.tags.some((tag) => state.tags.includes(tag))
          }
          return true
        })
        .filter((event) => {
          if (state.whenToggle === 'all') {
            return true
          }
          if (state.whenToggle === 'this-week') {
            return event.nextEvent < dayjs().add(7, 'day').toDate()
          }
          if (state.whenToggle === 'this-month') {
            return event.nextEvent < dayjs().add(1, 'month').toDate()
          }
          return true
        })
    },
    filteredEvents(): StoreCalendarEvent[] {
      let filtered = this.controlFilteredEvents
      const mb = this.mapBounds
      if (mb) {
        filtered = filtered.filter((event) => {
          if (!event.coordinates) {
            return false
          }
          return event.coordinates.lat < mb._ne.lat
            && event.coordinates.lat > mb._sw.lat
            && event.coordinates.lng < mb._ne.lng
            && event.coordinates.lng > mb._sw.lng
        })
      }
      return filtered
    }
  },
  actions: {
    updateMapBounds(bounds: MapBounds) {
      this.mapBounds = bounds
    },
  }
})