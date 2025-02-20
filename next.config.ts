import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/personalized/:platform/:product", destination: "/personalized/[platform]/[product]" },
    ];
  },
};

export default nextConfig;
