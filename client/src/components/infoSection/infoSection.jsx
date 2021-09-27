import React from 'react';
import ActiveButtons from './activeButtons';
import Deck from './deck';
import Winner from './winner';
import './infoStyles.scss';

const InfoSection = () => {
    return (
    <div className='info-section'>
        <ActiveButtons/>
        <Deck/>
        <Winner/>
    </div>
    );
}

export default InfoSection;