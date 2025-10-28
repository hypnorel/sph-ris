'use client'

import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Surtitre */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
            🎬 Séminaires • Production • Coaching
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Votre partenaire pour{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            rayonner
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Thérapeutes, coachs : développez votre présence en ligne avec des séminaires immersifs,
          une production vidéo professionnelle et un accompagnement personnalisé.
        </p>

        {/* Key benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">✅</span>
            <span className="text-slate-700 font-medium">20-40 vidéos en 2 jours</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">🤝</span>
            <span className="text-slate-700 font-medium">Communauté solidaire</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">💡</span>
            <span className="text-slate-700 font-medium">Double expertise</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <Link href="/seminaires" className="group">
              Découvrir les séminaires
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/agence">Notre écosystème</Link>
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-12 flex items-center justify-center gap-8 text-slate-600 text-sm">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600">47+</p>
            <p>Participants formés</p>
          </div>
          <div className="h-12 w-px bg-slate-300"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600">1200+</p>
            <p>Vidéos créées</p>
          </div>
          <div className="h-12 w-px bg-slate-300"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600">98%</p>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
