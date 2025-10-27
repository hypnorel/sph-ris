'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Logo / Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
            Sphèris
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Thérapeute, coach :
          <br />
          <span className="text-primary-600">et si créer du contenu</span>
          <br />
          devenait enfin simple ?
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Un séminaire immersif de 2 jours pour créer <strong className="text-primary-600">20 à 40 vidéos professionnelles</strong>, sans stress technique et entouré de pairs bienveillants.
        </p>

        {/* Key benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">🎬</span>
            <span className="text-slate-700 font-medium">Contenu clés en main</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">🤝</span>
            <span className="text-slate-700 font-medium">Communauté solidaire</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">✨</span>
            <span className="text-slate-700 font-medium">Sans barrière technique</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            Rejoindre le prochain séminaire
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <a
            href="#comment-ca-marche"
            className="text-primary-600 hover:text-primary-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200"
          >
            Découvrir le concept
          </a>
        </div>

        {/* Trust indicator */}
        <div className="mt-12 text-slate-500 text-sm">
          <p>📍 Séminaire à <strong>L'Hermitage, Compiègne</strong> • 2 jours / 1 nuit • <strong className="text-primary-600">800€</strong></p>
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
