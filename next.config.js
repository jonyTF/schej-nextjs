/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "http://3.18.115.80/:path*",
        },
      ],
    }
  },
}

module.exports = nextConfig
