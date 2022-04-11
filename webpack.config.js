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
  devServer : {
    port : 9000,
    compress: true,
    historyApiFallback: {
      index : '/',
      disableDotRule: true
    },
    onBeforeSetupMiddleware: function(devServer) {

      const bodyParser = require('body-parser')

      devServer.app.use(bodyParser.json())
      devServer.app.post('/api/signin', function(req, res) {
        const body = req.body
        if(body.email === 'lee@gmail.com' && body.password === 'abcd1234'){
          res.status(200)
          res.json({token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImxlZSB3b25oZWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDk2ODE1NDMsImV4cCI6MTY0OTY4NTE0M30.a0vOnqSLb6F5owiALVOUhFUaN071scYvKYYi9c9xLGg'})
        } else {
          res.status(401)
          res.json({error : 'Unauthorized'})
        }
      })
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