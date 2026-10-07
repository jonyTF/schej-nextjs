import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import PostType from "@/types/post"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const post: PostType = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      post[field] = realSlug
    }
    if (field === "content") {
      post[field] = content
    }

    if (typeof data[field] !== "undefined") {
      post[field as keyof PostType] = data[field]
    }
  })

  return post
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (!post1.date) {
        return 1
      } else if (!post2.date) {
        return -1
      }

      return post1.date > post2.date ? -1 : 1
    })
  return posts
}

/** Opens links to other sites in a new tab */
function rehypeExternalLinks() {
  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === "element" && node.tagName === "a") {
        const href: string = node.properties?.href ?? ""
        if (
          /^https?:\/\//.test(href) &&
          !/^https?:\/\/(www\.)?timeful\.app/.test(href)
        ) {
          node.properties.target = "_blank"
          node.properties.rel = ["noopener", "noreferrer"]
        }
      }
      node.children?.forEach(visit)
    }
    visit(tree)
  }
}

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
