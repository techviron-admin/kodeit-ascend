/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/ascend",
  outputFileTracingRoot: import.meta.dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1200, 1600, 1920],
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ascend",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
