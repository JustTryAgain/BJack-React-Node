import React from "react";
import Logo from './headerSection/headerSection';
import InfoSection from './infoSection/infoSection';
import PlayersList from "./playerSection";


const App = ()=>{
    return (
      <div className='black-Jack'>
        <Logo/>
        <InfoSection/>
        <PlayersList/>
      </div>
    );
}

export default App;