import Koa from 'koa';
import dotenv from 'dotenv';
import serve from "koa-static";
import bodyParser from "koa-bodyparser"
import router from "./routers/routers.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = new Koa();

app.use(bodyParser({enableTypes: ['json', 'text']}));
app.use(serve('static'));
app.use(router.routes());

try {
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
  })
} catch (error) {
  console.log(error)
  process.exit()
}


