const Koa = require("koa");
const app = new Koa();
const Port = 4000;

const knex = require("knex");
const router = require("@koa/router")();
const controllers = require("./controllers");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

async function addDbToContext(ctx, next) {
  ctx.db = db;
  console.log("db attached to ctx");
  await next();
}

async function loggerMiddleware(ctx, next) {
  const { method, url, header } = ctx;
  console.log(
    `REQUEST: ${method} ${url} ${header.host} ${
      header["user-agent"]
    }, ${new Date()}`
  );
  await next();
}

app.use(addDbToContext);
app.use(loggerMiddleware);

router.get("/posts", controllers.getPosts);
router.get("/posts/:id", controllers.getPost);
router.post("/posts", controllers.createPost);
router.put("/posts/:id", controllers.updatePost);
router.delete("/posts/:id", controllers.deletePost);

app.use(router.routes());
app.listen(Port);
