class CopyrightWebpackPlugin {
  constructor(options) {}
  apply(complier) {
    complier.hooks.compile.tap("CopyrightWebpackPlugin", complilation => {
      console.log("走你，盘");
    });
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
        complilation.assets["copyright22.txt"] = {
          source: function() {
            return " hello copyright2 !!!";
          },
          size: function () {
            return 40;
          }
        };
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
