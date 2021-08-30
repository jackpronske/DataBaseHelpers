const path = require("path");

const SRC_DIR = path.join(__dirname, "client", "src");
const OUT_DIR = path.join(__dirname, "client", "public");

module.exports = {
  mode: "development",
  entry: SRC_DIR,
  output: {
    path: OUT_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
