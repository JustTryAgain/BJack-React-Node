import React from 'react';

const Deck = () => {
    return (
        <div className = 'deck'>
            <div className = 'deck-txt'>
            DECK
            </div>
            <div className = 'card-back'>
                <img src='../game/images/deck_back.svg' alt='card-back' />
                <div className='counter'>52</div>
            </div>
        </div>
    );
}

export default Deck;