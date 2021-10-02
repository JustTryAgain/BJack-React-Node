import {GameResult} from "../db/index.js";

export const getHistoryController = async (ctx) => {

  ctx.body = await GameResult
    .find({}, null, {sort: {_id: -1}}).limit(10);
}