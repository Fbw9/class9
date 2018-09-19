module.exports = {
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: { presets: ["es2015"] }
            }
          },
          {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader','sass-loader']
          }
      ]
    }
};
