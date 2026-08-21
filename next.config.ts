import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "front-lalafo-students.prolabagency.com",
      },
    ],
  },

};

export default nextConfig;
