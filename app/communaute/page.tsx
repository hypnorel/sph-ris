import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Communauté Sphèris Lab',
  description: 'Rejoignez notre communauté Slack de thérapeutes et coachs. Entraide, ateliers, événements et réseau solidaire pour développer votre visibilité ensemble.',
}

export default function CommunautePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
              🤝 Réseau Solidaire
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            La <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Communauté</span> Sphèris Lab
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Un réseau bienveillant de thérapeutes et coachs qui s'entraident, partagent et grandissent ensemble
          </p>
        </div>
      </section>

      {/* Slack Sphèris */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              L'espace Slack <span className="text-primary-600">Sphèris Lab</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Notre communauté Slack est le cœur battant de l'écosystème Sphèris Lab. C'est un espace d'entraide
              où vous pouvez poser vos questions, partager vos réussites, demander des feedbacks et tisser des liens
              avec d'autres professionnels de la thérapie et du coaching.
            </p>
            <h3 className="font-bold text-xl text-slate-900 mb-4">Accès inclus</h3>
            <p className="text-slate-600 mb-6">
              L'accès à vie à notre Slack est automatiquement inclus dans nos séminaires (800€).
              Vous rejoignez une communauté active et bienveillante dès votre participation.
            </p>
            <Button asChild>
              <Link href="/seminaires">Découvrir les séminaires</Link>
            </Button>
          </div>
          <div className="bg-gradient-to-br from-slate-100 to-primary-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Canaux Slack</h3>
            <div className="space-y-3">
              {[
                { name: '💬 #general', desc: 'Discussions générales et annonces' },
                { name: '❓ #questions', desc: 'Posez vos questions, obtenez des réponses' },
                { name: '🎉 #wins', desc: 'Partagez vos succès et célébrez ensemble' },
                { name: '📱 #contenus', desc: 'Partagez vos vidéos et posts pour feedback' },
                { name: '🔥 #entraide-engagement', desc: 'Soutenez-vous mutuellement (likes, partages)' },
                { name: '📅 #événements', desc: 'Ateliers, meetups, webinaires' },
                { name: '💡 #tips', desc: 'Astuces et bonnes pratiques' },
                { name: '🎓 #ressources', desc: 'Partage de contenus utiles' },
              ].map((channel, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-slate-900">{channel.name}</p>
                  <p className="text-sm text-slate-600">{channel.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Avantages Communauté */}
      <Section>
        <SectionHeader
          title={
            <>
              Les avantages de la <span className="text-primary-600">communauté</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🤝',
              title: 'Entraide Solidaire',
              description: 'Posez vos questions, obtenez des conseils de pairs qui comprennent vos enjeux. Personne n\'est seul face aux défis de la communication digitale.',
            },
            {
              icon: '📢',
              title: 'Visibilité Collective',
              description: 'Partagez vos contenus, recevez des likes et commentaires authentiques. L\'algorithme aime l\'engagement, la communauté booste votre portée.',
            },
            {
              icon: '💡',
              title: 'Apprentissage Continu',
              description: 'Découvrez les bonnes pratiques, les tendances, les outils qui fonctionnent. Apprenez des succès et erreurs des autres.',
            },
            {
              icon: '🎓',
              title: 'Ateliers Réguliers',
              description: 'Participez à des ateliers thématiques en visio sur la communication, le marketing, les réseaux sociaux, la posture pro.',
            },
            {
              icon: '🌐',
              title: 'Réseau Professionnel',
              description: 'Tissez des liens durables avec d\'autres thérapeutes et coachs. Opportunités de collaborations, partenariats, co-créations.',
            },
            {
              icon: '🚀',
              title: 'Accountability',
              description: 'Partagez vos objectifs, suivez vos progrès, célébrez vos wins. La communauté vous aide à rester constant et motivé.',
            },
          ].map((avantage, index) => (
            <Card key={index} hover className="text-center">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4">{avantage.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{avantage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{avantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Événements */}
      <Section background="white">
        <SectionHeader
          title={
            <>
              Événements & <span className="text-primary-600">Ateliers</span>
            </>
          }
          description="Rencontrez la communauté en ligne et en présentiel"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ateliers en Visio</h3>
              <p className="text-slate-700 mb-4">
                Chaque mois, nous organisons des ateliers thématiques en visioconférence :
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Masterclass réseaux sociaux</li>
                <li>• Revue de contenus collective</li>
                <li>• Q&A avec experts invités</li>
                <li>• Challenges création de contenu</li>
                <li>• Sessions de co-working virtuel</li>
              </ul>
              <p className="text-sm text-slate-600 mt-4 italic">
                📅 Annoncés dans le canal #événements Slack
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary-50 to-primary-50">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Meetups Présentiel</h3>
              <p className="text-slate-700 mb-4">
                Plusieurs fois par an, nous organisons des rencontres à Paris :
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Apéros networking</li>
                <li>• Journées d'ateliers collaboratifs</li>
                <li>• Sessions de tournage vidéo improvisées</li>
                <li>• Conférences et tables rondes</li>
                <li>• Célébrations des succès collectifs</li>
              </ul>
              <p className="text-sm text-slate-600 mt-4 italic">
                📍 Lieux annoncés en avance, participation libre
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Témoignages Membres */}
      <Section>
        <SectionHeader
          title={
            <>
              Ce que disent les <span className="text-primary-600">membres</span>
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sophie M.',
              profession: 'Sophrologue',
              text: 'La communauté Slack est une pépite. Je pose mes questions, j\'obtiens des réponses rapides et bienveillantes. Je ne me sens plus seule !',
            },
            {
              name: 'Thomas D.',
              profession: 'Coach développement personnel',
              text: 'Grâce aux ateliers mensuels, j\'ai appris à optimiser mes reels Instagram. Ma portée a été multipliée par 5 en 2 mois.',
            },
            {
              name: 'Marie L.',
              profession: 'Psychologue',
              text: 'J\'adore le canal #entraide-engagement. On s\'entraide vraiment, on like et commente les posts des autres. C\'est du win-win pur.',
            },
          ].map((temoignage, index) => (
            <Card key={index} className="bg-white/90">
              <CardContent className="pt-6">
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  "{temoignage.text}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{temoignage.name}</p>
                  <p className="text-sm text-slate-600">{temoignage.profession}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Prêt à rejoindre la communauté ?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            L'accès au Slack Sphèris Lab est inclus dans nos séminaires
          </p>
          <Button size="lg" asChild>
            <Link href="/seminaires">Découvrir les séminaires</Link>
          </Button>
          <p className="text-sm text-slate-500 mt-6">
            💡 Vous êtes ancien participant ? Contactez-nous pour réactiver votre accès Slack
          </p>
        </div>
      </Section>
    </>
  )
}
