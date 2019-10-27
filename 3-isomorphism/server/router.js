import _router from 'koa-router';
import Home from '../src/page/Index/index.jsx';
import { renderToString } from 'react-dom/server';
import React from 'react';

const router = _router();

router.get('/', (ctx, next) => {
  const content = renderToString(<Home />);

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
