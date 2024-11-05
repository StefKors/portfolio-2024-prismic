/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        hostname: 'images.prismic.io',
      },
    ],
  },
};

export default nextConfig;
