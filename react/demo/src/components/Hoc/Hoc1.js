import React, { Component } from 'react'

const withKaikeba = (Component) => {  
  const NewComponent = (props) => {
    return <Component {...props} name="高阶组件"></Component>
  }
  return NewComponent
}

const withLog = Component => {
  console.log(Component.name + ' 渲染了')

  class NewComponent extends React.Component {
    render () {
      return <Component {...this.props}></Component>
    }
    componentDidMount () {
      // console.log('didMount ',Component.name)
    }
  }
  return NewComponent
}

class App extends Component {
  render () {
    return (
      <div>{this.props.name}</div>
    )
  }
}

// 链式调用
export default withLog(withKaikeba(withLog(App)))

// 提高组件复用率，抽离相同逻辑
// HOC high order components 高阶组件也是一个组件，返回另一个组件
// 新的组件可对属性进行包装