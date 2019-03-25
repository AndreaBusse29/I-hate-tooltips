module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
            loader: 'sass-loader',
            options: {
              data: `./assets/styles/global.scss`
            }
        }
      ]
    },
    // plugin omitted
  }
  