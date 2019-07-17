const path = require('path');
const nodeExternals = require('webpack-node-externals');

// Server runs through an entry point in webpack
module.exports = {
  entry: './server/server.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};