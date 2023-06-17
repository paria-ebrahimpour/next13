/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const isProduction = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  disable: !isProduction,
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  register: true,
});
const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: { appDir: true , serverActions: true },
});

module.exports = nextConfig;
