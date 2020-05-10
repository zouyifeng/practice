const loaderUtils = require("loader-utils");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  console.log(2)
  setTimeout(() => {
    const result = source.replace("kkb", options.name);
    // return result;
    callback(null, result);
  }, 1000);

  //   this.callback(null, result);
};
