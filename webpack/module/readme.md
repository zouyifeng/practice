### ESM & commonjs

#### commonjs

- 在服务器端，模块的加载是运行时同步加载的；在浏览器端，模块需要提前编译打包处理。
- 加载某个模块，其实是加载该模块的module.exports属性。
- require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。
- CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

####  ESM
- export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
- export default命令，为模块指定默认输出。

#### 差异

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。（ CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。）
- ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。


#### 两种模块化webpack的实现
声明了__webpack_require__，并为其添加了一些方法和属性：m、c、d、r、n、o
m：保存传入的模块对象
c：保存缓存的模块
d：在exports对象上添加属性
r：在exports对象上添加__esModule，用于标识es6模块
n：getDefaultExport
o：判断对象上是否有某一属性


#### commonjs

第一次文件模块加载完毕，返回module.exports对象，并缓存起来；外部文件模块引用，则是引用该模块（module.export1s）

文件中的函数对文件中的变量进行修改，改变的是对应闭包的变量；非导出后module.exports的值，访问的是module.exports的值

#### esm

es6的导出，webpack利用defineProperty，在module.exports上，声明同名的属性，定义getter方法，return 该属性。

外部改变的自始至终是闭包内变量，访问的也是闭包的变量