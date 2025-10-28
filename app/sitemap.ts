import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://spherislab.com' // À remplacer par votre URL réelle

  // Pages principales
  const pages = [
    '',
    '/agence',
    '/seminaires',
    '/production',
    '/coaching',
    '/communaute',
    '/realisations',
    '/contact',
    '/contact/mentions-legales',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
