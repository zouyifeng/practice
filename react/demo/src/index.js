import React from 'react'
import ReactDOM from 'react-dom'

// 高阶组件
// import Hoc from './components/Hoc/Hoc'
// import Hoc1 from './components/Hoc/Hoc1'

// context
import Context from './components/context/context'

import Composition from './components/slot/Composition'

// 高阶组件
// ReactDOM.render(<Hoc stage="React"/>, document.querySelector('#root'))

// context
// ReactDOM.render(<Context stage="React"/>, document.querySelector('#root'))

ReactDOM.render(<Composition/>, document.querySelector('#root'))

