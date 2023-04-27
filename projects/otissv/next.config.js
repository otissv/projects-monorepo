const withTM = require('next-transpile-modules')(['c-ufunc'])

module.exports = withTM({
  reactStrictMode: true,
})
