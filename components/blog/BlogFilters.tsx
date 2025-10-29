'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { BlogCategory } from '@/lib/blog/types'

const CATEGORIES: { label: string; value: BlogCategory | 'all' }[] = [
  { label: 'Tous les articles', value: 'all' },
  { label: 'Personal Branding', value: 'Personal Branding' },
  { label: 'Vidéo & Production', value: 'Vidéo & Production' },
  { label: 'Marketing Digital', value: 'Marketing Digital' },
  { label: 'Business & Coaching', value: 'Business & Coaching' },
]

export default function BlogFilters() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams?.get('category') || 'all'

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <span className="text-sm font-semibold text-slate-600">Filtrer par :</span>
      {CATEGORIES.map((cat) => {
        const isActive = currentCategory === cat.value
        const href = cat.value === 'all' ? '/blog' : `/blog?category=${encodeURIComponent(cat.value)}`

        return (
          <Link
            key={cat.value}
            href={href}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
              isActive
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-500 hover:text-primary-600'
            }`}
          >
            {cat.label}
          </Link>
        )
      })}
    </div>
  )
}
