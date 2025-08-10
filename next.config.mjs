/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-website', // Restored for GitHub Pages deployment
  images: {
    unoptimized: true
  },
  // Force reload by timestamp
  env: {
    BUILD_TIME: Date.now().toString()
  }
};

export default nextConfig;
