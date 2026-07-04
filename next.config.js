/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.mizan.tech" },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
