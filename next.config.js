/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // docker
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
