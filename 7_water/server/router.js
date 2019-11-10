import '@babel/polyfill';
import _router from 'koa-router';
import render from './render';

const router = _router();

router.get('*', async (ctx, next) => {
  const content = await render(ctx.request.url);

  ctx.body = `
    <html>
      <head>
        <title>react srr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
});

export default router;
