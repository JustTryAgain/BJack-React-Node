import React from "react";
import Logo from "../headerSection/headerSection.jsx";
import InfoSection from "../infoSection/infoSection.jsx";
import PlayersList from "../playerSection";

const Game = () => {
  return (
    <div className='black-Jack'>
      <Logo/>
      <InfoSection/>
      <PlayersList/>
    </div>);
}
export default Game;