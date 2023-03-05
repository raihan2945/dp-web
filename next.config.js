/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return revision = require('child_process')
      .execSync('git rev-parse --short HEAD')
      .toString().trim()
  },
  poweredByHeader: false,
  reactStrictMode: true,
  distDir: 'build',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    unoptimized: true
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig
