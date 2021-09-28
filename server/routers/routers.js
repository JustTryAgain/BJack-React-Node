/*
import jwt from ' jsonwebtoken';
const { sign, verify } = jwt;
const token = sign({"d":"dd"}, "secret", {expiresIn: 300})
console.log(token);
const verifyCode = verify(token, "secret");
console.log(verifyCode);
*/
import Router from "koa-router";
import {Game} from "../game/game.js";


const router = new Router();

router.post('/start',  (ctx)=>{
  const nowGame = new Game(['Kirill','Maria','Sergio','Fedor']);
  ctx.body= { ...nowGame.getGameState()};
})

export default router;

