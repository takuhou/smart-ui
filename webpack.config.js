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
          exclude: "/src/svg.json",
          use: [
            "babel-loader",
            "eslint-loader"
          ],
        }
      ]
    }
  };