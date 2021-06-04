/**
 * Webpack main configuration file
 */

/* Includes const */
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { extendDefaultPlugins } = require('svgo')

/* ENV const */
const environment = require('./config/environment')
const PAGES_DIR = `${environment.paths.source}\\pages\\`
// const PAGES = fs
// 	.readdirSync(PAGES_DIR)
// 	.filter((fileName) => fileName.endsWith('.pug'))

const fetchFiles = async (targetPath) => {
	const files = await fs.promises.readdir(targetPath)
	const fetchedFiles = []

	for (let file of files) {
		try {
			const filepath = path.join(targetPath, file)
			const stats = await fs.promises.lstat(filepath)

			if (stats.isFile() && file.slice(-4) === '.pug') {
				fetchedFiles.push(filepath)
			}

			if (stats.isDirectory()) {
				const childFiles = await fs.promises.readdir(filepath)
				files.push(...childFiles.map((f) => path.join(file, f)))
			}
		} catch (err) {
			console.error(err)
		}
	}

	return fetchedFiles
}

const run = async () => {
	try {
		const files = await fetchFiles('src/pages')
		console.log(files)
	} catch (err) {
		console.error(err)
	}
}

let PAGES = run().then((value) => value)
PAGES = Array.from(PAGES)

setTimeout(()=> {
	console.log('111111', typeof PAGES)
	console.log('fetchedFiles', typeof PAGES)
}, 1000)

module.exports = {
	entry: {
		app: path.resolve(environment.paths.source, 'js', 'app.js'),
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
				// Lossless optimization with custom option
				// Feel free to experiment with options for better result for you
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
	// ].concat(htmlPluginEntries),
	target: 'web',
}
