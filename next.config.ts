import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  // trailingSlash: true, // optional
  images: { unoptimized: true } // or use a custom loader if needed
};

export default nextConfig;
