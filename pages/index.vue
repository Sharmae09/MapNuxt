<template>
  <div id="layout">
    <MapboxMap />
  </div>
</template>

<script>
// import Map from "./components/Map.vue";
// import "@site/src/node_modules/mapbox-gl/dist/mapbox-gl.css";

export default {
  components: {
    Map,
  },
};
</script>

<style>
#layout {
  flex: 1;
  display: flex;
  position: relative;
}
</style>
