const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ["url-loader"],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "font/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/logo.ico",
    }),
    new Dotenv({
      path: "./.env.production",
      slient: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  // externals: {
  //   // global app config object
  //   config: JSON.stringify({
  //     apiUrl: "http://localhost:8000/api",
  //   }),
  // },
};
