import React from "react";
import sindurdan from "../images/ap.png";
import hand from "../images/w22.png";
import "./WeadingDate.css";

const WeadingDate = () => {
  return (
    <div className="main-slider">
      <div className="display-table center-text">
        <div className="display-table-cell">
          <div className="slider-content">
            <img className="sindur-dan" src={sindurdan} alt="Sindur Dan" />
            <h5 className="date">20th December 2023</h5>
            <h3 className="pre-title">Save The Date</h3>
            <h1 className="title1">
              Shubham <img className="sindur-dan" src={hand} alt="Sindur Dan" />{" "}
              Chaitali
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeadingDate;
