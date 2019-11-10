import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import routes from './router.jsx';
import { BrowserRouter } from 'react-router-dom';
import { getStore } from './store';
import { Provider } from 'react-redux';

function init() {
  const appTarget = document.getElementById('root');

  ReactDOM.hydrate(
    <Provider store={getStore()}>
      <BrowserRouter>
        {routes.map(route => (
          <Route {...route} key={route.key} />
        ))}
      </BrowserRouter>
    </Provider>,
    appTarget
  );
}

init();
