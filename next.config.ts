import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.it',
        pathname: '/145/125/**',
      },
    ],
  },
};

export default nextConfig;
