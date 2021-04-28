// call(context, arg1, arg2, arg3)
// apply(context, [arg1, arg2, arg3])
// bind(context, arg1, arg2, arg3)

Function.prototype.call = function (context) { 
  const fn = this
  context = context || window
  context.fn = fn
  const args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.apply = function (context) { 
  const fn = this
  context = context || window
  context.fn = fn
  let result
  if (arguments[1])
  {
    result = context.fn(...arguments[1])
  } else
  { 
    result = context.fn()
  }
  delete context.fn
  return result
}


Function.prototype.bind = function (context) { 
  const fn = this
  context = context || window
  const args = [...arguments].slice(1)
  return function F() { 
    if (this instanceof F)
    { 
      return new fn(...args, ...arguments)
    }
    return fn.apply(context, args.concat(arguments))
  }
}

// 多次bind无法更改原因，第一次bind已经将函数和执行this绑定，利用闭包形式。执行时通过内部apply传入。

// 模拟new 参数为 构造函数
// 1、新生成了一个对象
// 2、链接到原型
// 3、绑定 this
// 4、返回新对象

function create() {
  let obj = {}
  let Constuctor = [].shift.call(arguments)
  obj.__proto__ = Constuctor.prototype
  let result = Constuctor.call(obj, arguments)
  // new规则
  // 若构造函数中返回this或返回值是基本类型（number、string、boolean、null、undefined）的值，则返回新实例对象； 
  // 若返回值是引用类型的值，则实际返回值为这个引用类型。
  return result instanceof Object ? result : obj
}

// 实现instanceof
function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}
