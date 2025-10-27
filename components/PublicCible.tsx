export default function PublicCible() {
  return (
    <section className="py-20 px-4" id="pour-qui">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pour <span className="text-primary-600">qui ?</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sphèris s'adresse aux thérapeutes et coachs qui souhaitent développer leur présence en ligne
          </p>
        </div>

        {/* Profils visés */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Profils visés</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-100">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3">Thérapeutes</h4>
                  <p className="text-slate-600 mb-3">Toutes spécialités (sauf pratiques ésotériques) :</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span> Psychologues
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span> Sophrologues
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span> Naturopathes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span> Hypnothérapeutes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span> Et plus encore...
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-secondary-100">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💪</div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3">Coachs</h4>
                  <p className="text-slate-600 mb-3">Avec un lien avec la thérapie :</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-secondary-600">•</span> Coachs de vie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary-600">•</span> Confiance en soi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary-600">•</span> Développement personnel
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary-600">•</span> Accompagnement thérapeutique
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-600 mt-6 italic">
            💡 Niveau : Débutants à intermédiaires en personal branding
          </p>
        </div>

        {/* Problématiques */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Vous vous reconnaissez dans ces <span className="text-primary-600">difficultés</span> ?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-l-4 border-red-500">
              <div className="text-3xl mb-3">😓</div>
              <h4 className="font-bold text-slate-900 mb-2">Valorisation difficile</h4>
              <p className="text-slate-700 text-sm">
                Difficulté à valoriser votre activité auprès de vos clients potentiels
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-bold text-slate-900 mb-2">Barrières techniques</h4>
              <p className="text-slate-700 text-sm">
                Obstacles techniques bloquant la création de contenu
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="text-3xl mb-3">🤷</div>
              <h4 className="font-bold text-slate-900 mb-2">Manque de réseau</h4>
              <p className="text-slate-700 text-sm">
                Absence d'accompagnement dans la démarche de communication
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-bold text-slate-900 mb-2">Pas de cadre structuré</h4>
              <p className="text-slate-700 text-sm">
                Absence de cadre pour se lancer efficacement
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-4">Et si tout devenait plus simple ?</h4>
            <p className="text-lg mb-6 text-slate-100">
              Sphèris retire tous les obstacles qui vous empêchent de passer à l'action
            </p>
            <a
              href="#comment-ca-marche"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Découvrir la solution →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
