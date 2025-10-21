import type { NextConfig } from "next";
const repo = process.env.REPO || 'virario_website';
const useRepoSubpath = process.env.USE_REPO_BASEPATH === 'true';

const nextConfig = {
  output: 'export',
  
  // trailingSlash: true, // optional
  basePath: useRepoSubpath ? `/${repo}` : '',        // '' for custom domain
  assetPrefix: useRepoSubpath ? `/${repo}/` : undefined,
  images: { unoptimized: true } // static export compatibility
};

export default nextConfig;
