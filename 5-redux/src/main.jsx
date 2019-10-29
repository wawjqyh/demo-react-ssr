import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndex from './router.jsx';
import { BrowserRouter } from 'react-router-dom';
import { getStore } from './store';
import { Provider } from 'react-redux';

function init() {
  const appTarget = document.getElementById('root');

  ReactDOM.hydrate(
    <Provider store={getStore()}>
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </Provider>,
    appTarget
  );
}

init();
