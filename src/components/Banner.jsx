import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./WeadingDate.css";

const Banner = () => {
  const navigate = useNavigate();
  const targetDate = new Date("May 19, 2025 09:20:00").getTime();
  const getTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  // ✅ Set initial state instantly
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-slider">
      <div
        className="display-table center-text"
      >
        <h5
          className="date"
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Save The Date
        </h5>

        <div className="slider-content">
          <div className="remaining-time">
            <div
              id="clock"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="time-sec">
                <span className="title">{timeLeft.days}</span> Days
              </div>
              <div className="time-sec">
                <span className="title">{timeLeft.hours}</span> Hours
              </div>
              <div className="time-sec">
                <span className="title">{timeLeft.minutes}</span> Minutes
              </div>
              <div className="time-sec">
                <span className="title">{timeLeft.seconds}</span> Seconds
              </div>
            </div>
          </div>
        </div>

        <div className="calendar-button-wrapper">
  <div className="calendar-container">
    <h2 className="month-title">
      May <span className="year">2025</span>
    </h2>
    <Calendar
      view="month"
      activeStartDate={new Date(2025, 4, 1)}
      tileClassName={({ date }) =>
        date.getDate() === 19 &&
        date.getMonth() === 4 &&
        date.getFullYear() === 2025
          ? "highlight-date"
          : ""
      }
      minDetail="month"
      maxDetail="month"
      showNavigation={false}
    />
  </div>

  <button className="redirect-button" onClick={() => navigate("/Invitation")}>
    INVITATION
  </button>
</div>


        <button
          className="redirect-button"
          onClick={() => navigate("/Invitation")}
        >
          INVITATION
        </button>
      </div>
    </div>
  );
};

export default Banner;
