module.exports = {
  entry: './samples/index.js',
  output: {
    filename: './build/ricohapi-mstorage.js',
    library: "RicohAPIMStorage",
    libraryTarget: "umd"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        compact: false
      }
    }]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: ['', '.js'],
  }
};
