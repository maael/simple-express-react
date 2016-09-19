var path = require('path')
var webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  entry: {
    main: [      
      'webpack-dev-server/client?http://localhost:4241',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src', 'main.js')
    ]
  },
  output: { 
    path: path.join(__dirname, 'public', 'js'),
    publicPath: 'http://localhost:4241/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: [
          'babel-loader?presets[]=es2015&presets[]=react'
        ],
        exclude: /node_modules/
      }
    ]
  }
}
