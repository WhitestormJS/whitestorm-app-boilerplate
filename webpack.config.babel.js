import path from 'path';
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
        loader: 'babel-loader',
        query: {
          plugins: [
            'add-module-exports',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-runtime'
          ]
        }
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
    path: path.join(__dirname, './build/'),
    filename: 'bundle.js'
  },

  devServer: {
    publicPath: '/build/',
    stats: { chunks: true }
  },

  resolve: {
    alias,
    symlinks: false,
    modules: [path.resolve('node_modules')]
  }
};

export {
  config as default
};
