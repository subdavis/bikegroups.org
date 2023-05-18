<script setup lang="ts">
import Map from "@/components/Map.vue";
import EventCard from "./components/EventCard.vue";
import { useDataStore } from "./store";
import pluralize from "./use/pluralize";
import ControlArea from "./components/ControlArea.vue";
import About from "./components/About.vue";
const dataStore = useDataStore();
</script>

<template>
  <v-app>
    <div class="control-area">
      <ControlArea />
    </div>
    <div class="overflow-hidden d-flex">
      <Map
        :events="dataStore.controlFilteredEvents"
        class="flex-grow-1"
        @map-moved="dataStore.updateMapBounds"
      />
      <div class="overflow-y-auto card-bar px-2">
        <h1>{{ dataStore.filteredEvents.length }} {{ pluralize('Event', dataStore.filteredEvents) }}</h1>
        <V-alert border="start" border-color="warning" density="compact" class="mb-2 text-body-2">
          Always check the event website for the most current information.
        </V-alert>
        <EventCard
          v-for="(event, i) in dataStore.filteredEvents"
          :event="event"
          :key="event.id || i"
        />
        <About />
      </div>
    </div>
  </v-app>
</template>

<style>
.control-area {
  position: absolute;
  left: 6px;
  top: 6px;
  z-index: 10;
}
.card-bar {
  max-height: 100vh;
  width: 300px;
}
</style>