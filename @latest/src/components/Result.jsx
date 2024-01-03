import React, { useState } from 'react';

export default function Result(props) {
  const { darkmode: initialDarkMode } = props;
  const [darkmode, setDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const containerStyle = darkmode ? { background: "#22668D", color: "rgb(255,255,255)" } : {};

  const handleRestart = () => {
    window.location.reload();
  };

  const percentage = (props.score / 5) * 100;

  return (
    <div className='main' style={containerStyle}>
      <div className='header1'>
        <h1 style={containerStyle}>Kalvium</h1>
        <button className='Dmode' onClick={toggleDarkMode}>
          {darkmode ? "Light mode" : "Dark mode"}
        </button>
      </div>
      <div className='rbox'>
        <p className='re-sult'>Final Result</p>
        <p className='re-sult2'>{props.score} out of 5 are correct - ({percentage}%)</p>
        <button className='restart' onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}
