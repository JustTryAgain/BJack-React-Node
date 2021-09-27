import React from "react";
import cn from 'classnames';
import CardList from "./cardList.jsx";

const Player = ({player,currentPlayer}) => {
    const className = cn(
        'player',
        {
            'active': currentPlayer === player.Id
        }
    );
    return (
        <div className={className}>
            <h2>{player.Name}</h2>
            <div className="wrapper-player-field">
                <CardList hand={player.Hand}/>
            </div>
            <div className="score">Score:{player.Score}</div>
        </div>
    );
}

export default Player;