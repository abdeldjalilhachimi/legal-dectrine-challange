import "./gamelayout.css";
import Dice from "../dice/Dice";
import PlayerOne from "../player/PlayerOne";
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
  const [currentScoreP1, setCurrentScoreP1] = useState(0);
  const [currentScoreP2, setCurrentScoreP2] = useState(0);

  const [style, setStyle] = useState();

  const handelClickOne = () => {
    let x = Math.round(Math.random() * (6 - 1) + 1);
    setRandomNumber(x);
    setCurrentScoreP1(x + currentScoreP1);
    setPlayerTurnOne(!playerTurnOne);
    setPlayerTurnTwo(playerTurnTwo ? !playerTurnTwo : playerTurnTwo);
    setStyle(disbalPlayer);
  };

  const handelClickTwo = () => {
    let y = Math.round(Math.random() * (6 - 1) + 1);
    setRandomNumber2(y);
    setCurrentScoreP2(y + currentScoreP2);
    setPlayerTurnTwo(!playerTurnTwo);
    setPlayerTurnOne(playerTurnOne ? !playerTurnOne : playerTurnOne);
    setStyle(disbalPlayer);
  };

  /*   const randomThrow = () => {
    let randomThrow = Math.round(Math.random() * (2 - 1) + 1);
    if (randomThrow === 1) {
      console.log("throw:", playerTurnOne);
      setPlayerTurnOne(true);
    } else {
      console.log("throw:", playerTurnTwo);
      setPlayerTurnTwo(true);
    }
  }; */

  useEffect(() => {
    let randomThrow = Math.round(Math.random() * (2 - 1) + 1);
    randomThrow === 1
      ? setPlayerTurnOne(!playerTurnOne)
      : setPlayerTurnTwo(!playerTurnOne);
    //randomThrow();
  }, []);
  const playerone = playersNames[0];
  const playertwo = playersNames[1];
  const maxscore = playersNames[2];

  return (
    <div className="players-wrapper">
      {/* Start Player */}
      <PlayerOne
        name={playerone.name}
        score={playerone.currentScore + currentScoreP1}
        diceScore={randomNumber}
        defalutName={`Player ${1}`}
        handelClick={handelClickOne}
        playerTurn={playerTurnOne}
        style={style}
        totalScore={currentScoreP1}
        maxScore={maxscore}
      />
      <PlayerTwo
        name={playertwo.name}
        score={playertwo.currentScore + currentScoreP2}
        diceScore2={randomNumber2}
        defalutName={`Player ${2}`}
        handelClick={handelClickTwo}
        playerTurn={playerTurnTwo}
        style={style}
        totalScore={currentScoreP2}
        maxScore={maxscore}
      />
      <Dice randomNumberOne={randomNumber} randomNumberTwo={randomNumber2} />
    </div>
  );
};
export default GameLayout;
