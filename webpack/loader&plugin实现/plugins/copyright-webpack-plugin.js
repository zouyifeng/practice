class CopyrightWebpackPlugin {
  constructor(options) {}
  apply(complier) {
    complier.hooks.compile.tap("CopyrightWebpackPlugin", complilation => {
      console.log("走你，盘");
    });
    debugger;
    complier.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (complilation, cb) => {
        complilation.assets["copyright.txt"] = {
          source: function() {
            return " hello copyright !!!";
          },
          size: function() {
            return 30;
          }
        };
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
