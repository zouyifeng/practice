
!function  start(modules)  {
    // 缓存
    var  installedModules  =  {};
    //  The  require  function
    function  __kkbpack_require__     (moduleId)  {
    //  Check  if  module  is  in  cache 
    if(installedModules[moduleId])  {
      return  installedModules[moduleId].exports;
    }
    //  Create  a  new  module  (and  put  it  into  the  cache) 
    var  module  =  installedModules[moduleId]  =  {
      exports:  {}
    };
    //  Execute  the  module  function 
    modules[moduleId].call(module.exports,  module,  module.exports, __kkbpack_require__);
    //  Flag  the  module  as  loaded 
    module.l  =  true;
    //  Return  the  exports  of  the  module 
    return  module.exports;
  }
  
  //  Load  entry  module  and  return  exports
  return __kkbpack_require__(__kkbpack_require__.s  =  "./src/index.js");
}({"./src/index.js":function(module,exports,__kkbpack_require__){ eval(`#!  /usr/bin/env  node

const sayHi = undefined;
const sayBye = undefined;
// undefined

sayHi('kkb');
sayBye('kkb');`)},"./src/a.js":function(module,exports,__kkbpack_require__){ eval(`module.exports = (name) => {
  console.log('hello ' + name)
}`)},"./src/b.js":function(module,exports,__kkbpack_require__){ eval(`module.exports = function sayBye(name) {
  console.log('byebye ' + name)
}`)},"./src/index.css":function(module,exports,__kkbpack_require__){ eval(`h1 {
  color: red;
}`)},})
  