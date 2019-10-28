import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <h3>login</h3>
        <div>这是登录页</div>
        <div>
          <Link to="/">首页</Link> &nbsp;
          <Link to="/hello">欢迎</Link>
        </div>
      </div>
    );
  }
}

export default Index;
