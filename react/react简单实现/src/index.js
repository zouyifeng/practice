// babel中转换jsx，会使用到 React.createElement 这个api，无论是否使用React，都必须引入
import React, { Component } from "./kreact";
import ReactDOM from "./kreact-dom";

function Comp(props) {
  return <h2>函数组件，{props.name}</h2>;
}

class Comp2 extends Component {
  render() {
    return <h2>class组件</h2>;
  }
}
const users = [{ name: "jerry", id: 1 }];
const jsx = (
  <div id="demo" style="color:red" className="box">
    <span>hi</span>
    <Comp name="kaikeba" />
    <Comp2 />
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
);

console.log(jsx);

ReactDOM.render(jsx, document.querySelector("#root"));
