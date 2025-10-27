export default function PropositionValeur() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm" id="comment-ca-marche">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comment <span className="text-primary-600">ça marche</span> ?
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un concept simple et efficace : le séminaire de tournage de podcast
          </p>
        </div>

        {/* Le concept principal */}
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-10 rounded-3xl shadow-2xl text-white mb-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-3xl font-bold mb-4">Le Séminaire Immersif</h3>
            <p className="text-xl text-slate-100">
              2 jours / 1 nuit dédiés au tournage de contenus pour les réseaux sociaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-bold text-lg mb-2">Lieu</h4>
              <p className="text-slate-200">L'Hermitage, Compiègne</p>
              <p className="text-sm text-slate-300 mt-1">Un cadre inspirant</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">⏱️</div>
              <h4 className="font-bold text-lg mb-2">Durée</h4>
              <p className="text-slate-200">2 jours / 1 nuit</p>
              <p className="text-sm text-slate-300 mt-1">Intensif et productif</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="font-bold text-lg mb-2">Capacité</h4>
              <p className="text-slate-200">7 participants</p>
              <p className="text-sm text-slate-300 mt-1">Groupe intime</p>
            </div>
          </div>
        </div>

        {/* Format : Interview croisée */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Le format : <span className="text-primary-600">Interview croisée</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🎥</span>
                Comment ça fonctionne ?
              </h4>
              <p className="text-slate-700 mb-4">
                Vous vous interviewez <strong className="text-primary-600">2 par 2</strong> devant la caméra. Chacun pose des questions à l'autre sur son expertise.
              </p>
              <p className="text-slate-600 text-sm italic">
                Un format naturel qui vous positionne automatiquement en expert face à votre communauté.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📦</span>
                Ce que vous repartez avec
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 text-2xl font-bold">✓</span>
                  <span className="text-slate-700"><strong>20 à 40 vidéos</strong> prêtes à publier</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 text-2xl font-bold">✓</span>
                  <span className="text-slate-700">Format <strong>shorts/reels</strong> optimisé</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 text-2xl font-bold">✓</span>
                  <span className="text-slate-700">Contenu pour <strong>plusieurs mois</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Pourquoi ce format */}
          <div className="bg-gradient-to-br from-slate-50 to-primary-50 p-8 rounded-2xl border-2 border-primary-200">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Pourquoi l'interview croisée ?
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <p className="font-semibold text-slate-900">Performant</p>
                  <p className="text-sm text-slate-600">Format éprouvé sur les réseaux</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👑</span>
                <div>
                  <p className="font-semibold text-slate-900">Expert naturel</p>
                  <p className="text-sm text-slate-600">Positionnement automatique</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-semibold text-slate-900">Échange de trafic</p>
                  <p className="text-sm text-slate-600">Co-publication bénéfique</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-slate-900">Plus naturel</p>
                  <p className="text-sm text-slate-600">Vs vidéos solo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Différenciation */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Ce qui nous <span className="text-primary-600">différencie</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔑</div>
              <h5 className="font-bold text-slate-900 mb-2">Clés en main</h5>
              <p className="text-sm text-slate-600">De la conception au tournage, tout est pris en charge</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🤝</div>
              <h5 className="font-bold text-slate-900 mb-2">Communautaire</h5>
              <p className="text-sm text-slate-600">Création de liens durables entre participants</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💰</div>
              <h5 className="font-bold text-slate-900 mb-2">Accessible</h5>
              <p className="text-sm text-slate-600">Rapport qualité/prix optimisé</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">✨</div>
              <h5 className="font-bold text-slate-900 mb-2">Expérience</h5>
              <p className="text-sm text-slate-600">Au-delà de la technique, une aventure collective</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
