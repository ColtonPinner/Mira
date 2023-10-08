import React, { useState } from 'react';
import './spotify.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById('audio');
    isPlaying ? audio.pause() : audio.play();
  };

  return (
    <div className="music-player">
      <audio id="audio" src="path_to_your_audio_file.mp3"></audio>
      <button className='play-button' onClick={togglePlay}>{isPlaying ? 'Pause' : '❤️'}</button>
    </div>
  );
};

export default MusicPlayer;
