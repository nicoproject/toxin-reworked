const { merge } = require('webpack-merge')
const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfiguration = require('./webpack.config')
const environment = require('./environment')

module.exports = merge(webpackConfiguration, {
  mode: 'production',

  output: {
    filename: 'js/[name].js',
    path: environment.paths.output,
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
              outputPath: 'images/',
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
              outputPath: '/fonts',
              limit: environment.limits.fonts,
            },
          },
        ],
      },
    ],
  },
  devtool: false,

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  plugins: [],
})
