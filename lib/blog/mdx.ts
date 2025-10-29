import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, BlogPostMetadata, BlogCategory } from './types'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

// Ensure blog directory exists
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true })
}

/**
 * Get all blog posts metadata
 */
export function getAllPosts(): BlogPostMetadata[] {
  // Check if directory exists and has files
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'))

  if (files.length === 0) {
    return []
  }

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const stats = readingTime(content)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category as BlogCategory,
      tags: data.tags || [],
      featured: data.featured || false,
      coverImage: data.coverImage,
      author: data.author || 'Sphèris Lab',
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.excerpt,
      readingTime: Math.ceil(stats.minutes),
    } as BlogPostMetadata
  })

  // Sort by date (most recent first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const stats = readingTime(content)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      date: data.date,
      category: data.category as BlogCategory,
      tags: data.tags || [],
      featured: data.featured || false,
      coverImage: data.coverImage,
      author: data.author || 'Sphèris Lab',
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.excerpt,
      readingTime: Math.ceil(stats.minutes),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: BlogCategory): BlogPostMetadata[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.category === category)
}

/**
 * Get featured post
 */
export function getFeaturedPost(): BlogPostMetadata | null {
  const allPosts = getAllPosts()
  return allPosts.find((post) => post.featured) || null
}

/**
 * Get related posts (same category, excluding current)
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPostMetadata[] {
  const currentPost = getPostBySlug(slug)
  if (!currentPost) return []

  const allPosts = getAllPosts()
  return allPosts
    .filter((post) => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit)
}

/**
 * Get all unique categories
 */
export function getAllCategories(): BlogCategory[] {
  const allPosts = getAllPosts()
  const categories = new Set(allPosts.map((post) => post.category))
  return Array.from(categories)
}

/**
 * Get paginated posts
 */
export function getPaginatedPosts(page = 1, perPage = 6, category?: BlogCategory) {
  let posts = getAllPosts()

  // Filter by category if specified
  if (category) {
    posts = posts.filter((post) => post.category === category)
  }

  // Remove featured post from regular list
  const featuredPost = getFeaturedPost()
  if (featuredPost && page === 1) {
    posts = posts.filter((post) => post.slug !== featuredPost.slug)
  }

  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / perPage)
  const startIndex = (page - 1) * perPage
  const paginatedPosts = posts.slice(startIndex, startIndex + perPage)

  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
    totalPosts,
  }
}
