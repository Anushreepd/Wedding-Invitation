import React from "react";
import { useNavigate } from "react-router-dom";
import sindurdan from "../images/ap.png";
import hand from "../images/w22.png";
import image from "../images/brideback.jpg";

import "./WeadingDate.css";

const WeadingDate = () => {
  const navigate = useNavigate();
  return (
    <div className="main-slider">
      <div className="display-table center-text">
        <div
          className="display-table-cell"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh", // Full-screen height
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Added separate container for header texts */}
          <div
            className="header-texts"
            style={{
              position: "absolute",
              top: "10px",
              width: "100%",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <h5
              className="date"
              style={{
                color: "black",
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
                color: "black",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "16px", 
                lineHeight: "1.2",
                margin: "0",
              }}
            >
              As we embark on this journey of togetherness, we would be delighted
              to have you with us to celebrate the beginning of our forever.
            </h3>
          </div>

          {/* Slider content section */}
          <div className="slider-content" style={{ marginTop: "auto", padding: "10px" }}>
            <button
              className="redirect-button"
              onClick={() => navigate("/Banner")}
              style={{
                display: "block",
                margin: "20px auto",
                padding: "10px 20px",
                fontSize: "14px",
              }}
            >
              TAP HERE!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default WeadingDate;
