const path = require("path");
const CopyrightWebpackPlugin = require("./plugins/copyright-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  resolveLoader: {
    modules: ["node_modules", "./loaders"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "replaceLoader",
          {
            loader: "replaceLoaderAsync",
            options: {
              name: "kaikeba"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: "gangtiexia"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist")
  }
};
