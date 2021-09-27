import React from "react";

const CardList = ({hand}) => {
    return (
        <div className="player-cards">
            {hand.map((card, index) => {
                <div className="card" key={index}>
                    <div className="head-num">{card.Value}</div>
                    <div className="suit"><img src={card.Src} alt={card.Suit}/></div>
                    <div className="bottom-num">{card.Value}</div>
                </div>
            })}
        </div>
    );
}
export default CardList;