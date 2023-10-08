import React, { useState, useEffect } from 'react';
import './sports.css'; // Make sure this CSS file is available

const LiveSportsScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const apiKey = '0WHVENCCwAURrZBpfZ/10OoVXMlKsUODqdVhBDDCsmoWEaqALFnZNueV3TRXL+MR';
    const apiUrl = 'https://api.collegefootballdata.com/games';

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(data => setScores(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []); // Make sure the dependencies array is correct

  // Move this closing brace down to the correct position
  return (
    <div className="content">
      <h1>Sports Scores</h1>
        {scores.map((game, index) => (
          <div key={index} className="game-slide">
            <div className="team">
              <img src={game.home_team.logo} alt="Team Logo" />
              <p>{game.home_team.name}</p>
            </div>
            <div className="versus">
              <p>vs</p>
            </div>
            <div className="team">
              <img src={game.away_team.logo} alt="Team Logo" />
              <p>{game.away_team.name}</p>
            </div>
            <div className="result">
              <p>{game.home_points} - {game.away_points}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LiveSportsScores;
