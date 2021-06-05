import React from "react";
import "./dice.css";

const Dice = ({ randomNumber }) => {
  return (
    <div className="dice">
      {randomNumber === 1 ? (
        <div class="dice first-face">
          <span class="dot"></span>
        </div>
      ) : null}
      {randomNumber === 2 ? (
        <div class="dice second-face">
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      ) : null}
      {randomNumber === 3 ? (
        <div class="dice third-face">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      ) : null}
      {randomNumber === 4 ? (
        <div class="fourth-face dice">
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      ) : null}
      {randomNumber === 5 ? (
        <div class="fifth-face dice">
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      ) : null}
      {randomNumber === 6 ? (
        <div class="sixth-face dice">
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Dice;
