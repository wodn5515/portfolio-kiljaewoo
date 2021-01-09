module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
