import React from "react";
import sindurdan from "../images/ap.png";
import hand from "../images/w22.png";
import image from "../images/brideback.jpg";

import "./WeadingDate.css";

const WeadingDate = () => {
  return (
    <div className="main-slider">
      <div className="display-table center-text">
        <div className="display-table-cell" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize: "cover" }}>
          <div className="slider-content">
            <h5 className="date" style={{color: "blue", margin: "-15vh", fontWeight: "bold"}}>19th May 2025</h5>
            <h3 className="pre-title" style={{color: "blue"}}>Save The Date</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeadingDate;
