import React, { useState, useEffect } from "react";

const landingSummerEvent = () => {
  const calculateTimeRemaining = () => {
    const endDate = new Date("2024-11-01");
    const now = new Date();
    const totalSeconds = Math.floor((endDate - now) / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="summer-event-section">
      <h2>Big Summer Event</h2>
      <div className="summer-event-count">
        <div className="card">
          <h3>{timeRemaining.days}</h3>
          <p>Days</p>
        </div>
        <div className="card">
          <h3>{timeRemaining.hours}</h3>
          <p>Hours</p>
        </div>
        <div className="card">
          <h3>{timeRemaining.minutes}</h3>
          <p>Minutes</p>
        </div>
        <div className="card">
          <h3>{timeRemaining.seconds}</h3>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
};

export default landingSummerEvent;
