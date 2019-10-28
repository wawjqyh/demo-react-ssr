import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <h3>hello</h3>
        <div>这是欢迎页</div>
        <div>
          <Link to="/">首页</Link> &nbsp;
          <Link to="/login">登录</Link>
        </div>
      </div>
    );
  }
}

export default Index;
