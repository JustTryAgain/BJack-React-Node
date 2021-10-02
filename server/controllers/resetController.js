import {allGames, tokenVerify} from "../serviceWorker/services.js";

export const resetController = (ctx) => {
    const requestData = ctx.request.headers;
    const {id} = tokenVerify(requestData.token);

    ctx.body = {
        ...allGames[id].restart()
    }
    delete allGames[id];
    console.log('Delete id: '+ allGames[id]);
}