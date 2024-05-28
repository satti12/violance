import React from 'react';
import './Model.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from 'antd';

function Modal({ isOpen, onClose }) {
  const navigate = useNavigate(); // Get the navigate function

  const handleCancel = () => {
    navigate('/Notification');
    onClose(); 
  };

  const handleyes = (event) => {
    navigate('/Notification');
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-custom">
        <div className="Dailogbox-cont-custom">
          <div className="fontstlying">
            <p>Alert</p>
            <p className="fontstlyings">Are you sure you want to Delete this <br/> notification?</p>
          </div>

            
            <div className="dialogbox-button-group">
            <button type="submit" className="Dailogboxpassword-button-custom" onClick={handleyes}>Yes, Continue</button>
            <button type="button" className="Dailogboxpassword-button-custom cancel-button-custom" onClick={handleCancel}>CANCEL</button>
           
          </div>
 
        </div>
      </div>
   
  );
}

export default Modal;
