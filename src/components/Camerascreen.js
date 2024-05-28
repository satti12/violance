// src/Camerascreen.js
import React, { useState } from 'react';
import '../Styling/Camerascreen.css';

export const Camerascreen = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVoice, setIsVoice] = useState(false);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const handleVoiceClick = () => {
    setIsVoice(!isVoice);
  };

  return (
    <div className="Camerascreen">
      <img src="image12.png" alt="Camera" className="cameraimages" />
      <p className="cameradataandtime">25 - 5 2023     Sun 11:26</p>
      <p className="cameratext">Camera 01</p>
      <div className="pauseandvoice">
        <img
          src="image15.png"
          alt="pause"
          className={`icons ${isPaused ? 'active' : ''}`}
          onClick={handlePauseClick}
        />
        <img
          src="image16.png"
          alt="voice"
          className={`icons ${isVoice ? 'active' : ''}`}
          onClick={handleVoiceClick}
        />
      </div>
    </div>
  );
};
