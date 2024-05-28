import React, { useRef, useState } from 'react';
import '../Styling/AudioPlayer.css';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const videoRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div className="playvideo">
      <video src="new.mp4" className="playbackvideo" controls ref={videoRef} />
    </div>
  );
};

export default AudioPlayer;
