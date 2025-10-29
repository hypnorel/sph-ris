'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  category?: string
}

export default function BlogPagination({ currentPage, totalPages, category }: BlogPaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    const base = '/blog'
    const params = new URLSearchParams()
    if (page > 1) params.set('page', page.toString())
    if (category) params.set('category', category)
    const query = params.toString()
    return query ? `${base}?${query}` : base
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous button */}
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Précédent</span>
        </Link>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => {
          // Show first, last, current, and adjacent pages
          const shouldShow =
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)

          if (!shouldShow) {
            // Show ellipsis
            if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <span key={page} className="px-2 text-slate-400">
                  ...
                </span>
              )
            }
            return null
          }

          const isActive = page === currentPage

          return (
            <Link
              key={page}
              href={getPageUrl(page)}
              className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {page}
            </Link>
          )
        })}
      </div>

      {/* Next button */}
      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
        >
          <span>Suivant</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  )
}
