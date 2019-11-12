import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import routes from '../src/router.jsx';
import { matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { getStore } from '../src/store';

export default async function(url) {
  const store = getStore();

  // 在这里先拿到数据
  // 通过地址判断需要拿哪个页面的数据

  // 匹配当前路由
  const matched = matchRoutes(routes, url);

  // 加载数据
  const loadDatas = [];
  matched.forEach(item => {
    if (item.route.loadData) loadDatas.push(item.route.loadData(store));
  });
  if (loadDatas.length) await Promise.all(loadDatas);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        {routes.map(route => (
          <Route {...route} key={route.key} />
        ))}
      </StaticRouter>
    </Provider>
  );

  return { content, state: store.getState() };
}
