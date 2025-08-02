/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website',
  images: {
    unoptimized: true
  },
  // Force reload by timestamp
  env: {
    BUILD_TIME: Date.now().toString()
  }
};

export default nextConfig;
