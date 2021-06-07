import React from "react";
import "./dice.css";

const Dice = ({ randomNumberOne, randomNumberTwo }) => {
  return (
    <div className="dice">
      {randomNumberOne === 1 ? (
        <div className="dice first-face">
          <span className="dot"></span>
        </div>
      ) : null}
      {randomNumberTwo === 1 ? (
        <div className="dice first-face">
          <span className="dot"></span>
        </div>
      ) : null}
      {randomNumberOne === 2 ? (
        <div className="dice second-face">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : null}
      {randomNumberTwo === 2 ? (
        <div className="dice second-face">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : null}
      {randomNumberOne === 3 ? (
        <div className="dice third-face">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : null}
      {randomNumberTwo === 3 ? (
        <div className="dice third-face">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : null}
      {randomNumberOne === 4 ? (
        <div className="fourth-face dice">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : null}
      {randomNumberTwo === 4 ? (
        <div className="fourth-face dice">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : null}
      {randomNumberOne === 5 ? (
        <div className="fifth-face dice">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : null}
      {randomNumberTwo === 5 ? (
        <div className="fifth-face dice">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : null}
      {randomNumberOne === 6 ? (
        <div className="sixth-face dice">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : null}
      {randomNumberTwo === 6 ? (
        <div className="sixth-face dice">
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Dice;
