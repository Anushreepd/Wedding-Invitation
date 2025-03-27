import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./WeadingDate.css";

const Banner = () => {
  const navigate = useNavigate();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const targetDate = new Date("May 19, 2025 09:20:00");

  useEffect(() => {
    const countDownDate = targetDate.getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return (
    <div className="main-slider">
      <div
        className="display-table center-text"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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
                <span className="title">{days}</span> Days
              </div>
              <div className="time-sec">
                <span className="title">{hours}</span> Hours
              </div>
              <div className="time-sec">
                <span className="title">{minutes}</span> Minutes
              </div>
              <div className="time-sec">
                <span className="title">{seconds}</span> Seconds
              </div>
            </div>
          </div>
        </div>

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
