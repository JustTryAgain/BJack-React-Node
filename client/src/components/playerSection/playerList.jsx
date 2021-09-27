import React from "react";
import Player from "./player";
import './playersStyle.scss';

const PlayersList = ({players, currentPlayer}) => {
    console.log(players);
    return (
        <div className="players_fields">
            {players.map((player, index) => <Player key={index} player={player} currentPlayer={currentPlayer}/>)}
        </div>
    );
}

export default PlayersList;