import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-build",
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;