import {handleActions} from "redux-actions";
import {getStateAction, hitAction, standAction, startGameAction} from "./actions.js";

const initialState = {
    players: [],
    winners: [],
    currentPlayer: 0,
    deckSize: 0,
    token: localStorage.getItem('token') || null,
    isGameStart: false
};

const game = handleActions({
        [startGameAction]: (state) => {
            console.log('starting game...');
            return {
                ...state
            }
        },
        [startGameAction.success]: (state, {payload: {data}}) => {
            if (!state.token) localStorage.setItem("token", data.token);
            return {
                ...state,
                ...data,
                isGameStart: true
            }
        },
        [startGameAction.fail]: (state, {error: {response: {data, status}}}) => {
            console.log('error: ' + data + ' status code: ' + status + '!');
            return {
                ...state,
                isGameStart: false
            }
        },
        [getStateAction]: (state) => {
            console.log('starting getState...');
            return {
                ...state
            }
        },
        [getStateAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                isGameStart: true,
                ...data
            }
        },
        [getStateAction.fail]: (state, {error: {response: {data, status}}}) => {
            console.log('error: ' + data + ' status code: ' + status + '!');
            return {
                ...state
            }
        },
        [hitAction]: (state) => {
            console.log({...state.players[state.currentPlayer]}, ' hit');
            return {
                ...state
            }
        },
        [hitAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                ...data
            }
        },
        [hitAction.fail]: (state,  {error: {response: {data, status}}}) => {
            console.log('error: ' + data + ' status code: ' + status + '!');
            return {
                ...state
            }
        },
        [standAction]: (state) => {
            console.log({...state.players[state.currentPlayer]}, ' stand');
            return {
                ...state
            }
        },
        [standAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                ...data
            }
        },
        [standAction.fail]: (state,  {error: {response: {data, status}}}) => {
            console.log('error: ' + data + ' status code: ' + status + '!');
            return {
                ...state
            }
        }
    },
    initialState
);

export default game;