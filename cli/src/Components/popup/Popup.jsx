import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup() {
  const [popup, setPop] = useState(true); // Change initial state to true

  useEffect(() => {
    // Check if the popup state is stored in localStorage
    const isPopupShown = localStorage.getItem("isPopupShown");
  
    // If the popup state is not stored or it is false, set the popup state to true
    if (!isPopupShown || isPopupShown === "true") {
      setPop(true);
    }
  }, []);// Run this effect only once on component mount

  const closePopup = () => {
    setPop(false);
  };

  return (
    <div>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1>popup</h1>
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div>
                <p>This is a simple popup in React js</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Popup;
