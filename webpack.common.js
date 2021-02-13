const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    index: path.resolve(__dirname,'src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[chunkhash][name].js',
    publicPath: '/'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Protafolio',
      template: path.resolve(__dirname, './src/index.html'),
      minify: false,
    }),
    new Dotenv({
      path: './.env.development', // Path to .env file (this is the default)
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ]
}