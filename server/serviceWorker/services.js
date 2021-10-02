import jwt from "jsonwebtoken";
import {GameResult} from "../db/index.js";

export const secKey = process.env.JWT_KEY || "secret";
export const allGames = {};


export const tokenVerify = (token) => {
    return jwt.verify(token, secKey);
}

export const authMiddleware = async (ctx, next) => {
    const requestData = ctx.request.headers;
    const token = requestData.token;

    if (!token) {
        ctx.throw(401, 'There is empty token');
    }

    try {
        const {id} = tokenVerify(token);

        if (Object.keys(allGames).includes(id)) {
            await next();
        }
    } catch (error) {
        ctx.throw(401, 'i catch error: ' + error);
    }
}

export const saveResult = (gameID) => {
    const gameState = allGames[gameID].getGameState();
    if (gameState.winners){
        GameResult.create({
            winners: gameState.winners,
            players: gameState.players,
            userID: gameID
        },
            (error, document)=>{
                if(error) return console.log(error);
                console.log("Object is saved: ", document);
            });
    }
     console.log('not validate expression!');
}
