import "./gamelayout.css";
import Dice from "../dice/Dice";
import Player from "../player/Player";
import { useState } from "react";
const GameLayout = ({ playersNames }) => {
  const [randomNumber, setRandomNumber] = useState(5);
  const handelClick = () => {
    let x = Math.round(Math.random() * (6 - 1) + 1);
    setTimeout(() => {
      setRandomNumber(Math.round(Math.random() * (6 - 1) + 1));
    }, 100);
    setRandomNumber(x);
  };

  return (
    <div className="players-wrapper">
      {/* Start Player */}
      {playersNames.map((player, index) => {
        console.log("res:", player.name, index);
        return (
          <Player
            key={index}
            name={player.name}
            score={player.currentScore}
            diceScore={randomNumber}
            defalutName={`Player ${index + 1}`}
            handelClick={handelClick}
          />
        );
      })}
      <div className="dice">
        <Dice randomNumber={randomNumber} />
      </div>
    </div>
  );
};

export default GameLayout;
