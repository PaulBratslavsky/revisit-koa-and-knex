const Koa = require("koa");
const app = new Koa();
const Port = 4000;

const knex = require('knex');
const router = require('@koa/router')();
const controllers = require('./controllers')();  

console.log(controllers);

async function loggerMiddleware(ctx, next) {
  const { method, url, header } = ctx;
  console.log(`REQUEST: ${method} ${url} ${header.host} ${header["user-agent"]}, ${new Date()}`);
  await next();
}

app.use(loggerMiddleware);

router.get('/', controllers.rootRoute);
router.get('/info', controllers.apiInfoRoute);
router.get('/find', controllers.find);
router.post('/create', controllers.create);

app.use(router.routes());
app.listen(Port);
