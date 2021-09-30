import {allGames, tokenVerify} from "../serviceWorker/services.js";

export const getStateController = (ctx) => {
    const requestData = ctx.request.headers;
    const {id} = tokenVerify(requestData.token);

    ctx.body = {
        ...allGames[id].getGameState(),
        token: requestData.token
    };
}