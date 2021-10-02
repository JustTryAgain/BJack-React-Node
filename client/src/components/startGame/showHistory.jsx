import React from "react";
import cn from "classnames";

const ShowHistory = ({show, history}) => {
  return (
    <div className='history'>
      <button className='history-close' onClick={show}>X</button>
      <div className='history-content'>
        {!history.length ? 'There no games now...' : history.map((game, i) => {
          return <div className='history-game' key={i}>
                        <span className='history-game-id'>ID:{game._id}{' '}
                          UserID:{game.userID}
                        </span>
            <div className='history-players'>
              {game.players.map((player, index) => {
                const className = cn(
                  'history-player', {
                    'winner': game.winners.includes(player.Name),
                  });
                return (
                  <div className={className} key={index}>
                    <div className='history-player-name'>{player.Name}</div>
                    <div className='history-cards'>
                      {player.Hand.map((card, index) => {
                        return (
                          <div key={index} className='history-card'>
                            {card.Value + ' '} <img src={card.Src} alt={card.Suit}/>
                          </div>
                        );
                      })}
                    </div>
                    <div className='history-score'>Score: {player.Score}</div>
                  </div>
                );
              })}
            </div>
            <span className='time'>Date: {game.time}</span>
          </div>
        })}
      </div>
    </div>
  );
}

export default ShowHistory;
