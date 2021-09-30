import {allGames, tokenVerify} from "../serviceWorker/services.js";

export const standController = (ctx) => {
    const requestData = ctx.request.headers;
    const {id} = tokenVerify(requestData.token);
    const winnersArr = !(allGames[id].stand()) ? allGames[id].getWinners() : [];

    ctx.body = {
        ...allGames[id].getGameState(),
        winners: winnersArr
    }
}