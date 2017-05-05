var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FixDefaultImportPlugin = require('webpack-fix-default-import-plugin');

module.exports = {
  entry: path.resolve('src', 'index.ts'),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },

  output: {
    filename: 'app.bundle.js',
    path: '/dist'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('src', 'index.html')
    }),
    new FixDefaultImportPlugin()
  ],

  resolve: {
    extensions: ['.js', '.ts']
  }
};