const Router = require('@koa/router');

const router = new Router();

async function rootRoute(ctx) {
  ctx.body = "Root Route";
}

async function apiInfoRoute(ctx) {
  ctx.body = "API Info Route";
}

async function create(ctx) {
  ctx.body = "Create Route";
}

async function find(ctx) {
  ctx.body = "Find Route";
}

router.get('/', rootRoute);
router.get('/info', apiInfoRoute);
router.get('/find', find);
router.post('/create', create);

module.exports = router;