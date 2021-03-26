import React, { Component } from 'react';

// 每一个 extends Component 的 class 都是一个组件
class Header extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.text} />
                {this.props.name}
            </div>
        )
    }
}

// 导出组件
export default Header;

/*
 支持这种操作
 export default eader extends Component {}
*/