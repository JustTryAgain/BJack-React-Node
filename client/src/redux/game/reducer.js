import {handleActions} from "redux-actions";
import {startGameActionRequest} from "./actions.js";

const initialState = {
  isGameStart: false,
  isLoading: false,
  loaded: false,
  players: [],
  winners: [],
  currentPlayer: 0,
  deckSize: 0
};

const game = handleActions(
  {
    [startGameActionRequest]: (state) => {
      console.log('starting game...');
       return {
         ...state,
         isLoading: true
       }
    },
    [startGameActionRequest.success]: (state, {...request}) => {
      return {
        ...state,
        ...request.payload.data,
        isGameStart: true,
        loaded: true
      }
    },
    [startGameActionRequest.fail]: (state, {...request}) => {
      console.log(request);
      return {
        ...state,
        loaded: false
      }
    }
  },
  initialState
);

export default game;