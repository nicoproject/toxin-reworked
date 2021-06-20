const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { extendDefaultPlugins } = require('svgo')

const environment = require('./environment')
const PAGES_DIR = `${environment.paths.source}\\pages\\`
const PAGES = [
	'cards-page/cards-page.pug',
	'index/index.pug',
	'landing-page/landing-page.pug',
	'registration-page/registration-page.pug',
	'room-details/room-details.pug',
	'search-room/search-room.pug',
	'sign-in-page/sign-in-page.pug',
	'ui-kit/ui-kit.pug',
]

module.exports = {
	entry: {
		app: path.resolve(environment.paths.source, 'index.js'),
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, '../src/'),
			node_modules: path.resolve(__dirname, '../node_modules/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: ['pug-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: path.resolve('./postcss.config.js'),
							},
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new ImageMinimizerPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			minimizerOptions: {
				plugins: [
					['gifsicle', { interlaced: true }],
					['jpegtran', { progressive: true }],
					['optipng', { optimizationLevel: 5 }],
					[
						'svgo',
						{
							plugins: extendDefaultPlugins([
								{
									name: 'removeViewBox',
									active: false,
								},
							]),
						},
					],
				],
			},
		}),
		new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
		}),
		...PAGES.map(
			(page) =>
				new HTMLWebpackPlugin({
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page.replace(/\.pug/, '.html')}`,
				}),
		),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(environment.paths.source, 'assets/images'),
					to: path.resolve(environment.paths.output, 'assets/images'),
					toType: 'dir',
					globOptions: {
						ignore: ['*.DS_Store', 'Thumbs.db'],
					},
				},
			],
		}),
	],
	target: 'web',
}
