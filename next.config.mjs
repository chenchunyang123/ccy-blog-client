/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exp-picture.cdn.bcebos.com",
      },
    ],
  },
};

export default nextConfig;
