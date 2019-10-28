import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <h3>index</h3>
        <div>这是首页</div>
        <div>
          <Link to="/login">登录</Link> &nbsp;
          <Link to="/hello">欢迎</Link>
        </div>
      </div>
    );
  }
}

export default Index;
