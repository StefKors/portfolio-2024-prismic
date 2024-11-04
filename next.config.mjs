/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        hostname: 'images.prismic.io',
      },
    ],
  },
};

export default nextConfig;
