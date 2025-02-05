<template>
  <div id="map"></div>
</template>

<script setup>
import mapboxgl from "mapbox-gl";
import { onMounted } from "vue";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic2hhcm1hZTA5IiwiYSI6ImNtNnJvdDkyZDAwOHIya3FjbDc4emM5dnMifQ.fI6I2PAIYO-kkAKPO_fdiw"; // 🔑 Replace with your key

onMounted(() => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

  // const map = new mapboxgl.Map({
  //   container: "map",
  //   style: "mapbox://styles/mapbox/streets-v11", // Change style if needed
  //   center: [123.4832, 13.2924], // Bicol University Polangui Campus coordinates
  //   zoom: 15, // Adjust zoom level
  // });
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9", // Pure satellite image
    center: [123.4832, 13.2924],
    zoom: 15,
  });
  map.addControl(new mapboxgl.NavigationControl()); // Add zoom controls
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
