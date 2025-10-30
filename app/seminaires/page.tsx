import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import PublicCible from '@/components/PublicCible'
import PropositionValeur from '@/components/PropositionValeur'
import Programme from '@/components/Programme'
import Ecosysteme from '@/components/Ecosysteme'
import Tarifs from '@/components/Tarifs'
import FAQSection from '@/components/FAQSection'
import RelatedArticlesSection from '@/components/RelatedArticlesSection'
import Contact from '@/components/Contact'
import { seminairesFAQ } from '@/data/faqData'

export const metadata = {
  title: 'Séminaires Vidéo',
  description: 'Participez à nos séminaires immersifs de 2 jours pour créer 20 à 40 vidéos professionnelles. Formation personal branding pour thérapeutes et coachs.',
  keywords: ['séminaire vidéo', 'formation thérapeute', 'personal branding coach', 'création contenu vidéo', 'interview croisée'],
}

export default function SeminairesPage() {
  return (
    <>
      <Hero />
      <Vision />
      <PublicCible />
      <PropositionValeur />
      <Programme />
      <Ecosysteme />
      <Tarifs />
      <FAQSection faqs={seminairesFAQ} />
      <RelatedArticlesSection
        title="Ressources Complémentaires"
        subtitle="Découvrez nos articles pour maximiser l'impact de votre présence vidéo"
        filterByTags={['création vidéo', 'batch creation', 'séminaires', 'interviews croisées']}
        limit={3}
      />
      <Contact />
    </>
  )
}
