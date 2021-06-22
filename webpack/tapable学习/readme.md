1. BasicHook: 执行每一个，不关心函数的返回值，有 SyncHook、AsyncParallelHook、AsyncSeriesHook。
2. BailHook: 顺序执行 Hook，遇到第一个结果 result !== undefined 则返回，不再继续执行。有：SyncBailHook、AsyncSeriseBailHook, AsyncParallelBailHook。
3. WaterfallHook: 类似于 reduce，如果前一个 Hook 函数的结果 result !== undefined，则 result 会作为后一个 Hook 函数的第一个参数。既然是顺序执行，那么就只有 Sync 和 AsyncSeries 类中提供这个Hook：SyncWaterfallHook，AsyncSeriesWaterfallHook
4. LoopHook: 不停的循环执行 Hook，直到所有函数结果 result === undefined。同样的，由于对串行性有依赖，所以只有 SyncLoopHook 和 AsyncSeriseLoopHook （PS：暂时没看到具体使用 Case）

![webpack流程图](./webpack.png)

webpack插件是具有apply方法的JavaScript对象，apply方法被compiler调用，并传入compiler实例本身。

插件对compiler上的钩子绑定函数


```js
class Compiler extends Tapable {
  constructor(context) {
    super();
    this.hooks = {
      /** @type {SyncBailHook<Compilation>} */
      shouldEmit: new SyncBailHook(["compilation"]),
      /** @type {AsyncSeriesHook<Stats>} */
      done: new AsyncSeriesHook(["stats"]),
      /** @type {AsyncSeriesHook<>} */
      additionalPass: new AsyncSeriesHook([]),
      /** @type {AsyncSeriesHook<Compiler>} */
      ......
      ......
      some code
    };
    ......
    ......
    some code
}
```
`compiler`继承了`Tapable`，就可以compiler.hooks.compile.tap('xxx', () => {})这样使用
