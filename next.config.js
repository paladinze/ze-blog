
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withTM = require('next-transpile-modules')(['@paladinze/fantasia-react']);

module.exports = withTM(config);
