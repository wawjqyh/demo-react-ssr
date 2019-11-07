import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../../service/user';

class Hello extends Component {
  async componentDidMount() {
    const res = await getUserInfo();
    this.props.dispatch({
      type: 'user/save',
      payload: res
    });
  }

  render() {
    return (
      <div>
        <h3>hello</h3>
        <div>这是欢迎页</div>
        <div>
          <Link to="/">首页</Link> &nbsp;
          <Link to="/login">登录</Link>
        </div>

        <div>下面是 store 中的内容</div>
        <div>{this.props.user.name}</div>
        <div style={{ color: '#f00' }}>{this.props.user.desc}</div>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Hello);
