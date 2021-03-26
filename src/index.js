import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'; // 引入 Header 组件
import './index.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'; // 模块导入 | React Router 包含了以下这几个主要模块
import Home from './home.js'
import List from './list.js'

class Index extends Component {
    // 构造方法 | 关于面向对象的知识见 /less/59 & /less/60
    constructor() {
        super()
        this.state = { num: 1 } // 初始化数据
    }

    // 渲染之前执行
    componentWillMount() {
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

        // 每隔 1 秒更新 num 的数据
        setTimeout(() => {
            this.state.num++
            // 每次执行 this.setState 重新 render，所有在一个页面中有很多的 this.setState 网页性能会很低
            this.setState({ num: this.state.num })
        }, 1000)

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} /> {/* 首页 */}
                        <Route exact path="/list" component={List} /> 
                        <Route exact path="/list/:n" component={List}/> {/* 传递参数 */}
                    </Switch>
                </BrowserRouter>
                {/* 事件函数通过 props 属性，传递到了 Header 组件，然后在 Header 组件中触发 */}
                <Header text={this.changeText.bind(this)} />
                <h1>{this.state.text}</h1>
                <p style={css}>css1</p>
                <p style={{ 'color': 'red' }}>css2</p>
                {Components}
                <h1>{text}</h1>
                {/* 这是 JSX 独特的注释语法 */}
                {[1, 2, 3].map((i) => {
                    return (<p>{i}</p>) // 遍历出三个 p 元素
                })}
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