import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = 'bd5a2f8516050e2c75fb36723d6d60f4';
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

          axios.get(url)
            .then(response => {
              setWeather(response.data);
            })
            .catch(error => {
              console.error('Error fetching weather data:', error);
            });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);

  return (
    <div className="weather-container"> {/* Apply the 'weather-container' class */}
      {weather && (
        <>
          <h2>{weather.name}</h2>
          <h3>{Math.round(weather.main.temp)}°F</h3>
          <h2>{weather.weather[0].description}</h2>
        </>
      )}
    </div>
  );
};

export default Weather;
