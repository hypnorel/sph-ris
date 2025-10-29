import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog/mdx'
import { formatDate, getReadingTimeText, extractHeadings } from '@/lib/blog/utils'
import ArticleTOC from '@/components/blog/ArticleTOC'
import ShareButtons from '@/components/blog/ShareButtons'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { FadeInUp } from '@/components/ui/Motion'
import MDXContent from '@/components/blog/MDXContent'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spherislab.com'
  const postUrl = `${siteUrl}/blog/${post.slug}`

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: postUrl,
      siteName: 'Sphèris Lab',
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'fr_FR',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)
  const headings = extractHeadings(post.content)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spherislab.com'
  const postUrl = `${siteUrl}/blog/${post.slug}`

  // Schema.org JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sphèris Lab',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    description: post.metaDescription,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Back button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au blog</span>
            </Link>

            <FadeInUp>
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getReadingTimeText(post.readingTime)}</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <article className="max-w-3xl">
                {/* Excerpt */}
                <div className="text-xl text-slate-600 leading-relaxed mb-8 pb-8 border-b border-slate-200">
                  {post.excerpt}
                </div>

                {/* Share Buttons (top) */}
                <div className="mb-8">
                  <ShareButtons title={post.title} url={postUrl} />
                </div>

                {/* MDX Content */}
                <div className="prose prose-lg prose-slate max-w-none prose-headings:scroll-mt-24 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
                  <MDXContent content={post.content} />
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <h3 className="text-sm font-semibold text-slate-600 mb-3">
                      Tags :
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Buttons (bottom) */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <ShareButtons title={post.title} url={postUrl} />
                </div>

                {/* Related Posts */}
                <RelatedPosts posts={relatedPosts} />
              </article>

              {/* Sidebar - Table of Contents */}
              <aside>
                <ArticleTOC headings={headings} />
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
