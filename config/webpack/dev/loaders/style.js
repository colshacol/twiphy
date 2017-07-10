const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve } = require('../utils/resolve')(__dirname)

module.exports = {
  test: /\.(css|styl)$/,
  exclude: /(node_modules)/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: process.env.LOCAL_IDENT_NAME,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        }
      },
      {
        loader: 'stylus-loader',
        options: {
          import: [
            resolve('source/client/styles/utils/index.styl')
          ]
        }
      }
    ]
  })
}
