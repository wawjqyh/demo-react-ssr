const path = require('path');

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, '../'),
  entry: './src/main.jsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist')
  },

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
