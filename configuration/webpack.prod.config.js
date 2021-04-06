/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge')
const path = require('path')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfiguration = require('../webpack.config')

const environment = require('./environment')

module.exports = merge(webpackConfiguration, {
  mode: 'production',

  output: {
    filename: 'js/[name].js',
    path: environment.paths.output,
    publicPath: './',
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
              publicPath: '/dist/',
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
              publicPath: '/dist/',
              limit: environment.limits.fonts,
            },
          },
        ],
      },
    ],
  },
  /* Manage source maps generation process. Refer to https://webpack.js.org/configuration/devtool/#production */
  devtool: false,

  /* Optimization configuration */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  /* Performance treshold configuration values */
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  /* Additional plugins configuration */
  plugins: [],
})
