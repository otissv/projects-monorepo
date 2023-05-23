/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@redesign-system/react',
    '@redesign-system/theme',
    '@redesign-system/react-ui',
    '@redesign-system/react-material-icons',
    'c-ufunc',
  ],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
