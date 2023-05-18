<script setup lang="ts">
import { useDataStore } from "@/store";
import { StoreCalendarEvent } from "@/types";
import { ref, watch } from "vue";

const props = defineProps<{
  event: StoreCalendarEvent
}>()

const store = useDataStore()
const hovering = ref(false)

function updateHover(newval: boolean) {
  if (newval) store.semiSelected = props.event
  else store.semiSelected = null
}
watch(hovering, updateHover)
</script>

<template>
  <v-hover v-model="hovering">
    <template v-slot:default="{ isHovering, props }">
    <v-card class="pa-2 mb-2 card" :class="{ 'hover-card': isHovering }" v-bind="props" :color="isHovering ? 'blue-grey-darken-4' : 'default'" >
      <h2>
        <a :href="event.metadata?.link">{{ event.summary }}</a>
      </h2>
      <div class="d-flex flex-row mt-2 text-body-2">
        <v-icon icon="mdi-calendar-today mr-2"/>
        <div>
          {{ event.nextEvent.toDateString() }}
          <p class="text-caption" v-if="event.start?.dateTime && event.end?.dateTime">
            {{ (new Date(event.start?.dateTime || '')).toLocaleTimeString() }} -
            {{ (new Date(event.end?.dateTime || '')).toLocaleTimeString() }}
          </p>
        </div>
      </div>
      <div v-if="event.rrule" class="d-flex flex-row mt-1 text-body-2">
        <v-icon icon="mdi-refresh-circle mr-2"></v-icon>
        <p>{{ event.rrule.toText() }}</p>
      </div>
      <div v-if="event.location" class="d-flex flex-row mt-1">
        <v-icon icon="mdi-map-marker mr-1"></v-icon>
        <a class="text-address text-caption" :href="`https://www.google.com/maps/search/?api=1&query=${event.location}`">
          {{ event.location }}
        </a>
      </div>
      <v-chip
        class="mr-1 mt-2"
        size="x-small"
        v-if="event.metadata?.tags"
        v-for="tag in event.metadata?.tags"
        :key="tag"
      >
        {{ tag }}
      </v-chip>
    </v-card>
    </template>
  </v-hover>
</template>

<style scoped>
.text-address {
  line-height: 1.0rem;
}
.card {
  border: 1px solid transparent;
}
.card.hover-card {
  border: 1px solid lightblue;
}
</style>
