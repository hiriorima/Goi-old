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
        presets: ["es2015", "react"]
      }
    },{ 
      test: /\.jade$/, 
      loader: "jade-react-loader?split=true" 
    },{
      test: /\.json$/,
      loader: "json-loader" 
    }]
  },

  resolve: {
    alias: {
      "react": __dirname + "/node_modules/react/react.js",
      "react-dom": __dirname + "/node_modules/react/lib/ReactDOM.js"
    }
  }
};

