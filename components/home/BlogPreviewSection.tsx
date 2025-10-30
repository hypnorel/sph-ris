import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { getAllPosts } from '@/lib/blog/mdx'
import { formatDate } from '@/lib/blog/utils'

export default function BlogPreviewSection() {
  const recentPosts = getAllPosts().slice(0, 3)

  if (recentPosts.length === 0) {
    return null
  }

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Derniers Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos conseils, stratégies et retours d'expérience pour développer votre présence en ligne.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col h-full">
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
                  {post.title}
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
                    Lire l'article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
