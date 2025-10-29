'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

interface ArticleTOCProps {
  headings: Heading[]
}

export default function ArticleTOC({ headings }: ArticleTOCProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="sticky top-24 hidden lg:block">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-primary-600" />
          <h3 className="font-bold text-slate-900">Table des matières</h3>
        </div>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? 'ml-4' : ''}
              >
                <a
                  href={`#${heading.id}`}
                  className={`text-sm block py-1 border-l-2 pl-3 transition-colors ${
                    activeId === heading.id
                      ? 'border-primary-600 text-primary-600 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:border-primary-400 hover:text-primary-600'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
