const loaderUtils = require("loader-utils");

module.exports = function(source) {
  console.log('source: ', source);
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  console.log(2)
  setTimeout(() => {
    const result = source.replace("kkb", options.name);
    // return result;
    callback(null, result);
  }, 3000);

  //   this.callback(null, result);
};
