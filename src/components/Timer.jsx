import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-05-19") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZeros = (value) => {
    return value.toString().padStart(2, "0");
  };

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <h1>Countdown Timer</h1>
      {days || hours || minutes || seconds ? (
        <div>
          <p>
            {addLeadingZeros(days)} days {addLeadingZeros(hours)}:
            {addLeadingZeros(minutes)}:{addLeadingZeros(seconds)}
          </p>
        </div>
      ) : (
        <p>Countdown has ended!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
