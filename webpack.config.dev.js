const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './client/application'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        include: __dirname,
        exclude: path.join(__dirname, 'node_modules')
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'client')
      }
    ]
  }
};