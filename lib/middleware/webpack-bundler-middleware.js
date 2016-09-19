const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()
const bundler = require('./bundler.js')

module.exports = function createBundlerMiddleware (options) {
  options = Object.assign(
    { proxyMatch: /^\/js\/*/,
      targetProtocol: 'http',
      targetHost: 'localhost',
      targetPort: '4241',
      publicPath: '/js/',
      quiet: false
    }, options)
  bundler(options)
  return function bundlerMiddleware (req, res, next) {
    if (req.url.match(options.proxyMatch)) {
      proxy.web(req, res, {
        target: `${options.targetProtocol}://${options.targetHost}:${options.targetPort}`
      })      
    } else {
      next()  
    }
  }
}