const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../../webpack.config')
const path = require('path')

module.exports = function (options) {
  let bundleStart = null
  let compiler = Webpack(webpackConfig)
  options = Object.assign(
    { publicPath: '/js/',
      targetHost: 'localhost',
      targetPort: '4241',
      quiet: false
    }, options)

  compiler.plugin('compile', function () {
    if (!options.quiet) console.log('Bundling...')
    bundleStart = Date.now()
  })

  compiler.plugin('done', function () {
    if (!options.quiet) console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms')
  })

  let bundler = new WebpackDevServer(compiler, {
    publicPath: options.publicPath,
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  })

  bundler.listen(options.targetPort, options.targetHost, function () {
    if (!options.quiet) console.log('Bundling project, please wait...');
  })
}