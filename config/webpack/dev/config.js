const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve } = require('../utils/resolve')(__dirname)
const webpack = require('webpack')
const loaders = require('./loaders')
const fs = require('fs')

const PATHS = {
  entry: resolve('source/client/index.js'),
  output: resolve('public/js/'),
  modules: resolve('node_modules'),
}

module.exports = {
  context: resole('source/client'),
  entry: PATHS.entry,
  output: {
    path: PATHS.output,
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',

  module: {
    rules: [
      loaders.script,
      loaders.style,
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@styles': resolve('./source/client/styles')
    },
    extensions: ['.js', '.styl', '.css', '.json'],
    modules: [PATHS.modules]
  },
  plugins: [
    new ExtractTextPlugin('../css/styles.css')
  ]
}
