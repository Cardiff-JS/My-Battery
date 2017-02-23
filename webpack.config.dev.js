const path = require('path');
const webpack = require('webpack');

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
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: __dirname,
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        include: path.join(__dirname, 'client'),
        loader: 'ignore-loader'
      }, {
        test: /\.json$/,
        include: __dirname,
        loader: 'json-loader'
      }
    ]
  }
};