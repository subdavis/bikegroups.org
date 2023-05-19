<script lang="ts" setup>
import mapboxgl from 'mapbox-gl'
import { computed, onMounted, ref, shallowRef, watch, watchEffect } from 'vue';
import { MapBounds } from '@/types';
import { useDataStore } from '@/store';

const mapRef = ref<HTMLElement | null>(null)
const dataStore = useDataStore()
const selectedPoint = shallowRef(null as null | mapboxgl.MapboxGeoJSONFeature)
let marker: mapboxgl.Marker | null = null
const emit = defineEmits<{
  (e: 'map-moved', bounds: MapBounds): void,
}>()

const geojson = computed(() => ({
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: dataStore.controlFilteredEvents
      .filter((event) => event.coordinates)
      .map((event) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [event.coordinates?.lng, event.coordinates?.lat]
        },
        properties: {
          title: event.summary,
          location: event.location,
          id: event.id,
          recurringEventId: event.recurringEventId,
        },
      })),
  },
}))

onMounted(() => {
  if (mapRef.value === null) return;
  const map = new mapboxgl.Map({
    container: mapRef.value,
    center: [-93.27, 46.2],
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/dark-v11',
    zoom: 5,
    accessToken: 'pk.eyJ1IjoiY29uZHVpdDM5MzUiLCJhIjoiY2xoZ3NudGUxMDAxZzNtcDh2MmZzbjZrZSJ9.Xjnz8MHnvD8BcpgvkTXtrA',
  });

  watch(() => dataStore.semiSelected, () => {
    if (marker !== null) marker.remove()
    if (dataStore.semiSelected === null) return;
    marker = new mapboxgl.Marker()
      // @ts-expect-error TODO remove
      .setLngLat([dataStore.semiSelected?.coordinates?.lng, dataStore.semiSelected?.coordinates?.lat])
      .addTo(map)
  })

  map.on('load', () => {
    // map.addImage('custom-marker', marker)
    map.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      }
    })
    watchEffect(() => {
      // @ts-expect-error the typings for setData() are wrong
      map.getSource('points').setData(geojson.value.data)
    })
    map.addLayer({
      id: 'points',
      type: 'circle',
      source: 'points',
      paint: {
        'circle-radius': 7,
        'circle-color': 'purple',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#ddd'
      }
    })
    map.on('click', () => {
      if (marker) marker.remove()
      selectedPoint.value = null
    })
    map.on('click', 'points', (event) => {
      if (marker) marker.remove()
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['points']
      });
      if (features.length) {
        selectedPoint.value = features[0]
        // new mapboxgl.Popup()
        //   .setLngLat(event.lngLat)
        //   .setHTML('<div id="popup" />')
        //   .addTo(map);
        
        marker = new mapboxgl.Marker()
          // @ts-expect-error the typings for Geometry are wrong
          .setLngLat(selectedPoint.value.geometry.coordinates)
          .addTo(map);
      }
    })
    map.on('mouseenter', 'points', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
  })

  map.on('moveend', () => {
    console.log('A moveend event occurred.');
    // @ts-expect-error the typings for getBounds() are wrong
    emit('map-moved', map.getBounds())
  });
  map.on('mouseleave', 'points', () => {
    map.getCanvas().style.cursor = '';
  });
})


</script>

<template>
  <div id="map" ref="mapRef"></div>
</template>

<style scoped>
#map {
  height: 100vh;
  min-width: calc(100vw - 300px);
}
.popup {
  color: black;
}
</style>