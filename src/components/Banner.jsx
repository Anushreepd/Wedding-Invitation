import React from "react";
import bannerVedio from "../vedios/bannerVedio.mp4";
import { useNavigate } from "react-router-dom";
import hand from "../images/w22.png";
import "./WeadingDate.css";
import image from "../images/calenderWithoutHeart.jpg";

const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className="main-slider">
      <div className="display-table center-text">
        <div className="display-table-cell">
        <h5
              className="date"
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "24px", // Responsive font size
                marginBottom: "0px",
              }}
            >
             Save The Date
            </h5>
          <div className="slider-content"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "80%",
            height: "60vh",
            margin: "auto",
            borderRadius: "20px", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
          }}          
        >
           
            {/* Button for Redirection */}
            <button
              className="redirect-button"
              onClick={() => navigate("/wedding-date")}
            >
              TAP HERE!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
