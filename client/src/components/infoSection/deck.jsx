import React from 'react';

const Deck = (count) => {
    return (
        <div className = 'deck'>
            <div className = 'deck-txt'>
            DECK
            </div>
            <div className = 'card-back'>
                <img src='./images/deck_back.svg' alt='card-back' />
                <div className='counter'> {/*{count}*/}</div>
            </div>
        </div>
    );
}

export default Deck;