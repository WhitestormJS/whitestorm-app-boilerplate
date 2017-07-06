import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import alias from 'whs/tools/alias';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    app: './app/app.js',
  },

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
            ['transform-runtime', {helpers: false, polyfill: false, regenerator: true}]
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

  plugins: pluginsList(isProduction),

  output: {
    path: path.join(__dirname, './build/'),
    filename: '[name].[chunkhash].js'
  },

  devServer: {
    publicPath: '/',
    stats: { chunks: true }
  },

  resolve: {
    symlinks: false,
    modules: [path.resolve('node_modules')]
  }
};

function pluginsList(prod) {
  const plugins = [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor'],
        chunks: ['app'],
        minChunks: function (module) {
          return isExternal(module)
        }
      }),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'whs boilerplate app',
        template: 'index-template.html',
        chunks: ['vendor', 'app']
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 1024,
        minRatio: 0.8
      })
  ];
  if(prod) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin())
  }
  return plugins;
}

function isExternal(module) {
  const userRequest = module.userRequest

  if (typeof userRequest !== 'string') {
    return false
  }

  return userRequest.indexOf('bower_components') >= 0 ||
         userRequest.indexOf('node_modules') >= 0 ||
         userRequest.indexOf('libraries') >= 0
}

export {
  config as default
};
