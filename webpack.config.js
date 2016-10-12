var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/foods.js'),
  context: path.join(__dirname, ''),
  output: {
   path: path.join(__dirname, 'public'),
   filename: 'bundle.js',
   publicPath: "http://localhost:8000/",
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:"url?limit=10000&mimetype=application/font-woff$"
      },
      {
         test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: "file"
      },

    ]
  }
};
