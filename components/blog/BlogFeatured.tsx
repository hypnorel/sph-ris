'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Star } from 'lucide-react'
import { BlogPostMetadata } from '@/lib/blog/types'
import { formatDate, getReadingTimeText } from '@/lib/blog/utils'

interface BlogFeaturedProps {
  post: BlogPostMetadata
}

export default function BlogFeatured({ post }: BlogFeaturedProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-primary-900 shadow-2xl"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          {/* Featured Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm font-semibold">Article à la une</span>
          </div>

          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl group-hover:text-primary-300 transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta + CTA */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{getReadingTimeText(post.readingTime)}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all group-hover:gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Lire l'article</span>
              <ArrowRight className="w-5 h-5 transition-transform" />
            </motion.div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
