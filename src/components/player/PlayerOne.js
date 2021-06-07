const Player = ({
  name,
  score,
  defalutName,
  handelClick,
  diceScore,
  randomThrow,
  playerTurn,
  style,
}) => {
  console.log("PlayerTurn1:", playerTurn, style);
  return (
    <div className="player-one">
      <div className={playerTurn ? `${style?.overly}` : " "}></div>

      <div className="player-info">
        <h3>{name ? name : `${defalutName}`}</h3>
        <span className={playerTurn ? `${style?.noActive}` : "active"}></span>
      </div>
      <div className="score">
        <span
          className="randome-dice-score"
          style={{
            display: playerTurn ? `${style?.display}` : "block",
          }}
        >
          +{diceScore}
        </span>
        <span
          className="current-score "
          style={{
            backgroundColor: playerTurn ? style?.background : "",
          }}
        >
          {score}
        </span>
      </div>
      <div className="run-btn">
        <button
          style={{
            backgroundColor: playerTurn ? style?.background : "",
          }}
          onClick={handelClick}
          disabled={playerTurn ? style?.disbaled : null}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default Player;
