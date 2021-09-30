import {createRequestAction} from "../../helpers/helpers.js";

export const startGameAction = createRequestAction('START_REQUEST',
    (playerNamesArr, token) => {
        return {
            request: {
                method: 'post',
                url: '/start',
                data: {
                    playerNames: playerNamesArr,
                    token: token,
                }
            }
        }
    });

export const hitAction = createRequestAction('HIT_REQUEST',
    (token) => {
        return {
            request: {
                method: 'get',
                url: '/hit',
                headers: {
                    token: token
                }
            }
        }
    });

export const getStateAction = createRequestAction('GET_STATE_REQUEST',
    (token) => {
        return {
            request: {
                method: 'get',
                url: '/state',
                headers: {
                    token: token
                }
            }
        }
    });

export const standAction = createRequestAction('STAND_REQUEST',
    (token) => {
        return {
            request: {
                method: 'get',
                url: '/stand',
                headers: {
                    token: token
                }
            }
        }
    });

export const getResultAction = createRequestAction('GET_RESULT_REQUEST',
    (token) => {
        return {
            request: {
                method: 'get',
                url: '/result',
                headers: {
                    token: token
                }
            }
        }
    });