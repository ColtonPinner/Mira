import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewsComponent from './news/news';
import Footer from './footer/footer';
import Time from './time/time';
import Weather from './weather/weather';

(ReactDOM.createRoot(document.getElementById('root'))).render(
  <React.StrictMode>
    <App />
    <Time />
    <Weather />
    <NewsComponent />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
