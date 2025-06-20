import { getAllPosts } from "@/lib/posts"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://timeful.app/blog",
      lastModified: new Date(),
    },
  ]

  const posts = getAllPosts(["slug", "date"])
  return [
    ...staticPages,
    ...(posts.map((post) => ({
      url: `https://timeful.app/blog/${post.slug}`,
      lastModified: new Date(), //new Date(post.date!),
    })) as MetadataRoute.Sitemap),
  ]
}
