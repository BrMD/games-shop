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
  env: { IP_EC2_INSTANCE: process.env.IP_EC2_INSTANCE },
};

module.exports = nextConfig;
