import React, {useCallback} from "react";

const InitList = ({initialPlayers, setInitialPlayers}) => {

  const removePlayer = useCallback((dIndex) => {
    setInitialPlayers(
      initialPlayers.filter((p, index) => index !== dIndex)
    )
  }, [initialPlayers, setInitialPlayers])

  return (
    <ul className='player-list'>
      {initialPlayers.map((initialPlayer, index) => {
        return (
          <div className='player-list-wrapper' key={index}>
            <li className='list-item'>{initialPlayer}</li>
            <button
              className='remove-item-button'
              onClick={() => removePlayer(index)}>
              X
            </button>
          </div>
        )
      })}
    </ul>
  )
}

export default InitList;