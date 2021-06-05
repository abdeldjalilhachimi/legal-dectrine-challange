import React from "react";

const Player = ({ name, score, defalutName, handelClick, diceScore }) => {
  return (
    <div className="player-one">
      <div className="player-info">
        <h3>{name ? name : `${defalutName}`}</h3>
        <span className="active"></span>
      </div>
      <div className="score">
        <span className="randome-dice-score">+{diceScore}</span>
        <span className="current-score"> {score}</span>
      </div>
      <div className="run-btn">
        <button onClick={handelClick}>Run</button>
      </div>
    </div>
  );
};

export default Player;
