module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output : {
    library: "BoringDecision",
    libraryExport: "default",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "babel-loader",
          "eslint-loader"
        ],
      }
    ]
  }
};