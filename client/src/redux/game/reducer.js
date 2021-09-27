import {handleActions} from "redux-actions";
import {hitAction} from "./actions.js";
import {newGame} from "../../game";



const initialState = {
  players: [],
  winners: [],
  currentPlayer: 0,
  deck: []
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
  {...initialState,...newGame}
);

export default game;