// renderer.js (or any other JavaScript file loaded in your Electron app)
const { ipcRenderer } = require('electron');

if ('geolocation' in navigator) {
  // Geolocation is supported
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      ipcRenderer.send('location', { latitude, longitude });
    },
    (error) => {
      console.error(`Error getting location: ${error.message}`);
    }
  );
} else {
  // Geolocation is not supported
  console.error('Geolocation is not supported');
}

document.getElementById('getLocationButton').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

function showPosition(position) {
  const coordinatesElement = document.getElementById("coordinates");
  coordinatesElement.innerHTML = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}
