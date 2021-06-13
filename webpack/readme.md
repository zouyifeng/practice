### webpack中`output`的属性设置

`library`: 指定库的全局变量名字

`libraryTarget`: 支持库的引入方式

`libraryExport`: default

`package.json`的`script`字段`prepublish`，调用`npm publish`会执行



### webpack优化方案:

#### 动态polyfill（polyfill service）
![1](./docs/1.png)


#### `tree shaking`利用ES6模块的特点
  - 只能作为模块顶层语句出现

  - import 模块名只是字符串常量 

  - import binding 是 immutable （不可修改） 

cjs则不同，可动态引入，需要时引入。

本质`tree shaking`需要`静态分析`出哪些代码不需要用到，而非运行时分析。在ugly时候去掉


原理：擦出DCE (dead code elimination)
- 代码不会被执行
- 代码执行结果不会被用到
- 代码只会影响死变量


#### 文件监听原理分析

轮询判断文件的最后编辑时间是否变化

某个文件发生了变化，并不会立即告诉监听者，先缓存起来，等待aggregateTimeout

```js
module.exports = {
  watch: true,
  watchOptions: {
    // 监听到变化后会等300ms再去执行构建
    aggregateTimeout: 300,
    // 判断文件是否变化，是通过不停询问系统指定的文件，是否发生变化。
    // 每秒询问1000次
    poll: 1000
  }
}
```


### 热更新原理

依赖`webpack-dev-server`和`webpack.hotModuleReplacementPlugin`

不涉及磁盘的IO文件输出，存放在内存中，速度更快。

![hmr](./docs/hmr.png)

`hmr runtime`和`hmr server`以websocket形式连接

启动：1 -> 2 -> A -> B
发生变化：1 -> 2 -> 3 -> 4 -> 5

[详细实现](./webpack-hmr)