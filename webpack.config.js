const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean : true,
  },
  mode: "development",
  devtool : 'inline-source-map',
  devServer : {
    port : 9000,
    compress: true,
    historyApiFallback: {
      index : '/',
      disableDotRule: true
    },
    client: {
      logging: 'error',
      overlay : {
        errors: true,
        warnings : false,
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react"
    }),
    new HtmlWebpackPlugin({
      inject : true,
      template: './src/index.html',
    }),
  ],
}