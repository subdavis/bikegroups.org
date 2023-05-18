<script lang="ts" setup>
import { useDataStore } from '@/store';
import { ref } from 'vue';
import About from './About.vue';

const store = useDataStore()
function onlyUnique(value: string, index: number, array: string[]) {
  return array.indexOf(value) === index;
}
const tagOptions = store.events.map((event) => event.metadata?.tags || []).flat().filter(onlyUnique)

const toggle = ref('all')
</script>

<template>
  <div class="d-flex align-center">
    <v-btn-toggle variant=outlined v-model="toggle" color="cyan" mandatory class="mr-2 control">
      <v-btn value="all" size="small">
        <span class="no-transform">All Events</span>
      </v-btn>
      <v-btn value="this-week" size="small">
        <span class="no-transform">This Week</span>
      </v-btn>
      <v-btn value="this-month" size="small">
        <span class="no-transform">This Month</span>
      </v-btn>
    </v-btn-toggle>
    <v-combobox
      label="Tags"
      :items="tagOptions"
      v-model="store.tags"
      variant="outlined"
      density="compact"
      multiple
      clearable
      chips
      class="control mr-2"
      hide-details
    />
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-icon size="x-large" icon="mdi-information-outline" v-bind="props"></v-icon>
      </template>
      <About width="300px"/>
      
    </v-menu>
  </div>
</template>

<style scoped>
.no-transform {
  text-transform: none;
}

.control {
  height: 48px !important;
  min-width: 200px;
  background-color: #222222dd;
}
</style>
