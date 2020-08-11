前端模块化主流分两种：
1、nodejs中常用的CommonJS
2、ESM(ECMA Script Modules)

console打印结果如下：

```
  start require
  this is module
  lib:  function () {
      console.log('hello geekbang');
  }
  end require
  { geekbang: { hello: 'haha' }, tencent: [Function] }
```

通过webpack打包index.js

webpack --devtool none --mode development --target node index.js

不难发现，module.exports 和 exports，刚开始是指向同一个内存空间，经过赋值操作，可改变指向。

require最终引用的是 module.exports 值，moudle.exports 是最终的返回值

[https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js](https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js)

