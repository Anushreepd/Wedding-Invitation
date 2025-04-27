import React from "react";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
const CalendarBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="container">
      <div
        className="display-table center-text"
      >
        <Banner/>
        <div style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
          <button className="invitation-button" onClick={() => navigate("/Invitation")}>
            <div style={{fontSize: "20px", fontFamily: "PlayBall, cursive"}}>Invitation</div>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarBanner;
