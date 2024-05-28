import React, { useState } from 'react';
import '../Styling/Notification.css';
import Dialogbox from './Dialogbox';

function Alert() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="alert-container">
      <h5>Alert</h5>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="alert-item">
          <div className="symbol-container">
            <img src={'image7.png'} alt="symbol" className="symbol" />
          </div>
          <div className="message-container">
            <p className="alert-message">Violation Detected!</p>
            <p className="time-stampnotification">12:03</p>
         
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

export default Alert;
