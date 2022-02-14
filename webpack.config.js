const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  plugins: [new ForkTsCheckerWebpackPlugin()],

  // Output of webpack does not matter in this demonstration, this is why we are discarding all of it.
  module: {
    rules: [
      {
        use: [require.resolve("./discardLoader.js")],
      },
    ],
  },
};
