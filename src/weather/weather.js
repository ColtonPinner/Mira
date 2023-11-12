// Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as WeatherIcons from './weathericons'; // Use '*' to import all exports
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

  const getWeatherIcon = () => {
    if (!weather) {
      return null;
    }

    const weatherCode = weather.weather[0].id;

    switch (true) {
      case weatherCode >= 200 && weatherCode < 300:
        return WeatherIcons.thunderstormIcon;
      case weatherCode >= 300 && weatherCode < 600:
        return WeatherIcons.rainyIcon;
      case weatherCode >= 600 && weatherCode < 700:
        return WeatherIcons.snowyIcon;
      case weatherCode >= 700 && weatherCode < 800:
        return WeatherIcons.foggyIcon;
      case weatherCode === 800:
        return WeatherIcons.sunnyIcon;
      case weatherCode > 800 && weatherCode < 900:
        return WeatherIcons.cloudyIcon;
      default:
        return WeatherIcons.sunnyIcon;
    }
  };

  return (
    <div className="weather-container">
      {weather && (
        <>
          <h2>{weather.name}</h2>
          <div className="weather-info">
            <div className="big-icon">
              {getWeatherIcon()}
            </div>
            <h3 className="temperature">{Math.round(weather.main.temp)}°F</h3>
          </div>
          <h2>{weather.weather[0].description}</h2>
        </>
      )}
    </div>
  );
};

export default Weather;
