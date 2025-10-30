import Link from 'next/link'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { getAllPosts } from '@/lib/blog/mdx'
import { formatDate } from '@/lib/blog/utils'

interface RelatedArticlesSectionProps {
  title?: string
  subtitle?: string
  filterByCategory?: string
  filterByTags?: string[]
  limit?: number
}

export default function RelatedArticlesSection({
  title = "Articles Recommandés",
  subtitle = "Approfondissez vos connaissances avec nos articles",
  filterByCategory,
  filterByTags,
  limit = 3,
}: RelatedArticlesSectionProps) {
  let posts = getAllPosts()

  // Filter by category if specified
  if (filterByCategory) {
    posts = posts.filter((post) => post.category === filterByCategory)
  }

  // Filter by tags if specified
  if (filterByTags && filterByTags.length > 0) {
    posts = posts.filter((post) =>
      post.tags.some((tag) => filterByTags.includes(tag))
    )
  }

  // Limit results
  posts = posts.slice(0, limit)

  if (posts.length === 0) {
    return null
  }

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid gap-8 ${posts.length === 3 ? 'md:grid-cols-3' : posts.length === 2 ? 'md:grid-cols-2' : ''}`}>
          {posts.map((post) => (
            <Card key={post.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              {post.coverImage && (
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(post.date)}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {post.readingTime} min de lecture
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1"
                  >
                    Lire
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
