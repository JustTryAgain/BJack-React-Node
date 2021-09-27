import {createAction} from 'redux-actions';
import {newGame} from "../../game";

export const hitAction = createAction('HIT', ()=>{return newGame.gHit()});
export const stand = createAction('STAND');


/*
{
  stand: [Function: actionCreator] { toString: [Function (anonymous)] },
  hit: [Function: actionCreator] { toString: [Function (anonymous)] }
}

[Function: actionCreator] { toString: [Function (anonymous)] }
*/
