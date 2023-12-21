/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.HOSTNAME_IMAGES,
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
