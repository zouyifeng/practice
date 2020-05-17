(function(graph){
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
      require('./src/index.js')
    })({"./src/index.js":{"dependecies":{"./hello.js":"./src/hello.js"},"code":"\"use strict\";\n\nvar _hello = require(\"./hello.js\");\n\nconsole.log(1);\ndocument.write((0, _hello.say)(\"webpack\"));"},"./src/helloTest.js":{"dependecies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.helloTest = helloTest;\n\nfunction helloTest() {\n  console.log('hello before');\n}"},"./src/hello.js":{"dependecies":{"./helloTest.js":"./src/helloTest.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.say = say;\n\nvar _helloTest = require(\"./helloTest.js\");\n\nfunction say(name) {\n  (0, _helloTest.helloTest)();\n  return \"hello \".concat(name);\n}\n\nconsole.log(2);"}})