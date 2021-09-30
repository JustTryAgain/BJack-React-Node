import React from 'react';
import cardBack from '../../images/deck_back.svg';
import {getDeckSize} from "../../redux/selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const Deck = ({getDeckSize}) => {
    return (
        <div className='deck'>
            <div className='deck-txt'>
                DECK
            </div>
            <div className='card-back'>
                <img src={cardBack} alt='card-back'/>
                <div className='counter'> {getDeckSize}</div>
            </div>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    getDeckSize
});

export default connect(mapStateToProps, null)(Deck);
