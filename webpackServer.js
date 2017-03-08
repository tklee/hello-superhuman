var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.babel');
const WebpackDevServer = require('webpack-dev-server');

var app = express();
var compiler = webpack(config);

function startApplicationDevServer() {
  const webpackDevServer = new WebpackDevServer(compiler, {
    // contentBase: 'public/js/',
    // publicPath: config.output.path,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      assets: false,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
    },
    hot: true,
    historyApiFallback: true,
    compress: false,
    https: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  });
  webpackDevServer.use('/', express.static(path.join(__dirname, './public/')));
  webpackDevServer.listen(3001, () => {
    console.log('Listening at http://localhost:3001/');
  });
}
startApplicationDevServer();
