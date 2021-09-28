import {handleActions} from "redux-actions";
import {hitAction} from "./actions.js";
import {newGame} from "../../../../server/game";



const initialState = {
  players: [],
  winners: [],
  currentPlayer: 0,
  deckSize: 0
};


const game = handleActions(
  {
    [hitAction]:(state, {payload}) => {
      console.log({...payload});

       return {
         ...state,
        ...payload
       }
    },
  },
  {...initialState,...newGame.getGameState()}
);

export default game;