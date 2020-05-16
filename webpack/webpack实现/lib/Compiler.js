const fs = require("fs");
const path = require("path");
const Parser = require("./Parser.js");
class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }
  // 构建启动
  run() {
    // 解析入口文件
    const info = this.build(this.entry);
    this.modules.push(info);
    this.modules.forEach(({ dependecies }) => {
      // 判断有依赖对象,递归解析所有依赖项
      if (dependecies) {
        for (const dependency in dependecies) {
          this.modules.push(this.build(dependecies[dependency]));
        }
      }
    });
    // 生成依赖关系图
    const dependencyGraph = this.modules.reduce(
      (graph, item) => ({
        ...graph,
        // 使用文件路径作为每个模块的唯一标识符,保存对应模块的依赖对象和文件内容
        [item.filename]: {
          dependecies: item.dependecies,
          code: item.code
        }
      }),
      {}
    );
    this.generate(dependencyGraph);
  }
  build(filename) {
    const { getAst, getDependecies, getCode } = Parser;
    const ast = getAst(filename);
    const dependecies = getDependecies(ast, filename);
    const code = getCode(ast);
    return {
      // 文件路径,可以作为每个模块的唯一标识符
      filename,
      // 依赖对象,保存着依赖模块路径
      dependecies,
      // 文件内容
      code
    };
  }
  // 重写 require函数 (浏览器不能识别commonjs语法),输出bundle
  generate(code) {
    // 输出文件路径
    const filePath = path.join(this.output.path, this.output.filename);
    // 定义一个立即执行函数,传入生成的依赖关系图
    const bundle = `(function(graph){
      // 找到对应moduleId的依赖对象,调用require函数,eval执行,拿到exports对象
      function require(moduleId){ 
        function localRequire(relativePath){
          return require(graph[moduleId].dependecies[relativePath])
        }
        // 定义exports对象
        var exports = {};
        (function(require,exports,code){
          // commonjs语法使用module.exports暴露实现,我们传入的exports对象会捕获依赖对象(hello.js)暴露的实现(exports.say = say)并写入
          eval(code)
        })(localRequire,exports,graph[moduleId].code);
        // 暴露exports对象,即暴露依赖对象对应的实现
        return exports;
      }
      // 从入口文件开始执行
      require('${this.entry}')
    })(${JSON.stringify(code)})`;

    // 把文件内容写入到文件系统
    fs.writeFileSync(filePath, bundle, "utf-8");
  }
}

module.exports = Compiler;