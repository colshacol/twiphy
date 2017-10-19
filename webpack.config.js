const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const PATHS = {
	entry: path.resolve(__dirname, 'client/index.js'),
	output: path.resolve(__dirname, 'extension/js/'),
	modules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
	context: path.resolve(__dirname, 'client'),
	entry: PATHS.entry,
	output: {
		path: PATHS.output,
		filename: 'twiphy.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.(css|styl)$/,
				exclude: /(node_modules)/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '_[name]-[local]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'stylus-loader',
							options: {
								import: [
									path.resolve(
										__dirname,
										'client/styles/utils/index.styl'
									)
								]
							}
						}
					]
				})
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'react-svg-loader',
						options: {
							jsx: true
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, 'client/styles'),
			'@utils': path.resolve(__dirname, 'client/utils'),
      '@stores': path.resolve(__dirname, 'client/stores'),
      '@assets': path.resolve(__dirname, 'client/assets'),
      '@consts': path.resolve(__dirname, 'client/consts')
		},
		extensions: ['.js', '.styl', '.css', '.json'],
		modules: [PATHS.modules]
	},
	plugins: [new ExtractTextPlugin('../css/twiphy.css')]
};
