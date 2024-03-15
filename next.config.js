/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
