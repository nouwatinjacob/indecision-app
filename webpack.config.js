const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [ 
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [htmlPlugin]
};