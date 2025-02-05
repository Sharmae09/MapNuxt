<template>
  <div>
    <h2>Google Map</h2>
    <div ref="mapRef" class="map"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// Store reference to the map container
const mapRef = ref(null);

// On mount, either use the existing Google Maps API or load it
onMounted(() => {
  if (window.google) {
    initMap();
  } else {
    loadGoogleMapsAPI().then(initMap);
  }
});

// Function to load the Google Maps API script dynamically
const loadGoogleMapsAPI = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    document.head.appendChild(script);
  });
};

// Function to initialize the map
const initMap = () => {
  new google.maps.Map(mapRef.value, {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 12,
  });
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>
