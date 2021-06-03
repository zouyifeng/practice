const path = require("path");


module.exports = {
  mode: "development",
  entry: {
    app:  path.resolve(__dirname, "src/index.js")
  },
  resolveLoader: {
    modules: ["node_modules", "./loaders"]
  },
  module: {},
  plugins: [],
  output: {
    path: path.resolve(__dirname, "dist")
  }
};
