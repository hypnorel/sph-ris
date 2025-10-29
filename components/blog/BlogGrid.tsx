'use client'

import { BlogPostMetadata } from '@/lib/blog/types'
import BlogCard from './BlogCard'
import { FadeIn, FadeInUp, StaggerContainer } from '@/components/ui/Motion'

interface BlogGridProps {
  posts: BlogPostMetadata[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 text-lg">Aucun article trouvé dans cette catégorie.</p>
      </div>
    )
  }

  return (
    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post) => (
        <FadeInUp key={post.slug}>
          <BlogCard post={post} />
        </FadeInUp>
      ))}
    </StaggerContainer>
  )
}
