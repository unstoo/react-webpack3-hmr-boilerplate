var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './unbundeled-client/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, ''),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      { 
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          presets: [ 
            ["es2015", {"modules": false}], "react" 
          ]          
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};