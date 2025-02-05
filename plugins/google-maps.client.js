import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  // Ensure window.initMap is available
  window.initMap = () => {
    // You can modify this to dynamically initialize the map wherever you need
    const mapContainer = document.getElementById("map"); // Or use a ref if within Vue component
    new google.maps.Map(mapContainer, {
      center: { lat: 37.7749, lng: -122.4194 }, // Example coordinates (San Francisco)
      zoom: 12,
    });
  };

  // Load Google Maps API script dynamically
  const loadGoogleMapsAPI = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Load API key from .env

      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      document.head.appendChild(script);
    });
  };

  // Call loadGoogleMapsAPI and initialize the map
  loadGoogleMapsAPI().then(() => {
    console.log("Google Maps API loaded");
  });
});
