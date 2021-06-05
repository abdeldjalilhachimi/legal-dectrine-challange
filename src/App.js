import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameLayout from "./components/gamelayout/GameLayout";
import PlayerForm from "./components/playerform/PlayerForm";
import PageNotFound  from './components/PageNotFound'
import './styles/normalize.css'; 

function App() {

       const [playersNames, setPlayersNames] = React.useState(); 
        const addPlayers = (e)=> {
          console.log( e)
          setPlayersNames(e)
        }

  return (
    <Router>  
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/game">
              <GameLayout playersNames={playersNames} />
            </Route>
            <Route exact  path="/">
              <PlayerForm  addPlayers={addPlayers}/>
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
