import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sphèris - Développez votre présence en ligne',
  description: 'Sphèris permet aux thérapeutes et coachs de développer leur personal branding sans barrière technique, en s\'appuyant sur une communauté engagée.',
  keywords: ['thérapeute', 'coach', 'personal branding', 'formation', 'communauté', 'vidéo', 'réseaux sociaux'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
