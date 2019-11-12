import '@babel/polyfill';
import _router from 'koa-router';
import render from './render';

const router = _router();

router.get('*', async (ctx, next) => {
  const { content, state } = await render(ctx.request.url);

  // 服务端获取数据后，将当前的 state 注入到 window 全局环境中
  ctx.body = `
    <html>
      <head>
        <title>react srr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.context = ${JSON.stringify(state)}</script>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
});

export default router;
