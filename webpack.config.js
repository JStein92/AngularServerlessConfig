const webpack = require('webpack');
const S3Plugin = require('webpack-s3-plugin');
const Path = require('path');
const slsw = require('serverless-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';

const plugins = [new webpack.NormalModuleReplacementPlugin(/^any-promise$/, 'bluebird'), new HtmlWebpackPlugin()];

if (!isDev) {
  plugins.push(
    new S3Plugin({
      include: /.*\.(css|js)/,
      // s3Options are required
      s3UploadOptions: {
        Bucket: 'giving-group-assets'
      },
      basePath: 'stylesheets'
    })
  );
}

module.exports = {
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: Path.join(__dirname, '.webpack'),
    filename: '[name].js',
    publicPath: isDev
      ? undefined
      : 'https://s3-us-west-2.amazonaws.com/giving-group-assets/stylesheets/'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    loaders: [

      { test: /\.tsx?$/, loader: "ts-loader" },
      {

        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: { url: false }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]

  },
  plugins
};
