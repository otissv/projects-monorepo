const withTM = require('next-transpile-modules')([
  '@redesign-system/react',
  '@redesign-system/theme',
  '@redesign-system/react-ui',
  'c-ufunc',
])

module.exports = withTM({
  reactStrictMode: true,
})
