// WeatherIcons.js

import React from 'react';
import './weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCloudMoon,
  faSmog,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faBolt,
  faTornado,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

export const cloudyIcon = <FontAwesomeIcon icon={faCloud} />;
export const cloudyNightIcon = <FontAwesomeIcon icon={faCloudMoon} />;
export const foggyIcon = <FontAwesomeIcon icon={faSmog} />;
export const rainyIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
export const snowyIcon = <FontAwesomeIcon icon={faSnowflake} />;
export const sunnyIcon = <FontAwesomeIcon icon={faSun} />;
export const thunderstormIcon = <FontAwesomeIcon icon={faBolt} />;
export const tornadoIcon = <FontAwesomeIcon icon={faTornado} />;
export const windyIcon = <FontAwesomeIcon icon={faWind} />;
