/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.*.com",
      },
      {
        protocol: "https",
        hostname: "**.*.io",
      },
    ],
  },
  staticPageGenerationTimeout: 200,
};

module.exports = nextConfig;
