'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import BlogFeatured from './BlogFeatured'
import BlogGrid from './BlogGrid'
import BlogFilters from './BlogFilters'
import BlogPagination from './BlogPagination'
import { BlogPostMetadata, BlogCategory } from '@/lib/blog/types'
import { FadeInUp } from '@/components/ui/Motion'

interface BlogPageClientProps {
  posts: BlogPostMetadata[]
}

const POSTS_PER_PAGE = 6

function BlogContent({ posts }: BlogPageClientProps) {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  // Get category from URL or default to 'all'
  const category = (searchParams?.get('category') as BlogCategory) || undefined

  // Get featured post
  const featuredPost = useMemo(() => posts.find((post) => post.featured), [posts])

  // Filter posts
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by category if selected
    if (category) {
      filtered = filtered.filter((post) => post.category === category)
    }

    // Remove featured post from list if on first page and no category
    if (!category && featuredPost) {
      filtered = filtered.filter((post) => post.slug !== featuredPost.slug)
    }

    return filtered
  }, [posts, category, featuredPost])

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  // Reset to page 1 when category changes
  useMemo(() => {
    setCurrentPage(1)
  }, [category])

  // Empty state
  if (posts.length === 0) {
    return (
      <main className="min-h-screen">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Blog Sphèris Lab
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Découvrez nos articles sur le personal branding, la création de contenu et le développement professionnel.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-12 text-center">
              <p className="text-slate-600 text-lg mb-4">
                📝 Le blog est en cours de création...
              </p>
              <p className="text-slate-500">
                Les premiers articles seront bientôt disponibles !
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Blog Sphèris Lab
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Conseils, stratégies et insights pour développer votre personal branding et votre présence digitale.
              </p>
              <p className="text-sm text-slate-500 mt-4">
                {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} disponible{filteredPosts.length > 1 ? 's' : ''}
                {category && ` dans la catégorie ${category}`}
              </p>
            </div>
          </FadeInUp>

          {/* Featured Article (only on first page and if no category filter) */}
          {featuredPost && currentPage === 1 && !category && (
            <div className="mb-16">
              <BlogFeatured post={featuredPost} />
            </div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <BlogFilters />

          {/* Articles Grid */}
          <BlogGrid posts={paginatedPosts} />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-colors ${
                    page === currentPage
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Blog Sphèris Lab
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
              <p className="text-slate-600">Chargement...</p>
            </div>
          </div>
        </section>
      </main>
    }>
      <BlogContent posts={posts} />
    </Suspense>
  )
}
