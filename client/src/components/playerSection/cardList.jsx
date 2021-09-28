import React from "react";
import Card from "./card.jsx";
import spadesSvg from  './../../images/spades.svg';
import heartsSvg from  './../../images/hearts.svg';
import diamondsSvg from './../../images/diamonds.svg';
import clubsSvg  from './../../images/clubs.svg';

const CardList = ({hand}) => {
    return (
        <div className="player-cards">
            {hand.map((card,i)=>{
               return <Card key={i} value={card.Value} src={card.Src} suit={card.Suit}/>
            })}
        </div>
    );
}
export default CardList;