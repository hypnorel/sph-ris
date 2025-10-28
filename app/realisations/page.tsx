import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardContent } from '@/components/ui/Card'
import VideoPlaceholder from '@/components/ui/VideoPlaceholder'
import { testimonials } from '@/data/testimonials'

export const metadata = {
  title: 'Réalisations & Témoignages',
  description: 'Découvrez les vidéos produites et les témoignages de thérapeutes et coachs qui ont transformé leur présence en ligne avec Sphèris Lab.',
}

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Réalisations</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Découvrez les vidéos que nous avons produites et les témoignages de nos participants
          </p>
        </div>
      </section>

      {/* Galerie Vidéos */}
      <Section background="white">
        <SectionHeader
          title={
            <>
              Galerie <span className="text-primary-600">Vidéos</span>
            </>
          }
          description="Exemples de productions réalisées lors de nos séminaires (à venir)"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(12)].map((_, index) => (
            <VideoPlaceholder
              key={index}
              title={`Interview ${index + 1}`}
              description="Thérapeute / Coach"
              aspectRatio="9/16"
            />
          ))}
        </div>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
          <p className="text-primary-900 font-semibold mb-2">📹 Vidéos à venir</p>
          <p className="text-slate-700">
            Nous mettons progressivement en ligne les vidéos de nos participants (avec leur accord).
            Cette galerie sera régulièrement enrichie avec de nouveaux contenus.
          </p>
        </div>
      </Section>

      {/* Avant / Après */}
      <Section>
        <SectionHeader
          title={
            <>
              Transformations <span className="text-primary-600">Avant/Après</span>
            </>
          }
          description="L'impact concret de Sphèris Lab sur la visibilité de nos participants"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sophie M.',
              before: '0 vidéo publiée',
              after: '35 vidéos en 3 mois',
              impact: '+250% de visibilité',
            },
            {
              name: 'Thomas D.',
              before: '200 abonnés Instagram',
              after: '1200 abonnés',
              impact: '+5 nouveaux clients/mois',
            },
            {
              name: 'Marie L.',
              before: 'Syndrome de l\'imposteur',
              after: 'Confiance face caméra',
              impact: 'Publication 3x/semaine',
            },
          ].map((cas, index) => (
            <Card key={index} hover className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{cas.name}</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Avant</p>
                    <p className="font-semibold text-slate-900">{cas.before}</p>
                  </div>
                  <div className="text-3xl">→</div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-1">Après</p>
                    <p className="font-semibold text-slate-900">{cas.after}</p>
                  </div>
                </div>
                <div className="bg-primary-100 rounded-lg p-3">
                  <p className="text-primary-700 font-bold">{cas.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Témoignages Complets */}
      <Section background="white" id="temoignages">
        <SectionHeader
          title={
            <>
              Témoignages <span className="text-primary-600">Complets</span>
            </>
          }
          description="Ce que nos participants disent de leur expérience Sphèris Lab"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.profession}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Globales */}
      <Section>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            L'impact <span className="text-slate-100">Sphèris Lab</span> en chiffres
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '47+', label: 'Participants formés' },
              { number: '1200+', label: 'Vidéos produites' },
              { number: '98%', label: 'Taux de satisfaction' },
              { number: '35', label: 'Vidéos / participant (moyenne)' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            À votre tour de briller
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Rejoignez nos prochains participants et transformez votre présence en ligne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/seminaires"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Découvrir les séminaires
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all"
            >
              Prendre contact
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
