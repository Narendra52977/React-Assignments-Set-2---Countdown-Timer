import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [isStarted, setStart] = useState(false);
  const handleTime = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (isStarted) {
      setStart(false);
    }
    let timeCount = Math.floor(event.target.value);
    if (typeof timeCount === "number" && timeCount >= 0) {
      setTime(timeCount);
      setStart(true);
    } else setTime(0);
  };
  useEffect(() => {
    const id =
      time > 0 &&
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    return () => clearInterval(id);
  }, [time]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={() => handleTime(event)} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
