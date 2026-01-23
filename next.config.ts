import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //igore type errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
