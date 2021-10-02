import {allGames, saveResult, tokenVerify} from "../serviceWorker/services.js";

export const hitController = (ctx) => {
    const requestData = ctx.request.headers;
    const {id} = tokenVerify(requestData.token);
    const winnersArr = !(allGames[id].hit()) ? allGames[id].getWinners() : null;

    if(Array.isArray(winnersArr)) saveResult(id);

    ctx.body = {
        ...allGames[id].getGameState(),
        winners: winnersArr
    }
}