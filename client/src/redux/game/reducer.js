import {handleActions} from "redux-actions";
import {getHistoryAction, getStateAction, hitAction, newGameAction, standAction, startGameAction} from "./actions.js";

const initialState = {
    players: [],
    winners: null,
    currentPlayer: 0,
    deckSize: 0,
    token: localStorage.getItem('token') || null,
    isGameStart: false,
    history: []
};

const errorHandler = (state, {error: {response: {data, status}}}) => {
    console.log('error: ' + data + ' status code: ' + status + '!');
    return {
        ...state
    }
};
const actionStartHandler = (state, action) => {
    console.log('start action: ' + action.type);
    return {
        ...state
    }
};

const game = handleActions({
        [startGameAction]: actionStartHandler,
        [startGameAction.success]: (state, {payload: {data}}) => {
            if (!state.token) localStorage.setItem("token", data.token);
            return {
                ...state,
                ...data,
                isGameStart: true
            }
        },
        [startGameAction.fail]: errorHandler,
        [getStateAction]: actionStartHandler,
        [getStateAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                isGameStart: true,
                ...data
            }
        },
        [getStateAction.fail]: errorHandler,
        [hitAction]: actionStartHandler,
        [hitAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                ...data
            }
        },
        [hitAction.fail]: errorHandler,
        [standAction]: actionStartHandler,
        [standAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                ...data
            }
        },
        [standAction.fail]: errorHandler,
        [newGameAction]: actionStartHandler,
        [newGameAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                ...data,
                isGameStart: false
            }
        },
        [newGameAction.fail]: errorHandler,
        [getHistoryAction]: actionStartHandler,
        [getHistoryAction.success]: (state, {payload: {data}}) => {
            return {
                ...state,
                history: data,
            }
        },
        [getHistoryAction.fail]: errorHandler,
    },
    initialState
);

export default game;