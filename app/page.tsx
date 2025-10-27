import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import PublicCible from '@/components/PublicCible'
import PropositionValeur from '@/components/PropositionValeur'
import Programme from '@/components/Programme'
import Ecosysteme from '@/components/Ecosysteme'
import Tarifs from '@/components/Tarifs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vision />
      <PublicCible />
      <PropositionValeur />
      <Programme />
      <Ecosysteme />
      <Tarifs />
      <Contact />
      <Footer />
    </main>
  )
}
