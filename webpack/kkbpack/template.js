
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
  return __kkbpack_require__(__kkbpack_require__.s  =  "__entry__");
}({__content__})
  