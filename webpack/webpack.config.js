const path = require("path");

module.exports = {
  entry: {
    content: "./src/scripts/content.ts",
    background: "./src/scripts/background.ts",
  },
  output: {
    path: path.resolve(__dirname, "../extensions/dist"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
