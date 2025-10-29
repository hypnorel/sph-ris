'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BlogPostMetadata } from '@/lib/blog/types'
import { formatDate, getReadingTimeText } from '@/lib/blog/utils'
import Card from '@/components/ui/Card'

interface BlogCardProps {
  post: BlogPostMetadata
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card hover glow className="h-full overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{getReadingTimeText(post.readingTime)}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-600 text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read more */}
          <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
            <span>Lire l'article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
