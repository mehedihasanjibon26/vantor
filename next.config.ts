import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isProduction ? "/vantor" : "",

  assetPrefix: isProduction ? "/vantor/" : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? "/vantor" : "",
  },
};

export default nextConfig;