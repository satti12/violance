
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styling/RecordingScreen.css';
import Dialogbox from './Dialogbox';

function Recording() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="recording-container">
      <h5> violence Recording</h5>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="recording-item">
          <div className="icon-wrapper">
            <img src={'image3.png'} alt="icon" className="icon" />
          </div>
          <div className="text-wrapper">
            <div className="text-content">
              <p className="recording-message">Recording</p>
              <Link to="/AudioPlayer">
                <p className="rerdingvideo">Play Video</p>
              </Link>
             
            </div>
            <p className="time-stamp">12:03</p>
            <img 
                src={'image18.png'} 
                alt="symbol" 
                className="deletesymbol" 
                onClick={openModal} 
              />
          </div>
        </div>
      ))}
       <Dialogbox isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Recording;
