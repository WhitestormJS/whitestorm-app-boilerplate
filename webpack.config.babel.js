import webpack from 'webpack';
import alias from 'whs/tools/alias';

const config = {
  entry: './app/app.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules\/(?!whs)|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },

  output: {
    path: '/build/',
    filename: 'bundle.js'
  },

  devServer: {
    publicPath: '/build/',
    stats: { chunks: true }
  },

  resolve: {
    alias
  }
};

export {
  config as default
};
