import _router from 'koa-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import RouterIndex from '../src/router.jsx';
import React from 'react';

const router = _router();

router.get('*', (ctx, next) => {
  const content = renderToString(
    <StaticRouter location={ctx.request.url} context={{}}>
      <RouterIndex />
    </StaticRouter>
  );

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
