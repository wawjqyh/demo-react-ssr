import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './page/Index/index.jsx';

function init() {
  const appTarget = document.getElementById('root');

  // 同构需要使用 hydrate
  ReactDOM.hydrate(<Index />, appTarget);
}

init();
