// ============================================
// CONSTANTES GLOBALES - SPHÈRIS LAB
// ============================================

export const SITE_CONFIG = {
  name: 'Sphèris Lab',
  description: 'Votre partenaire pour rayonner : séminaires vidéo, production de contenu et coaching personal branding pour thérapeutes et coachs.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'Aurélien Rignault',
  email: 'contact.hypnorel@gmail.com',
  phone: '06 06 44 76 16',
  address: '2 Haras de Peterhof, 77000 Vaux-le-Pénil, France',
  siret: '89994754300018',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/spheris-lab',
    instagram: 'https://instagram.com/spheris.lab',
    youtube: 'https://youtube.com/@spheris-lab',
  },
}

export const NAVIGATION_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Agence', href: '/agence' },
  { label: 'Séminaires', href: '/seminaires' },
  { label: 'Production', href: '/production' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Communauté', href: '/communaute' },
  { label: 'Blog', href: '/blog' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = {
  participants: 47,
  videosCreated: 1200,
  satisfaction: 98,
  yearsExperience: 3,
}

export const SEMINAIRE_PRICE = 800
export const SEMINAIRE_DURATION = '2 jours / 1 nuit'
export const SEMINAIRE_LOCATION = "L'Hermitage, Compiègne"
export const SEMINAIRE_CAPACITY = 7
