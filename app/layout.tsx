import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://spherislab.com'),
  title: {
    default: 'Sphèris Lab - Transformez votre expertise en impact digital',
    template: '%s | Sphèris Lab'
  },
  description: 'Séminaires vidéo immersifs, production de contenu professionnelle et coaching personal branding pour thérapeutes, coachs et praticiens. Créez 20 à 40 vidéos en 2 jours et propulsez votre présence digitale.',
  keywords: [
    'thérapeute digital',
    'coach en ligne',
    'personal branding thérapeute',
    'formation vidéo professionnelle',
    'séminaire création contenu',
    'production vidéo santé bien-être',
    'coaching stratégie digitale',
    'communauté thérapeutes',
    'marketing thérapeute',
    'visibilité en ligne coach'
  ],
  authors: [{ name: 'Aurélien Rignault', url: 'https://spherislab.com' }],
  creator: 'Sphèris Lab',
  publisher: 'Sphèris Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://spherislab.com',
    siteName: 'Sphèris Lab',
    title: 'Sphèris Lab - Transformez votre expertise en impact digital',
    description: 'Séminaires vidéo, production de contenu et coaching pour thérapeutes et coachs. Un écosystème complet pour votre succès digital.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sphèris Lab - Écosystème digital pour thérapeutes et coachs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sphèris Lab - Transformez votre expertise en impact digital',
    description: 'Séminaires vidéo, production de contenu et coaching pour thérapeutes et coachs.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans bg-white text-slate-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
