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
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.join(__dirname, "src"),
      },
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
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
            },
          ],
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
