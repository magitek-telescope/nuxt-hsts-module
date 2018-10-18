const ONE_YEAR = 31536000

const addHsts = (res, maxage) => {
  res.setHeader('Strict-Transport-Security', `max-age=${maxage}; includeSubDomains; preload`)
  return res
}

const createMiddleware = options => {
  return (_, res, next) => {
    const { maxage } = options
    res = addHsts(res, maxage || ONE_YEAR)
    return next()
  }
}

exports.addHsts = addHsts
exports.createMiddleware = createMiddleware
