import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [time,setTime]=useState(0);
  const handleTime=(event)=>{
    let timeCount=Math.floor(event.target.value);
    if(typeof(timeCount)==="number"&&timeCount>=0)setTime(timeCount);
    else
    setTime(0)
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={()=>handleTime(event)} value={time}/> sec.
        </h1>
      </div>
      <div id="current-time">{/* remaining time */}</div>
    </div>
  )
}


export default App;
