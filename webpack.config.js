const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/index.html",
  filename: "index.html",
  inject: "body"
});

const MiniCSSExtractPluginConfig = new MiniCssExtractPlugin({
  filename: "style.[contenthash].css"
});

const webpackMd5HashConfig = new WebpackMd5Hash();

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./index.js",
  output: {
    //filename: "bundle.js",
    filename: "[name].[chunkhash].js",
    path: __dirname + "/build"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      // {
      //   test: /\.svg$/,
      //   loader: "svg-inline-loader?limit=10000"
      // },
      {
        test: /\.png$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    MiniCSSExtractPluginConfig,
    webpackMd5HashConfig
  ],
  devServer: {
    inline: false,
    contentBase: "./build"
  },
  devtool: "inline-source-map"
};
