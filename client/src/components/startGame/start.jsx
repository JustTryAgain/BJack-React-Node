import React, {useState} from "react";
import './gameinit.scss'
import InitList from "./initList.jsx";

/*<div className="error">
  {errorMessage}
</div>*/
const StartGame = () => {
  const [newPlayers, setNewPlayer] = useState([]);
  const [playerName, setPlayerName] = useState('');


  return (
    <div className='init-game'>
      <div className="add-player-wrapper">
        <button className="add-player" onClick={}>
          Add New Player
        </button>
      </div>
      <form className="init-players" onSubmit={}>
        <button className="start-game">
          Start
        </button>
      </form>
      <InitList/>
    </div>);
}
export default StartGame;