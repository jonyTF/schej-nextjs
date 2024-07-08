import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/e/",
    },
    sitemap: "https://schej.it/sitemap.xml",
  }
}
