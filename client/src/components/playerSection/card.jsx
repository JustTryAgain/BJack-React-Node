import React from "react";

const Card = ({value,src,suit}) => {
  return (
        <div className="card">
          <div className="head-num"> {value}</div>
          <div className="suit">
            <img src={src} alt={suit}/>
          </div>
          <div className="bottom-num">{value}</div>
        </div>
  );
}
export default Card;