const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?modules=true']
      },
      {
        test: /\.stories\.mdx$/,
        use: ['babel-loader', '@mdx-js/loader']
      },
      {
        test: /\.document\.mdx$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack?-svgo,+titleProp,+ref![path]']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  externals: {
    react: 'react'
  }
};
