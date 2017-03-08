var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    "./public/js/entry.js"
  ],
  output: {
    path: path.join(__dirname, "/public/js/"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/react_webpack_test.jade'
    }),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    loaders: [
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.jsx$/, loaders: ['babel-loader', 'react-hot', 'jsx?harmony'], include: path.join(__dirname, 'public') },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.json$/, loader: "json" }
    ]
  }
}
