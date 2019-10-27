const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',

  context: path.resolve(__dirname, '../'),
  entry: './server/router.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs'
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }], '@babel/preset-react']
        }
      }
    ]
  }
};
