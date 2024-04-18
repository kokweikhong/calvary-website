/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

module.exports = nextConfig;
