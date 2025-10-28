import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Coaching Personal Branding',
  description: 'Accompagnement personnalisé pour développer votre personal branding et votre stratégie de communication digitale. Pour thérapeutes et coachs.',
}

const coachingOffres = [
  {
    name: 'Découverte',
    price: '150€',
    duration: '1 session de 2h',
    description: 'Parfait pour démarrer et poser les bases',
    features: [
      'Audit complet de votre présence actuelle',
      'Identification de votre positionnement unique',
      'Plan d\'action stratégique personnalisé',
      'Recommandations plateformes prioritaires',
      'Support email 7 jours',
    ],
    cta: 'Réserver',
    popular: false,
  },
  {
    name: 'Accompagnement',
    price: '900€',
    duration: '3 mois',
    description: 'L\'option la plus complète pour un lancement réussi',
    features: [
      'Tout de l\'offre Découverte',
      '6 sessions de coaching (2x/mois)',
      'Stratégie de contenu 90 jours',
      'Optimisation profils réseaux sociaux',
      'Revue hebdomadaire de vos publications',
      'Templates de posts personnalisés',
      'Accès groupe Slack coaching',
      'Support WhatsApp illimité',
    ],
    cta: 'Commencer',
    popular: true,
  },
  {
    name: 'VIP',
    price: '2400€',
    duration: '6 mois',
    description: 'Transformation complète avec résultats garantis',
    features: [
      'Tout de l\'offre Accompagnement',
      '12 sessions de coaching (2x/mois)',
      'Stratégie 6 mois complète',
      'Création ligne éditoriale personnalisée',
      'Calendrier éditorial trimestriel',
      'Audit mensuel performances',
      '1 séminaire production vidéo offert',
      'Priorité sur toutes les demandes',
      'Garantie résultats ou remboursé',
    ],
    cta: 'Contactez-nous',
    popular: false,
  },
]

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
              💡 Coaching Sur-Mesure
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Coaching{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Personal Branding
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Développez votre présence en ligne et votre stratégie de communication avec un accompagnement personnalisé
          </p>
        </div>
      </section>

      {/* Pourquoi le coaching */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Pourquoi un coaching personal branding ?
            </h2>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Vous avez l'expertise, vous savez aider vos clients. Mais comment vous faire connaître ?
              Comment transformer votre savoir-faire en visibilité et en clients ?
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Notre coaching vous aide à construire une stratégie claire, un positionnement fort et
              des habitudes de communication efficaces.
            </p>
            <ul className="space-y-3">
              {[
                'Définir votre positionnement unique',
                'Clarifier votre message et votre offre',
                'Créer une stratégie de contenu cohérente',
                'Optimiser vos profils et votre présence en ligne',
                'Développer des habitudes de publication régulières',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Double Expertise</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-xl mb-2">Stratégie Marketing</h4>
                <p className="text-slate-100">
                  Positionnement, messaging, persona cibles, funnel de conversion, stratégie contenu
                </p>
              </div>
              <div className="border-t border-white/20 pt-6">
                <div className="text-4xl mb-3">🎬</div>
                <h4 className="font-bold text-xl mb-2">Technique Création Contenu</h4>
                <p className="text-slate-100">
                  Production vidéo, optimisation réseaux, algorithmes, formats performants, storytelling
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Nos Offres */}
      <Section>
        <SectionHeader
          title={
            <>
              Nos <span className="text-primary-600">Formules</span>
            </>
          }
          description="Choisissez l'accompagnement qui correspond à vos besoins et votre budget"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {coachingOffres.map((offre) => (
            <Card
              key={offre.name}
              className={offre.popular ? 'border-4 border-primary-500 relative' : ''}
            >
              {offre.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ LE PLUS POPULAIRE
                  </span>
                </div>
              )}
              <CardHeader className={offre.popular ? 'pt-8' : ''}>
                <CardTitle className="text-2xl">{offre.name}</CardTitle>
                <div className="my-4">
                  <span className="text-4xl font-bold text-primary-600">{offre.price}</span>
                  <span className="text-slate-600 ml-2">/ {offre.duration}</span>
                </div>
                <CardDescription>{offre.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {offre.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary-600 mt-0.5">✓</span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={offre.popular ? 'primary' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">{offre.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Thématiques abordées */}
      <Section background="white">
        <SectionHeader
          title={
            <>
              Thématiques <span className="text-primary-600">abordées</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Positionnement',
              items: ['Niche', 'USP', 'Persona', 'Différenciation'],
            },
            {
              icon: '💬',
              title: 'Communication',
              items: ['Storytelling', 'Ligne éditoriale', 'Ton & voix', 'Call-to-actions'],
            },
            {
              icon: '📱',
              title: 'Réseaux Sociaux',
              items: ['Instagram', 'LinkedIn', 'TikTok', 'YouTube'],
            },
            {
              icon: '📊',
              title: 'Performance',
              items: ['Analytics', 'KPIs', 'Optimisation', 'Croissance'],
            },
          ].map((theme, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4">{theme.icon}</div>
                <h3 className="font-bold text-slate-900 mb-3">{theme.title}</h3>
                <ul className="space-y-1 text-sm text-slate-600">
                  {theme.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à développer votre personal branding ?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Réservez un appel découverte gratuit de 30 minutes pour discuter de vos objectifs
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary-600" asChild>
            <Link href="/contact">Réserver mon appel découverte</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
