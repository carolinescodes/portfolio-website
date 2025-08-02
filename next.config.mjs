/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
