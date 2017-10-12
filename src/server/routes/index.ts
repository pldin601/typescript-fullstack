import * as Router from 'koa-router';
import * as Koa from 'koa';

const router = new Router();

router.get('/', async (ctx: Koa.Context) => {
  await ctx.render('index');
});

export default router;
