import markdownToHtml, { getAllPosts, getPostBySlug } from "@/lib/posts"
import Header from "./components/Header"
import PostType from "@/types/post"
import { Metadata, ResolvingMetadata } from "next"

interface Props {
  params: { slug: string }
}

export default async function Post({ params }: Props) {
  const post: PostType = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]) as unknown as PostType
  post.content = await markdownToHtml(post.content || "")

  return (
    <>
      <div>
        <Header post={post} />
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
  const post = getPostBySlug(params.slug, ["title", "ogImage"])

  const title = `${post.title} | Schej blog`

  return {
    title,
    openGraph: {
      images: [post.ogImage],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
