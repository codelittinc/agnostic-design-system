const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/')
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "index.js"
  },
  externals: {
    'react': 'react',
  }
};