const withTM = require('next-transpile-modules')(['ui', 'c-ufunc']);

module.exports = withTM({
  reactStrictMode: true,
});
