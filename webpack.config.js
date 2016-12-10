var webpack = require("webpack");

module.exports = {

  cache: true,

  entry: "./app/assets/javascripts/client/app.js",
  output: {
    path: __dirname + '/app/assets/javascripts/dist/client/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      exclude: /(node_modules)/,
      query: {
        cacheDirectory: true,
        presets: ["es2015"]
      }
    }]
  }
}

