module.exports = {
  resolve: {
    extensions: [".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: {modules: true}},
          {loader: "postcss-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ]
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
