/** @type {import('next').NextConfig} */
const nextConfig = {
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
