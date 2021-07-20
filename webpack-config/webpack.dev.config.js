const { merge } = require('webpack-merge')
const path = require('path')

const webpackConfiguration = require('./webpack.config')
const environment = require('./environment')

module.exports = merge(webpackConfiguration, {
	mode: 'development',
	output: {
		filename: 'js/[name].js',
		path: environment.paths.output,
		publicPath: '../',
	},
	optimization: {
		minimize: false,
	},
	module: {
		rules: [
			{
				test: /\.(png|gif|jpe?g|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'images/design/[name].[hash:6].[ext]',
							publicPath: '../',
							limit: environment.limits.images,
						},
					},
				],
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'fonts/[name].[hash:6].[ext]',
							publicPath: '../',
							limit: environment.limits.fonts,
						},
					},
				],
			},
		],
	},

	devtool: 'eval-source-map',

	devServer: {
		contentBase: environment.paths.output,
		watchContentBase: true,
		publicPath: '/',
		open: true,
		historyApiFallback: true,
		compress: true,
		overlay: true,
		hot: false,
		watchOptions: {
			poll: 300,
		},
		...environment.server,
	},

	watchOptions: {
		aggregateTimeout: 300,
		poll: 300,
		ignored: /node_modules/,
	},

	plugins: [],
})
