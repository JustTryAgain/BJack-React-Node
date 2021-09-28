import {createAction} from "redux-actions";


export const hitAction = createAction('HIT');
export const stand = createAction('STAND');


/*
{
  stand: [Function: actionCreator] { toString: [Function (anonymous)] },
  hit: [Function: actionCreator] { toString: [Function (anonymous)] }
}

[Function: actionCreator] { toString: [Function (anonymous)] }
*/
