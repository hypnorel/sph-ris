import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Notre Agence',
  description: 'Sphèris Lab, agence spécialisée dans l\'accompagnement des thérapeutes et coachs. Séminaires, production vidéo, coaching et communauté.',
}

export default function AgencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
              🌟 L'écosystème complet
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Sphèris Lab, votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              partenaire
            </span>{' '}
            pour rayonner
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Nous accompagnons les thérapeutes et coachs dans le développement de leur présence en ligne
            à travers un écosystème complet : séminaires, production, coaching et communauté.
          </p>
        </div>
      </section>

      {/* Notre Vision */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Notre <span className="text-primary-600">Vision</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Nous croyons que chaque thérapeute et coach a une expertise unique qui mérite d'être vue et entendue.
              Pourtant, trop souvent, les barrières techniques et le manque de temps empêchent ces professionnels
              de développer leur visibilité.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              C'est pourquoi nous avons créé <strong>Sphèris Lab</strong> : un écosystème complet qui retire
              tous les obstacles et accompagne les professionnels de la santé mentale et du coaching dans leur
              développement digital.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
              <p className="text-primary-900 font-semibold italic">
                "Notre mission : permettre à 100 thérapeutes et coachs de rayonner en ligne d'ici 2 ans,
                tout en créant un média de référence sur la thérapie et le développement personnel."
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-12 text-center">
            <div className="space-y-8">
              <div>
                <p className="text-5xl font-bold text-primary-600 mb-2">47+</p>
                <p className="text-slate-700">Professionnels accompagnés</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary-600 mb-2">1200+</p>
                <p className="text-slate-700">Vidéos produites</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary-600 mb-2">98%</p>
                <p className="text-slate-700">Taux de satisfaction</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary-600 mb-2">3</p>
                <p className="text-slate-700">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Nos Services Détaillés */}
      <Section>
        <SectionHeader
          title={
            <>
              Un écosystème <span className="text-primary-600">complet</span>
            </>
          }
          description="Quatre piliers pour développer votre présence en ligne et votre personal branding"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} hover>
              <CardHeader>
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-slate-900 mb-3">Ce qui est inclus :</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group" asChild>
                  <Link href={service.cta.href}>
                    {service.cta.text}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pourquoi Sphèris Lab */}
      <Section background="white">
        <SectionHeader
          title={
            <>
              Pourquoi choisir <span className="text-primary-600">Sphèris Lab</span> ?
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎯',
              title: 'Spécialisé thérapeutes & coachs',
              description: 'Nous connaissons votre métier, vos enjeux et vos besoins spécifiques. Notre approche est adaptée aux professionnels de la santé mentale et du coaching.',
            },
            {
              icon: '🤝',
              title: 'Accompagnement humain',
              description: 'Au-delà de la technique, nous créons une vraie communauté solidaire. Vous n\'êtes jamais seul, vous progressez entouré de pairs bienveillants.',
            },
            {
              icon: '💎',
              title: 'Qualité professionnelle',
              description: 'Double expertise technique et stratégique, matériel broadcast, formats éprouvés. Vos contenus ont un rendu pro qui reflète votre expertise.',
            },
            {
              icon: '⚡',
              title: 'Résultats rapides',
              description: 'En 2 jours de séminaire, repartez avec 20 à 40 vidéos prêtes à publier. Contenus pour plusieurs mois de communication sans effort technique.',
            },
            {
              icon: '🌐',
              title: 'Visibilité collective',
              description: 'Co-publication sur 3 comptes, réseau d\'entraide, média Sphèris. Votre visibilité est amplifiée par l\'écosystème et la communauté.',
            },
            {
              icon: '🚀',
              title: 'Suivi dans la durée',
              description: 'Accès à vie à la communauté, ateliers réguliers, accompagnement continu. Vous continuez à progresser après le séminaire.',
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à rejoindre l'écosystème Sphèris Lab ?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Découvrez nos séminaires et commencez votre transformation digitale dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary-600" asChild>
              <Link href="/seminaires">Découvrir les séminaires</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Prendre contact</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
