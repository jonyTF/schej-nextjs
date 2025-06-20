import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ["/e/", "/g/"],
    },
    sitemap: "https://timeful.app/blog/sitemap.xml",
  }
}
