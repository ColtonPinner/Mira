import React, { useState, useEffect } from 'react';
import './news.css';

const NewsComponent = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const apiKey = '510d1cba2c514b98b50abbb32eec4f3e';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setNews(data.articles[0]))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!news) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <div className='news'>
      <h1>{news.title}</h1>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsComponent;
