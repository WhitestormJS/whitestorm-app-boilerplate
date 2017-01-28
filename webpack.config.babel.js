import webpack from 'webpack';
import alias from 'whs/tools/alias';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './app/app.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules\/(?!whs)|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(glsl|frag|vert)$/, loader: 'raw-loader', exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/, loader: 'glslify-loader', exclude: /node_modules/
      }
    ]
  },

  plugins: isProduction
    ? [
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [],

  output: {
    path: './build/',
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
