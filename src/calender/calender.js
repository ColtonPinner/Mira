import React from "react";
import axios, { AxiosResponse } from "axios";
import './calender.css';

const Calender = () => {
  const fetch = require('node-fetch');
  const ical = require('ical.js');
  
  function fetchICalEvents(url) {
    return fetch(url)
      .then(response => response.text())
      .then(data => {
        const calendarData = ical.parse(data);
        return calendarData[1]; // Assuming events are in the second element
      });
  }
  
  function displayEvents(events, elementId) {
    const eventListElement = document.getElementById(elementId);
  
    events.forEach(event => {
      const li = document.createElement('li');
      li.textContent = event.summary;
      eventListElement.appendChild(li);
    });
  }
  
  const usHolidaysUrl = 'https://calendars.icloud.com/holidays/us_en-us.ics';
  const personalEventsUrl = 'YOUR_PERSONAL_ICAL_URL_HERE'; // Replace with your personal iCal URL
  const elementId = 'event-list';
  
  Promise.all([fetchICalEvents(usHolidaysUrl), fetchICalEvents(personalEventsUrl)])
    .then(([usHolidays, personalEvents]) => {
      const combinedEvents = [...usHolidays, ...personalEvents];
      displayEvents(combinedEvents, elementId);
    })
    .catch(error => console.error('Error:', error));
