import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardContent } from '@/components/ui/Card'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  // Afficher seulement les 3 premiers témoignages sur la home
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <Section background="gradient">
      <SectionHeader
        title={
          <>
            Ils ont <span className="text-primary-600">franchi le cap</span>
          </>
        }
        description="Découvrez les témoignages de thérapeutes et coachs qui ont transformé leur présence en ligne avec Sphèris Lab"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {featuredTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.profession}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Link to all testimonials */}
      <div className="mt-12 text-center">
        <a
          href="/realisations#temoignages"
          className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group"
        >
          Voir tous les témoignages
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </Section>
  )
}
