import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lighter dev experience: skip heavy source maps in development
  productionBrowserSourceMaps: false,
  turbopack: {},

  webpack: (config, { dev }) => {
    if (dev) {
      // Reduce file-watcher load (important on Windows + OneDrive)
      config.watchOptions = {
        ignored: ["**/node_modules/**", "**/.git/**", "**/.next/**"],
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
