/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.yandexcloud.net",
        port: "",
        pathname: "/fazel-storage/catalog/**", // Correct the pathname to match your image URL pattern
      },
    ],
  },
};

module.exports = nextConfig;
