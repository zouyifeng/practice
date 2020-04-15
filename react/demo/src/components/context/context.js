import React, { Component } from 'react';

// 对标vuejs的privde vs inject

// provider在外层组件，内部提供数据，consumer来读取

const Context = React.createContext()

const store = {
  name: '1',
  sayHi () {
    console.log(this.name);
  }
}

const withProvider = Comp => props => (
  <Context.Provider value={store}>
    <Comp {...props}/>
  </Context.Provider>
)

const withConsumer = Comp => props => (
  <Context.Consumer>
    {value => <Comp {...props} value={value}></Comp>}
  </Context.Consumer>
)

@withConsumer
class Inner extends Component {
  render () {
    return <div>{this.props.value.name}</div>
  }
}

@withProvider
class ContextSample extends Component {
  render () {
    return <div><Inner></Inner></div>
  }
}

export default ContextSample