import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class List extends Component {
  render() {
      /* 读取参数 */
      return <div>列表 {this.props.match}</div>; 
  }
}

List.propTypes = {
  match: PropTypes.string
};