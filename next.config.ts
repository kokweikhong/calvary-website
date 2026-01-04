import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  env: {
    NEXT_PUBLIC_WEBSITE_ASSETS_URL: process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.calvarycarpentry.com",
        port: "",
      },
    ],
  },
  turbopack: {},
};

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
