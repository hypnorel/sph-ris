import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardContent } from '@/components/ui/Card'
import ContactForm from '@/components/forms/ContactForm'
import { faqs } from '@/data/faqs'
import { SITE_CONFIG } from '@/lib/utils/constants'
import Link from 'next/link'

export const metadata = {
  title: 'Contact',
  description: 'Contactez Sphèris Lab pour votre projet de personal branding, production vidéo ou coaching. Nous répondons sous 24h.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Parlons de votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              projet
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Une question ? Un projet ? Nous vous répondons sous 24h ouvrées
          </p>
        </div>
      </section>

      {/* Formulaire + Infos */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Formulaire de contact</h2>
            <ContactForm />
          </div>

          {/* Infos complémentaires */}
          <div className="space-y-8">
            {/* Coordonnées */}
            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">📍 Informations pratiques</h3>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Téléphone</p>
                    <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-primary-600 hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Délai de réponse</p>
                    <p>Sous 24h ouvrées</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Réseaux sociaux</p>
                    <div className="flex gap-3 mt-2">
                      <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                        Instagram
                      </a>
                      <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ rapide */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🤔 Questions fréquentes</h3>
                <div className="space-y-4">
                  {faqs.slice(0, 3).map((faq) => (
                    <div key={faq.id}>
                      <p className="font-semibold text-slate-900 mb-1 text-sm">{faq.question}</p>
                      <p className="text-slate-600 text-xs">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Liens utiles */}
            <Card className="bg-slate-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">📄 Liens utiles</h3>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/contact/mentions-legales"
                    className="block text-primary-600 hover:underline"
                  >
                    → Mentions légales
                  </Link>
                  <Link
                    href="/contact/politique-confidentialite"
                    className="block text-primary-600 hover:underline"
                  >
                    → Politique de confidentialité
                  </Link>
                  <Link
                    href="/contact/cgv"
                    className="block text-primary-600 hover:underline"
                  >
                    → Conditions générales de vente
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Complète */}
      <Section>
        <SectionHeader
          title={
            <>
              Questions <span className="text-primary-600">Fréquentes</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Card key={faq.id} hover>
              <CardContent className="pt-6">
                <h3 className="font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Alternative contact */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Préférez échanger directement ?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Appelez-nous ou envoyez-nous un email, nous serons ravis d'échanger avec vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              📧 Envoyer un email
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all"
            >
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
