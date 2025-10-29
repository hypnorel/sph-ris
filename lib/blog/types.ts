export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: BlogCategory
  tags: string[]
  featured: boolean
  coverImage: string
  author: string
  metaTitle: string
  metaDescription: string
  readingTime: number
}

export type BlogCategory =
  | 'Personal Branding'
  | 'Vidéo & Production'
  | 'Marketing Digital'
  | 'Business & Coaching'

export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  date: string
  category: BlogCategory
  tags: string[]
  featured: boolean
  coverImage: string
  author: string
  metaTitle: string
  metaDescription: string
  readingTime: number
}

export interface PaginatedPosts {
  posts: BlogPostMetadata[]
  totalPages: number
  currentPage: number
  totalPosts: number
}
