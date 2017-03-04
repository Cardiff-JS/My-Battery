const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/application'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      'react': 'preact-compat/dist/preact-compat.js',
      'react-dom': 'preact-compat/dist/preact-compat.js'
    }
  },
  node: {
    process: false
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compressor: {
        warnings: false,
        screw_ie8: true,
        unused: true,
        dead_code: true,
        drop_debugger: true
      }
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        include: __dirname
        // Add this line back in when webpack fixes es6 in dist files
        // exclude: path.join(__dirname, 'node_modules')
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        }),
        include: path.join(__dirname, 'client')
      }
    ]
  }
};