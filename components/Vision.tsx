export default function Vision() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Notre <span className="text-primary-600">Vision</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Notre Mission</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Créer un écosystème où les thérapeutes et coachs peuvent développer leur personal branding <strong className="text-primary-600">sans obstacles techniques</strong>, tout en bénéficiant d'un réseau solidaire et d'un accompagnement professionnel.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision à 2-3 ans</h3>
            <ul className="space-y-3 text-slate-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span>Être identifié publiquement comme un <strong>média de référence</strong> sur la thérapie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span>Fédérer une communauté de <strong>100 thérapeutes engagés</strong> et actifs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ce qui fait Sphèris */}
        <div className="bg-gradient-to-br from-slate-900 to-primary-900 p-10 rounded-3xl shadow-2xl text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Ce qui fait <span className="text-secondary-300">Sphèris</span>
          </h3>
          <p className="text-xl text-center mb-8 text-slate-200">
            Un écosystème complet qui combine :
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🎬</div>
              <h4 className="font-bold text-lg mb-2">Production clés en main</h4>
              <p className="text-slate-300 text-sm">Séminaire immersif de tournage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-lg mb-2">Double expertise</h4>
              <p className="text-slate-300 text-sm">Accompagnement technique et stratégique</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-lg mb-2">Réseau solidaire</h4>
              <p className="text-slate-300 text-sm">Communauté Slack engagée</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">📢</div>
              <h4 className="font-bold text-lg mb-2">Visibilité collective</h4>
              <p className="text-slate-300 text-sm">Co-publication et média commun</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">💫</div>
              <h4 className="font-bold text-lg mb-2">Aventure humaine</h4>
              <p className="text-slate-300 text-sm">Rencontres, partage, entraide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-bold text-lg mb-2">Format qui fonctionne</h4>
              <p className="text-slate-300 text-sm">Interviews croisées performantes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
