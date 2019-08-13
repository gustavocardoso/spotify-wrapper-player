const join = require('path').join

const include = join(__dirname, 'src')

module.exports = {
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        include,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}
