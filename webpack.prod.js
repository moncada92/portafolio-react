const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[chunkhash][name].css',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
});

