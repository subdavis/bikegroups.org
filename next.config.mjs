/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    BUILD_TIME: new Date().toISOString(),
  }
};

export default nextConfig;
