const { createMiddleware } = require('./middleware')

module.exports = function(moduleOptions) {
  const enabled = !!Object.assign({}, this.options.hsts, moduleOptions || {})
  if (!enabled) {
    console.log('Enabled flag is false. Skip registration of hsts middleware.')
    return false
  }
  const middleware = createMiddleware(options)
  this.addServerMiddleware(middleware)
  return true
}

module.exports.meta = require('../package.json')
