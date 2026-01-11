import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/@katherine-hanlon-pNxzedQ5qyU-unsplash.jpg",
        destination: "/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg",
      },
    ];
  },
};

export default nextConfig;
