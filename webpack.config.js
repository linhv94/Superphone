const path = require('path');

var config = {
    entry: './main.js',
     
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js',
    },
     
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8099,
        historyApiFallback: true
    },
     
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
                 
             query: {
                presets: ['es2015', 'react']
             }
          },

          {
              test: /\.css?$/,
              exclude: /node_modules/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          }
       ]
    }
 }
 
 module.exports = config;