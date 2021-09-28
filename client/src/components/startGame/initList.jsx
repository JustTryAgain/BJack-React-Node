import React, {useCallback} from "react";

const InitList = ({initialPlayers, setInitialPlayers}) => {
    const removePlayer = useCallback((dIndex) => {
        setInitialPlayers(
            initialPlayers.filter((p, index) => index !== dIndex)
        );
    }, [initialPlayers, setInitialPlayers]);

    return (
        <ul className='player-list'>
            {
                 initialPlayers.map((el,i)=>{
                     return (
                         <div className='player-list-wrapper' key={i}>
                             <li className='list-item'>Player: {el}</li>
                             <button className='remove-item-button'
                              onClick={()=>{removePlayer(i)}}>
                                 X
                             </button>
                         </div>
                     );
                 })
            }
        </ul>
    );
}


export default InitList;