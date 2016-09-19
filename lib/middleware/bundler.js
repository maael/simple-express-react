const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../../webpack.config')

module.exports = function (options) {
  let compiler = Webpack(webpackConfig)
  options = Object.assign(
    { publicPath: '/js/',
      targetHost: 'localhost',
      targetPort: 4241,
      quiet: false
    }, options)

  compiler.plugin('compile', () => {
    if (!options.quiet) console.log('Bundling...')
  })

  compiler.plugin('done', (stats) => {
    if (!options.quiet) console.log('Bundled in ' + (stats.endTime - stats.startTime) + 'ms')
  })

  let bundler = new WebpackDevServer(compiler,
    { publicPath: options.publicPath,
      hot: true,
      quiet: false,
      noInfo: true,
      stats: {
        colors: true
      }
    })

  bundler.listen(options.targetPort, options.targetHost, () => {
    if (!options.quiet) console.log('Bundling project, please wait...')
  })
}
