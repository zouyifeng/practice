class BasicPlugin {
  // 在构造函数中获取用户给该插件传入的配置
  constructor(options) {
    console.log('options: ', options);
  }
  // Webpack 会调用 BasicPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  // compiler.plugin(事件名称, 回调函数) 监听到 Webpack 广播出来的事件。 并且可以通过 compiler 对象去操作 Webpack。
  apply(compiler) {
    compiler.plugin('compilation', function(compilation) {
      console.log('from basic plugin')
    })
  }
}

module.exports = BasicPlugin;