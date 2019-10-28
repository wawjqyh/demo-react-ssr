import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndex from './router.jsx';
import { BrowserRouter } from 'react-router-dom';

function init() {
  const appTarget = document.getElementById('root');

  ReactDOM.hydrate(
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>,
    appTarget
  );
}

init();
