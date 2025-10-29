import { Metadata } from 'next'
import BlogPageClient from '@/components/blog/BlogPageClient'
import { getAllPosts } from '@/lib/blog/mdx'

export const metadata: Metadata = {
  title: 'Blog | Sphèris Lab',
  description:
    'Découvrez nos articles sur le personal branding, la création de contenu vidéo, le marketing digital et le coaching pour thérapeutes et coachs.',
  keywords: [
    'blog personal branding',
    'blog thérapeutes',
    'blog coachs',
    'contenu vidéo',
    'marketing digital',
  ],
}

export default function BlogPage() {
  // Get all posts at build time
  const allPosts = getAllPosts()

  return <BlogPageClient posts={allPosts} />
}
