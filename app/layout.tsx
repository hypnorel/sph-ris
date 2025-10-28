import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sphèris Lab - Votre partenaire pour rayonner',
    template: '%s | Sphèris Lab'
  },
  description: 'Séminaires vidéo, production de contenu et coaching personal branding pour thérapeutes et coachs. Créez 20 à 40 vidéos professionnelles en 2 jours.',
  keywords: ['thérapeute', 'coach', 'personal branding', 'formation vidéo', 'séminaire', 'production contenu', 'coaching', 'réseaux sociaux', 'communauté'],
  authors: [{ name: 'Aurélien Rignault' }],
  creator: 'Sphèris Lab',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://spheris-lab.com',
    siteName: 'Sphèris Lab',
    title: 'Sphèris Lab - Votre partenaire pour rayonner',
    description: 'Séminaires vidéo, production de contenu et coaching personal branding pour thérapeutes et coachs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sphèris Lab - Votre partenaire pour rayonner',
    description: 'Séminaires vidéo, production de contenu et coaching personal branding pour thérapeutes et coachs.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
