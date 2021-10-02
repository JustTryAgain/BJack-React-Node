import {allGames, saveResult, tokenVerify} from "../serviceWorker/services.js";

export const standController = (ctx) => {
    const requestData = ctx.request.headers;
    const {id} = tokenVerify(requestData.token);
    const winnersArr = !(allGames[id].stand()) ? allGames[id].getWinners() : null;

    if(Array.isArray(winnersArr)) saveResult(id);

    ctx.body = {
        ...allGames[id].getGameState(),
        winners: winnersArr
    }
}