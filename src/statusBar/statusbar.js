// StatusBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faUser, faS } from '@fortawesome/free-solid-svg-icons';
import './statusbar.css';

const StatusBar = () => {
  return (
    <div className="status-bar">
    <FontAwesomeIcon className="status-bar-icon" icon={faWifi} />
    <FontAwesomeIcon className="status-bar-icon" icon={faUser} />
    <FontAwesomeIcon className="status-bar-icon" icon={faS} />
    <FontAwesomeIcon className="status-bar-icon" icon={faWifi} />

  </div>
  );
};

export default StatusBar;