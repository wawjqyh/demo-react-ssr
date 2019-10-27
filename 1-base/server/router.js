const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = `
    <html>
      <head>
        <title>react srr</title>
      </head>
      <body>
        <h1>服务端渲染</h1>
        <p>hello</p>
      </body>
    </html>
  `;
});

module.exports = router;
