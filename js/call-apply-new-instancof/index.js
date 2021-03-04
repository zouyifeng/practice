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



