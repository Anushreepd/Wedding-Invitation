import React from "react";
import Banner from "./Banner";
import ImageGalleryComponent from "./ImageGalleryComponent";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";
const CalendarAndGallary = () => {
  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="container">
      <div
        className="display-table center-text"
      >
        <Banner/>
        <ImageSlider/>
        <div className="invitation-button" style={{marginTop: "200px", width: "35%", height: "35px", display: "flex", justifyContent: "center"}}>
            <button onClick={() => navigate("/Invitation")}>
              <div style={{fontSize: "20px", fontFamily: "PlayBall, cursive"}}>Invitation</div>
            </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarAndGallary;
