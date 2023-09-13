const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _ = require('lodash');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js'], // Ensure that .js files can be resolved without specifying the extension
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
         test: /\.html$/,
         use: ["html-loader"],
     },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'imgs/', // Specify the output directory for images
      publicPath: 'imgs/', // Specify the public path for images
    },
  },
         },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
    ],
  },
};

