const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ 'src', 'test' ].map(dir => path.join(__dirname, dir)),
      },
    ],
  },
  node: {
    process: false,
  },
  devtool: 'inline-source-map',
  plugins: [
    new VueLoaderPlugin(),
  ],
}
