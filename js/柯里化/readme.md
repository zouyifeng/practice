### 柯里化

```js
const curry = (fn, ...args) => 
  args.length >= fn.length ? 
    fn(...args) : 
    (..._args) => curry(fn, ...args, ..._args)
```