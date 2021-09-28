//1.Срабатывает екшн
//2.Запрос на сервер POST GET PUT DELETE
//3.В случае успешного запроса возврат 200 кода и сохранение в стор
//4.Обновление компонентов.
import Koa from 'koa';
import dotenv from 'dotenv';
import serve from "koa-static";
import bodyParser from "koa-bodyparser"


dotenv.config();
const PORT = process.env.PORT || 4000;
const app = new Koa();

app.use(bodyParser({ enableTypes: ['json', 'text'] }));
app.use(serve('static'));

function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`)
    })
  } catch(error){
    console.log(error)
    process.exit()
  }
}
startServer();
process.exit()