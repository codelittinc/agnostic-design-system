const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV,
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
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
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