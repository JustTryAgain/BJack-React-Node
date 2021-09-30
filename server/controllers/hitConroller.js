import {allGames, tokenVerify} from "../serviceWorker/services.js";

export const hitController = (ctx) => {
    const requestData = ctx.request.headers;
    const {id} = tokenVerify(requestData.token);
    const winnersArray = !(allGames[id].hit()) ? allGames[id].getWinners() : [];

    ctx.body = {
        ...allGames[id].getGameState(),
        winners: winnersArray
    }
}