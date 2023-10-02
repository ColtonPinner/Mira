import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = 'YOUR_API_KEY';
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

    return () => clearInterval(interval);
  }, []);

  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return dateTime.toLocaleDateString(undefined, options);
  };

  const formatTime = () => {
    let hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="time-and-date">
          <h1 className="time">
            {formatTime()}
          </h1>
          <h2 className="date">
            {formatDate()}
          </h2>
        </div>
        {weather && (
          <div className="weather">
            <h2>{weather.name}</h2>
            <h2>{Math.round(weather.main.temp)}°F</h2>
            <h2>{weather.weather[0].description}</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
