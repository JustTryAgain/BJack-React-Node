import React from "react";
import Card from "./card.jsx";

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