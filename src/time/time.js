import React, { useState, useEffect } from 'react';
import './time.css';

const Time = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    let hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const formatDate = () => {
    const options = { day: 'numeric', weekday: 'long', month: 'long' };
    return dateTime.toLocaleDateString(undefined, options);
  };

  return (
    <div className='container'>
      <h1 className="time">{formatTime()}</h1>
      <h1 className="date">{formatDate()}</h1>
    </div>
  );
};

export default Time;
