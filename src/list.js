import React, { Component } from 'react';

export default class List extends Component {
  render() {
      /* 读取参数 */
      return <div>列表 {this.props.match.params.n}</div>; 
  }
}