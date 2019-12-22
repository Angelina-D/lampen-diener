process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

environment.plugins.delete('UglifyJs')

environment.plugins.append(
  'UglifyJs',
  new UglifyJsPlugin({
    sourceMap: true
  })
)

module.exports = environment.toWebpackConfig()
