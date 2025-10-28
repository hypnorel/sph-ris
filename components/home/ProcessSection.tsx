import Section, { SectionHeader } from '@/components/ui/Section'

const steps = [
  {
    number: '01',
    title: 'Candidature',
    description: 'Remplissez notre formulaire de candidature. Nous échangeons ensemble pour comprendre vos objectifs et valider votre participation.',
    icon: '📝',
  },
  {
    number: '02',
    title: 'Séminaire',
    description: 'Participez à nos séminaires immersifs de 2 jours. Tournez 20 à 40 vidéos professionnelles avec notre équipe et d\'autres professionnels.',
    icon: '🎬',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Recevez vos vidéos prêtes à publier. Option montage professionnel disponible pour un rendu encore plus impactant.',
    icon: '✂️',
  },
  {
    number: '04',
    title: 'Communauté & Suivi',
    description: 'Intégrez notre communauté Slack, participez aux ateliers réguliers et bénéficiez d\'un accompagnement continu pour optimiser votre visibilité.',
    icon: '🚀',
  },
]

export default function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        title={
          <>
            Comment <span className="text-primary-600">ça marche</span> ?
          </>
        }
        description="Un parcours simple et structuré pour transformer votre présence en ligne"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300"></div>
            )}

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 mt-2">{step.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div className="mt-16 text-center">
        <p className="text-slate-600 mb-4">
          Prêt à franchir le cap et développer votre visibilité ?
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Candidater maintenant →
        </a>
      </div>
    </Section>
  )
}
