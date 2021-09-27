import React from "react";
import Logo from './headerSection/headerSection';
import InfoSection from './infoSection/InfoSection';
import PlayersList from "./playerSection/playerList";

const App = ()=>{
    return (
      <div className='black-Jack'>
        <Logo/>
        <InfoSection/>
        {/*<PlayersList/>*/}
      </div>
    );
}

export default App;