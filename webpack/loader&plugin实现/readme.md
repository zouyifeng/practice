### start
webapck webpack.config.js


### point
- comipler hook
- compilation hook


### reference
[Webpack原理-编写Plugin](https://juejin.im/post/5a5c18f2518825734f52ad65)

[深入Webpack-编写Loader](https://juejin.im/post/5a4f3791f265da3e3f4c7ee6)

一个 Loader 的职责是单一的，只需要完成一种转换。

如果一个源文件需要经历多步转换才能正常使用，就通过多个 Loader 去转换。

在调用多个 Loader 去转换一个文件时，每个 Loader 会链式的顺序执行，

第一个 Loader 将会拿到需处理的原内容，上一个 Loader 处理后的结果会传给下一个接着处理，最后的 Loader 将处理后的最终结果返回给 Webpack。


```
const loaderUtils = require("loader-utils");

module.exports = function(source) {
  // 获取当前传入的loader
  const options = loaderUtils.getOptions(this);

  // source 为 compiler 传递给 Loader 的一个文件的原内容
  // 该函数需要返回处理后的内容
  console.log(1)
  const result = source.replace("kaikeba", "web8");
  return result;
};
```

callback 是 Webpack 给 Loader 注入的 API，以方便 Loader 和 Webpack 之间通信
```
this.callback(
    // 当无法转换原内容时，给 Webpack 返回一个 Error
    err: Error | null,
    // 原内容转换后的内容
    content: string | Buffer,
    // 用于把转换后的内容得出原内容的 Source Map，方便调试
    sourceMap?: SourceMap,
    // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回，
    // 以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能
    abstractSyntaxTree?: AST
);
```

Loader 有同步和异步之分
```
module.exports = function(source) {
    // 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果
    var callback = this.async();
    someAsyncOperation(source, function(err, result, sourceMaps, ast) {
        // 通过 callback 返回异步执行后的结果
        callback(err, result, sourceMaps, ast);
    });
};
```


