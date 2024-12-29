import React from "react";
import sindurdan from "../images/ap.png";
import hand from "../images/w22.png";
import image from "../images/brideback.jpg";

import "./WeadingDate.css";

const WeadingDate = () => {
  return (
    <div className="main-slider">
      <div className="display-table center-text">
        <div className="display-table-cell" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize: "cover", width:"100%", height:"auto" }}>
          <div className="slider-content">
            <h5 className="date" style={{color: "blue", margin: "-25vh", fontWeight: "bold"}}>19th May 2025</h5>
            <h3 className="pre-title m-20" style={{color: "blue", margin: "-20vh", fontSize: "25p"}}>Save The Date</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeadingDate;
