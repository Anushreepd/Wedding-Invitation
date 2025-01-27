import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/calenderWithHeart.jpg";
import "./WeadingDate.css";

const Banner = () => {
  const navigate = useNavigate();
  const [isExpired, setIsExpired] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("May 19, 2025 09:20:00").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      // Only update state if the value has changed
      if (day !== days) setDays(day);
      if (hour !== hours) setHours(hour);
      if (minute !== minutes) setMinutes(minute);
      if (second !== seconds) setSeconds(second);

      // If the countdown is finished
      if (distance < 0) {
        clearInterval(x);
        setIsExpired(true);
      }
    }, 1000);

    return () => clearInterval(x); // Clear interval on component unmount
  }, [days, hours, minutes, seconds]);

  return (
    <div className="main-slider">
      <div
        className="display-table center-text"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
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

        <div
          className="slider-content"
          style={{
            height: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Countdown Timer */}
          <div className="remaining-time">
            {isExpired ? (
              <div>Yay....</div>
            ) : (
              <div id="clock" style={{ display: "flex", justifyContent: "center" }}>
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
            )}
          </div>
        </div>

        {/* Calendar Image */}
        <div
           className="slider-content"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "80%",
            height: "60vh",
            marginTop: "40px",
            marginBottom: "0px",
            borderRadius: "20px", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
          }}
        ></div>
      </div>

      {/* buttons */}
  <button
    className="redirect-button"
    onClick={() => navigate("/Invitation")}
  >
    INVITATION
  </button>

</div>
  );
};

export default Banner;