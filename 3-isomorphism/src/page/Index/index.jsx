import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>同构</h1>
        <p>不同构无法绑定事件</p>

        <button
          onClick={() => {
            alert('我被点击了');
          }}
        >
          点击
        </button>
      </div>
    );
  }
}

export default Index;
