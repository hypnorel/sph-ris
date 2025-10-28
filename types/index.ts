// ============================================
// TYPES GLOBAUX - SPHÈRIS LAB
// ============================================

// Service offert par Sphèris Lab
export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  features: string[]
  cta: {
    text: string
    href: string
  }
}

// Article de blog
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  featuredImage?: string
  tags: string[]
  category: string
  metaTitle: string
  metaDescription: string
  readingTime: number
  status: 'draft' | 'published'
}

// Témoignage client
export interface Testimonial {
  id: string
  name: string
  profession: string
  avatar?: string
  content: string
  rating: number
  date: string
  videoUrl?: string
}

// Lead/Contact
export interface Lead {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  profession: string
  message: string
  source: string
  consent: boolean
  newsletter: boolean
  createdAt?: string
}

// FAQ
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// Statistiques
export interface Stats {
  participants: number
  videosCreated: number
  satisfaction: number
  yearsExperience: number
}

// Metadata SEO
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

// Navigation item
export interface NavItem {
  label: string
  href: string
  description?: string
  external?: boolean
}
