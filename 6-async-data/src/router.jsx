import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Index from './page/Index/index.jsx';
import Login from './page/Login/index.jsx';
import Hello from './page/Hello/index.jsx';

class RouterIndex extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/hello" component={Hello} />
      </React.Fragment>
    );
  }
}

export default RouterIndex;
