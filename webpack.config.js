const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: [ 'babel-polyfill', './index.js' ]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			maxSize: 244000
		}
	},
	performance: {
		hints: false
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'Login App'
		}),
		new HtmlWebpackRootPlugin()
	]
};
