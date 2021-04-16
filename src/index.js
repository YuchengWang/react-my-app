import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'; // 引入 Header 组件
import './index.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'; // 模块导入 | React Router 包含了以下这几个主要模块
import Home from './home.js'
import List from './list.js'

class Index extends Component {
    // 构造方法
    constructor() {
        super()
        this.state = { num: 1 } // 初始化数据
    }

    // 渲染之前执行
    UNSAFE_componentWillMount() {
        /*
          该方法可以用于一些数据的提前加载
        */
    }

    changeText(e) {
        /*
          e 是事件对象，包含了一些关于当前事件的信息集合
          e.target.value 可以拿到 input 改变后的值
        */
        this.setState({ text: e.target.value })
    }

    // 事件函数
    changeNum(n) {
        this.setState({ num: n })
    }

    render() {

        var Components = <Header />;
        var text = 'hello';

        var css = {
            fontSize: '20px',
            textDecoration: 'underline'
        }

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} /> {/* 首页 */}
                        <Route exact path="/list" component={List} /> 
                    </Switch>
                </BrowserRouter>
                {/* 事件函数通过 props 属性，传递到了 Header 组件，然后在 Header 组件中触发 */}
                <Header text={this.changeText.bind(this)} />
                <h1>{this.state.text}</h1>
                <p style={css}>css1</p>
                <p style={{ 'color': 'red' }}>css2</p>
                {Components}
                <h1>{text}</h1>
                <div onClick={this.changeNum.bind(this, 2)} >{this.state.num}</div>
                <Header name={'index'} />
            </div>
        )
    }
    // 渲染之后执行
    componentDidMount() {
        /*
          该方法可以用于清除一些无效的数据
        */
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));