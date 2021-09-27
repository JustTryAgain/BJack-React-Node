//1.Срабатывает екшн
//2.Запрос на сервер POST GET PUT DELETE
//3.В случае успешного запроса возврат 200 кода и сохранение в стор
//4.Обновление компонентов.
import Koa from 'koa';

const PORT = 5001;
const app = new Koa();

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`)
});
app.use((document)=>{document.body = 'Server work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';});