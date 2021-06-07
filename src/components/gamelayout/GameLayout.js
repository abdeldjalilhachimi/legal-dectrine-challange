import "./gamelayout.css";
import Dice from "../dice/Dice";
import Player from "../player/PlayerOne";
import PlayerTwo from "../player/PlayerTwo";
import { useState, useEffect } from "react";

const GameLayout = ({ playersNames }) => {
  const disbalPlayer = {
    disbaled: "disabled",
    hidden: "hidden",
    display: "none",
    noActive: "no-active",
    background: "#DDD",
    overly: "overly",
  };
  const [randomNumber, setRandomNumber] = useState(2);
  const [randomNumber2, setRandomNumber2] = useState(5);
  const [playerTurnOne, setPlayerTurnOne] = useState(false);
  const [playerTurnTwo, setPlayerTurnTwo] = useState(false);
  const [disabledP1, setDisabledP1] = useState();
  const [disabledP2, setDisabledP2] = useState();
  const [style, setStyle] = useState();

  const handelClickOne = () => {
    let x = Math.round(Math.random() * (6 - 1) + 1);
    setRandomNumber(x);
    setPlayerTurnOne(!playerTurnOne);
    setPlayerTurnTwo(playerTurnTwo ? !playerTurnTwo : playerTurnTwo);
    setStyle(disbalPlayer);
  };

  const handelClickTwo = () => {
    let y = Math.round(Math.random() * (6 - 1) + 1);
    setRandomNumber2(y);
    setPlayerTurnTwo(!playerTurnTwo);
    setPlayerTurnOne(playerTurnOne ? !playerTurnOne : playerTurnOne);
    setStyle(disbalPlayer);
  };

  const randomThrow = () => {
    let randomThrow = Math.round(Math.random() * (2 - 1) + 1);
    if (randomThrow === 1) {
      setDisabledP1(disbalPlayer);
    } else {
      setDisabledP2(disbalPlayer);
    }
  };

  useEffect(() => {
    randomThrow();
  }, []);

  const playerone = playersNames[0];
  const playertwo = playersNames[1];
  return (
    <div className="players-wrapper">
      {/* Start Player */}
      <Player
        name={playerone.name}
        score={playerone.currentScore}
        diceScore={randomNumber}
        defalutName={`Player ${1}`}
        handelClick={handelClickOne}
        randomThrow={disabledP1}
        playerTurn={playerTurnOne}
        style={style}
      />
      <PlayerTwo
        name={playertwo.name}
        score={playertwo.currentScore}
        diceScore2={randomNumber2}
        defalutName={`Player ${2}`}
        handelClick={handelClickTwo}
        randomThrow={disabledP2}
        playerTurn={playerTurnTwo}
        style={style}
      />
      <Dice randomNumberOne={randomNumber} randomNumberTwo={randomNumber2} />
    </div>
  );
};
export default GameLayout;
