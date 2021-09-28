import React from 'react';
import cardBack  from '../../images/deck_back.svg';

const Deck = (count) => {
    return (
        <div className = 'deck'>
            <div className = 'deck-txt'>
            DECK
            </div>
            <div className = 'card-back'>
                <img src={cardBack} alt='card-back' />
                <div className='counter'> {/*{count}*/}</div>
            </div>
        </div>
    );
}

export default Deck;



/*
export const createRequestAction = (type, payloadCreator) => {
  const requestActions = createAction(type, payloadCreator);
  requestActions.success = `${type}_SUCCESS`;
  requestActions.fail = `${type}_FAIL`;

  return requestActions;
}

export const gameStart = createRequestAction("GAME_START", (playersNames) =>
    ({
    request: {
        method: "post",
        url: '/start',
        data: {
            playersNames: playersNames,
            token: localStorage.getItem('token') || null,
        }
    }
}));
*/