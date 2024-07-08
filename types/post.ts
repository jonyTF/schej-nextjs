type PostType = {
  slug?: string
  title?: string
  date?: string
  coverImage?: string
  excerpt?: string
  ogImage?: string
  content?: string
  author?: { name: string; url: string }
  showFooter?: boolean
}

export default PostType
