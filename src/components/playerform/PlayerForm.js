import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./playerform.css";

const PlayerForm = ({ addPlayers }) => {
  const history = useHistory();
  const [playerone, setPlayerone] = useState({
    name:'', 
    currentScore: 0
  });
  const [playertwo, setPlayertwo] = useState({ 
    name:'', 
    currentScore: 0}
  );
  const [maxscore, setMaxscore] = useState();
  const [isValide, setIsValide] = useState(false)
  const handelSubmit = (e) => {
    e.preventDefault();
       setIsValide(true)
       // make sure you send max score 
      addPlayers([ playerone, playertwo ] );
      console.log("data:", playerone, playertwo,  maxscore);
     setTimeout(()=> {
      history.push("/game");
     }, 1500)
  
  };
  return (
    /* Start Gmae Player info */
    <div className="container">
    
      <div className="player-info">

        <form id="form" onSubmit={handelSubmit}>
        {
         isValide? <div className="valid-form" >
         Waiting for redirection...
         </div> : null
       }
          <h1> Game Setting </h1>
          {/* Player one  */}
          <div className="input-group">
            <label> Player 1</label>
            <input
              type="text"
              name="playerone"
              value={playerone.name}
              onChange={(e) => setPlayerone({name:e.target.value, currentScore: 0})}
              placeholder="Type you name"
            />
          </div>
          {/* Player Two */}
          <div className="input-group">
            <label> Player 1</label>
            <input
              type="text"
              name="playeetwo"
              value={playertwo.name}
              onChange={(e) => setPlayertwo({name:e.target.value, currentScore: 0})}
              placeholder="Type you name"
            />
          </div>
          {/* Max Scroe */}
          <div className="input-group">
            <label>Max Score</label>
            <input
              required
              type="number"
              name="maxscroe"
              value={maxscore}
              min="15"
              onChange={(e) => setMaxscore(e.target.value)}
              placeholder="Type max scroe"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    /* End Game Player iinfo  */
  );
};

export default PlayerForm;
