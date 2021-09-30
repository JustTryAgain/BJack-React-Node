import jwt from 'jsonwebtoken';
import Router from "koa-router";
import {Game} from "../game/game.js";
import {allGames, authMiddleware, secKey, tokenVerify} from "../serviceWorker/services.js";
import {v4 as uuidv4} from 'uuid';
import {getStateController} from "../controllers/getStateController.js";
import {hitController} from "../controllers/hitConroller.js";
import {standController} from "../controllers/standController.js";

const router = new Router();

router.post('/start', (ctx) => {
    const requestCtx = ctx.request.body;
    const playersArr = [...requestCtx.playerNames];

    for (let i = 0; i < playersArr.length; i++) {
        if (playersArr[i].trim().length < 3) {
            ctx.throw(422, 'Player name must be at least 3 characters no space includes.');
        }
    }
    if (!requestCtx.token) {
        const id = uuidv4();
        const token = jwt.sign({id}, secKey, {noTimestamp: true});

        allGames[id] = new Game(playersArr);
        ctx.body = {...allGames[id].getGameState(), token: token};
    } else {
        try {
            const {id} = tokenVerify(requestCtx.token);

            if (!allGames[id]) {
                allGames[id] = new Game(playersArr);
            }
            ctx.body = {
                ...allGames[id].getGameState(), token: requestCtx.token
            };
        } catch (e) {
            ctx.throw(401, e);
        }
    }
});

router.get('/state', authMiddleware, getStateController);
router.get('/hit', authMiddleware, hitController);
router.get('/stand', authMiddleware, standController)
export default router;