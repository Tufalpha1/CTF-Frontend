/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/data/:path*",
        destination: `${process.env.BACKEND_URL}/api/data/:path*`,
      },
    ];
  },
};

module.exports = nextConfig
