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
        exclude: [
          path.resolve(__dirname, 'node_modules/rc-slider'),
          path.resolve(__dirname, 'node_modules/react-phone-input-2')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: 'ads-[name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src'),
                localIdentHashSalt: 'ads-'
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules/rc-slider'),
          path.resolve(__dirname, 'node_modules/react-phone-input-2')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
                localIdentContext: path.resolve(__dirname, 'src'),
                localIdentHashSalt: 'ads-'
              }
            }
          }
        ]
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
            options: {}
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
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
