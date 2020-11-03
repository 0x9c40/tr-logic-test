const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = (env, { mode }) => {
  return {
    mode,
    devtool: "source-map",
    context: path.resolve(__dirname, "src"),
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      publicPath: "/tr-logic-test/",
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./index.html" }),
      new VueLoaderPlugin(),
      new webpack.ProgressPlugin(),
    ],
  };
};
