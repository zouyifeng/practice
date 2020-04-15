import React, { Component } from 'react'

const withName = Comp => {
  class NewComponent extends Component {
    // 可以重写组件声明周期
    componentDidMount() {
      console.log("do something");
    }
    render () {
      return <Comp {...this.props} name="高阶组件"></Comp>
    }
  }
  return NewComponent
}

const withLog = Comp => {
  // console.log('Comp: ', typeof Comp);
  console.log(Comp.name + "渲染了");
  return props => <Comp {...props}></Comp>
}

@withLog
@withName
@withLog
class Kaikeba extends Component {
  componentDidMount() {
    console.log("do something1");
  }
  render () {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    )
  }
}

export default Kaikeba;

// 高阶组件装饰器