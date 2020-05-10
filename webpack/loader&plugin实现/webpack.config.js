const path = require("path");
const CopyrightWebpackPlugin = require("./plugins/copyright-webpack-plugin");
const BasicPlugin = require('./plugins/basic-plugin')
const EndWebpackPlugin = require('./plugins/end-webpack-plugin')

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
          "replaceLoader", // 第二执行
          {
            loader: "replaceLoaderAsync",  // 第一执行
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
    }),
    new BasicPlugin({
      type: 'basic plugin option'
    }),
    new EndWebpackPlugin(msg => {
      console.log(msg);
    }, err => {
      console.log(err);
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist")
  }
};
