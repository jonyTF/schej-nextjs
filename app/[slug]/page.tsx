import markdownToHtml, { getAllPosts, getPostBySlug } from "@/lib/posts"
import PostHeader from "./components/PostHeader"
import { Metadata, ResolvingMetadata } from "next"

interface Props {
  params: { slug: string }
}

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
    "author",
  ])
  post.content = await markdownToHtml(post.content || "")

  return (
    <>
      <div className="post-content">
        <PostHeader post={post} />
        <div
          className="leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  )
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostBySlug(params.slug, ["title", "excerpt", "ogImage"])

  const title = `${post.title} | Timeful (formerly Schej)`
  const description = post.excerpt

  const ogImage =
    process.env.NODE_ENV === "production"
      ? `https://timeful.app/blog/${post.ogImage}`
      : post.ogImage

  return {
    title,
    description,
    openGraph: {
      images: [ogImage!],
      description: post.excerpt,
    },
  }
}

export const dynamic = "error"
export const dynamicParams = false

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
