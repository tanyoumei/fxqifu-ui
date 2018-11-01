const path = require('path');
const webpack = require('webpack')
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: './example/index/entry.js',
  output: {
    path: '/',
    filename: '[name].js',
  },
  // stats: "errors-only",  // lets you precisely control what bundle information gets displayed
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    host: '0.0.0.0',
    port: 8001,
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    // noInfo: true, // only errors & warns on hot reload
    // ...
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.vue?$/,
        use: [
          { loader: 'vue-loader' },
        ]
      },
      {
        test: /\.js?$/,
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.pug$/,
        use: [{ loader: 'html-loader' }, { loader: 'pug-html-loader' }]
      }
    ],
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: 'build.min.css',
    //   allChunks: true,
    // }),
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new HtmlWebpackPlugin({
      // template: './example/layout/_layout.pug',
      template: './example/index/tpl.pug',
      filename: 'index.html',
    })
  ]
};