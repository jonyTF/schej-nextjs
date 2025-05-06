/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: "/:path*",
  //         destination: "http://3.18.115.80/:path*",
  //       },
  //     ],
  //   }
  // },
  basePath: "/blog",
  trailingSlash: true,
}

module.exports = nextConfig
