import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Video, Users, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Réalisations - Bientôt Disponible',
  description: 'Galerie de réalisations Sphèris Lab - Vidéos et témoignages bientôt disponibles.',
}

export default function RealisationsPage() {
  return (
    <>
      {/* Hero Coming Soon */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Video className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Réalisations <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">En Construction</span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Nous lançons actuellement nos premiers séminaires. Cette page présentera bientôt les vidéos et témoignages de nos participants.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ce qui vous attend sur cette page
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Video className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Galerie Vidéos</p>
                  <p className="text-sm text-slate-600">Exemples de productions réalisées</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-secondary-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Témoignages</p>
                  <p className="text-sm text-slate-600">Retours d'expérience authentiques</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Cas d'usage</p>
                  <p className="text-sm text-slate-600">Transformations concrètes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Video className="w-4 h-4 text-secondary-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Études de cas</p>
                  <p className="text-sm text-slate-600">Analyse détaillée des résultats</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/seminaires">
                Découvrir les séminaires
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/blog">
                Lire le blog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Soyez parmi les premiers
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Nos premiers séminaires sont en cours. Les participants qui le souhaitent pourront partager leurs réalisations et témoignages sur cette page.
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
            <p className="text-primary-900 font-semibold mb-2">
              💡 Transparence et authenticité
            </p>
            <p className="text-slate-700">
              Tous les témoignages et vidéos publiés ici seront authentiques et partagés avec l'accord explicite des participants. Nous privilégions la qualité et l'honnêteté à la quantité.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Participez à nos séminaires
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Créez votre contenu vidéo professionnel et rejoignez une communauté de thérapeutes et coachs engagés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/seminaires"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              En savoir plus
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
