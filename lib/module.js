const { createMiddleware } = require('./middleware')

module.exports = function(moduleOptions) {
  const options = Object.assign({}, this.options.basic, moduleOptions || {})
  const { enabled } = options
  if (enabled === false) {
    console.log(
      'Enabled flag is false. Skip registration of hsts middleware.'
    )
    return false
  }
  const middleware = createMiddleware(options)
  this.addServerMiddleware(middleware)
  return true
}

module.exports.meta = require('../package.json')
