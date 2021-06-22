const loaderUtils = require("loader-utils");

module.exports = function(source) {
  console.log('source: ', source);
  //   const options = loaderUtils.getOptions(this);
  console.log(1)
  const result = source.replace("kaikeba", "web8");
  return result;
};
