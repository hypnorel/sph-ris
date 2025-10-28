import HeroHome from '@/components/home/HeroHome'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessSection from '@/components/home/ProcessSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'Accueil',
  description: 'Sphèris Lab accompagne les thérapeutes et coachs dans le développement de leur présence en ligne avec des séminaires vidéo, production de contenu et coaching personal branding.',
}

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesOverview />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
