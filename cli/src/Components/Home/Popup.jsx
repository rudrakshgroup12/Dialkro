// Popup.js
import React from 'react';
import './Popup.css'; // Style file
import bestad from "../assets/bestad.jpg";
const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay position-relative">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">X</button>
      <img src={bestad} alt="" className='adimg'/>
      pus
      </div>
    </div>
  );
};

export default Popup;