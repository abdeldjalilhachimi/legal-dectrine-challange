import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./winer.css";
const Winer = ({ winerName }) => {
  const history = useHistory();
  const [display, setDisplay] = useState();
  const [hide, setHide] = useState();
  const handelClick = () => {
    setDisplay("none");
  };
  const handelNewGame = () => {
    history.push("/");
  };
  const handelExit = () => {
    setHide("none");
  };
  return (
    <div className="winer-wrapper" style={{ display: hide }}>
      <div className="model" style={{ display: display }}>
        <div className="close">
          <span onClick={handelClick}>X</span>
        </div>
        <h5> The winer is : {winerName}! </h5>
        <div className="btn-actions">
          <button className="new-game" onClick={handelNewGame}>
            New Game
          </button>
          <button className="exit" onClick={handelExit}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Winer;
