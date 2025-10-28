import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import VideoPlaceholder from '@/components/ui/VideoPlaceholder'
import Link from 'next/link'

export const metadata = {
  title: 'Production de Contenu Vidéo',
  description: 'Production vidéo professionnelle pour thérapeutes et coachs. Création de contenu optimisé réseaux sociaux, tournage qualité broadcast, montage professionnel.',
}

export default function ProductionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
              🎥 Production Professionnelle
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Création de contenu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              vidéo professionnel
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Du tournage au montage, nous produisons vos vidéos pour les réseaux sociaux avec un rendu
            broadcast qui reflète votre expertise.
          </p>
        </div>
      </section>

      {/* Notre Approche */}
      <Section background="white">
        <SectionHeader
          title={
            <>
              Notre <span className="text-primary-600">Approche</span>
            </>
          }
          description="Une méthode éprouvée pour créer du contenu qui convertit"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎬',
              title: 'Interview Croisée',
              description: 'Format éprouvé qui performe sur les réseaux. Vous vous interviewez 2 par 2, ce qui crée une dynamique naturelle et vous positionne en expert.',
            },
            {
              icon: '📹',
              title: 'Matériel Professionnel',
              description: 'Caméras broadcast, éclairage studio, micros HF, fond optimisé. Qualité cinéma pour vos vidéos réseaux sociaux.',
            },
            {
              icon: '🎯',
              title: 'Optimisé Réseaux',
              description: 'Formats courts (shorts/reels) conçus pour maximiser l\'engagement. Chaque vidéo est pensée pour votre audience et vos objectifs.',
            },
          ].map((item, index) => (
            <Card key={index} hover className="text-center">
              <CardContent className="pt-6">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Ce que vous recevez */}
      <Section>
        <SectionHeader
          title={
            <>
              Ce que vous <span className="text-primary-600">recevez</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Livrables Inclus</h3>
            <ul className="space-y-4">
              {[
                '20 à 40 vidéos au format vertical (shorts/reels)',
                'Fichiers exportés optimisés pour Instagram, TikTok, YouTube',
                'Qualité HD 1080p minimum',
                'Son mixé et nettoyé professionnellement',
                'Cadrage et lumière optimisés',
                'Livraison sous 7 jours après tournage',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-600 text-2xl mt-1">✓</span>
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Option Montage Professionnel
            </h4>
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm text-slate-600 mb-2">Montage Standard</p>
                <p className="text-4xl font-bold text-primary-600 mb-2">45€</p>
                <p className="text-slate-600">par vidéo</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Cuts dynamiques</li>
                  <li>• Sous-titres</li>
                  <li>• Transitions</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-xl p-6">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  RECOMMANDÉ
                </div>
                <p className="text-sm text-slate-100 mb-2">Pack 10+ vidéos</p>
                <p className="text-4xl font-bold mb-2">40€</p>
                <p className="text-slate-100">par vidéo</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>• Tout du standard</li>
                  <li>• + B-rolls</li>
                  <li>• + Animations</li>
                  <li>• + Musique</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-slate-600">
              💡 Commandez pendant ou après le séminaire
            </p>
          </div>
        </div>
      </Section>

      {/* Galerie Exemples */}
      <Section background="white">
        <SectionHeader
          title={
            <>
              Exemples de <span className="text-primary-600">Réalisations</span>
            </>
          }
          description="Découvrez la qualité de nos productions (vidéos à venir)"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <VideoPlaceholder
              key={index}
              title={`Vidéo exemple ${index + 1}`}
              description="Interview thérapeute"
              aspectRatio="9/16"
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/realisations">Voir toutes nos réalisations →</Link>
          </Button>
        </div>
      </Section>

      {/* Process de Production */}
      <Section>
        <SectionHeader
          title={
            <>
              Notre <span className="text-primary-600">Process</span>
            </>
          }
        />

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Préparation', desc: 'Briefing questions, angles stratégiques, personas cibles' },
            { step: '02', title: 'Tournage', desc: 'Session 2h en interviews croisées, plusieurs angles caméra' },
            { step: '03', title: 'Post-Production', desc: 'Sélection des meilleurs moments, exports optimisés' },
            { step: '04', title: 'Livraison', desc: 'Fichiers prêts à publier + conseils publication' },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 mt-4">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Prêt à créer votre contenu vidéo ?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Découvrez nos séminaires pour produire 20 à 40 vidéos en 2 jours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/seminaires">Découvrir les séminaires</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Demander un devis personnalisé</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
