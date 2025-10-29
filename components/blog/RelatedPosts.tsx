import Link from 'next/link'
import Image from 'next/image'
import { BlogPostMetadata } from '@/lib/blog/types'
import { formatDate, getReadingTimeText } from '@/lib/blog/utils'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface RelatedPostsProps {
  posts: BlogPostMetadata[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Articles similaires</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            {/* Image */}
            <div className="relative h-40 w-full bg-slate-100">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{getReadingTimeText(post.readingTime)}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                {post.excerpt}
              </p>

              {/* Read more */}
              <div className="flex items-center text-primary-600 font-semibold text-sm">
                <span>Lire</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
