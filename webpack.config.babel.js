import webpack from 'webpack';

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
    publicPath: '/build/'
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    // })
  ]
};

export {
  config as default
};
