import React from "react";
import { useNavigate } from "react-router-dom";

import "./WeadingDate.css";

const WeadingDate = () => {
  const navigate = useNavigate();
  return (
    <div className="main-slider">
      <div className="display-table center-text">
        <div className="image-container">
        {/* Added separate container for header texts */}
        <div className="text-overlay">
        <div
            className="header-texts"
            style={{
              position: "absolute",
              top: "10px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h5
              className="date"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "0px",
              }}
            >
              Wedding Invitation
            </h5>
            <h3
              className="pre-title"
              style={{
                color: "white",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "16px", 
                lineHeight: "1.2",
                margin: "15px",
              }}
            >
              As we embark on this journey of togetherness, we would be delighted
              to have you with us to celebrate the beginning of our forever.
            </h3>
          </div>
          </div>

        <div className="decorative-image">
          <img src = "/images/brideback2.png"
          alt= "couple"
          className= "masked-image"/>
        </div>
            <button
              className="redirect-button"
              onClick={() => navigate("/Banner")}
            >
              TAP HERE!
            </button>
        
        </div>
      </div>
    </div>
  );
};



export default WeadingDate;
