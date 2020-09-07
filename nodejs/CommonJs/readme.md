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


ESM vs CommonJs区别点
前者属于编译时加载，即静态加载，在编译时就能够确定模块的依赖关系，以及输入和输出的变量；
后者属于运行时加载，都只有在代码运行时才能确定这些东西。ESM形式的好处是可以做到tree shaking。
前者可以加载模块的部分内容，后者需要加载模块整个对象，再取到内容。

const lib = require('./lib.js')
lib 默认是个空对象
