module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './client/app/index.js'],
    output: {
      path: __dirname,
      filename: './client/public/bundle.js'
    },
    context: __dirname,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        }
      ]
    }
  }