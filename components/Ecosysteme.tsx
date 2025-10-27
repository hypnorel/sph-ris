export default function Ecosysteme() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm" id="communaute">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            L'<span className="text-primary-600">Écosystème</span> Communautaire
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bien plus qu'une formation : une communauté qui vous accompagne sur le long terme
          </p>
        </div>

        {/* Inclusion post-séminaire */}
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-10 rounded-3xl shadow-2xl text-white mb-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-3xl font-bold mb-3">Inclus dans votre séminaire</h3>
            <p className="text-xl text-slate-100">Accès à vie à la communauté Sphèris</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-bold text-lg mb-2">Slack Sphèris</h4>
              <p className="text-slate-200">
                Espace d'échange et d'entraide entre thérapeutes et coachs engagés
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-bold text-lg mb-2">Ateliers réguliers</h4>
              <p className="text-slate-200">
                Sessions en visio et en présentiel à Paris pour continuer à progresser
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">📢</div>
              <h4 className="font-bold text-lg mb-2">Entraide mutuelle</h4>
              <p className="text-slate-200">
                Partage des contenus, likes, commentaires pour booster la visibilité de tous
              </p>
            </div>
          </div>
        </div>

        {/* Stratégie de visibilité */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Une stratégie de <span className="text-primary-600">visibilité collective</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-500">
              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                Co-publication systématique
              </h4>
              <p className="text-slate-700 mb-4">
                Chaque vidéo d'interview est publiée sur <strong>3 comptes</strong> :
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full font-semibold text-sm">1</span>
                  <span className="text-slate-700">Votre compte personnel</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full font-semibold text-sm">2</span>
                  <span className="text-slate-700">Le compte de votre partenaire d'interview</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full font-semibold text-sm">3</span>
                  <span className="text-slate-700">Le compte <strong>@Sphèris</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary-500">
              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Double bénéfice
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-primary-600 mb-2">Pour vous :</h5>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>Accès au réseau et à l'audience de Sphèris</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>Échange de trafic avec d'autres professionnels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>Visibilité amplifiée X3</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-secondary-600 mb-2">Pour Sphèris :</h5>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">✓</span>
                      <span>Construction progressive d'un média reconnu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">✓</span>
                      <span>Référence sur la thématique thérapie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Réseau solidaire */}
          <div className="bg-gradient-to-br from-slate-50 to-primary-50 p-8 rounded-2xl border-2 border-primary-200">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🌐</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Un réseau solidaire qui grandit ensemble</h4>
              <p className="text-slate-600">
                Chacun contribue à la visibilité des autres, créant une dynamique d'entraide et de croissance collective
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl mb-2">👍</div>
                <p className="font-semibold text-slate-900">Engagement mutuel</p>
                <p className="text-sm text-slate-600">Likes, partages, commentaires</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💡</div>
                <p className="font-semibold text-slate-900">Partage d'expérience</p>
                <p className="text-sm text-slate-600">Conseils et bonnes pratiques</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <p className="font-semibold text-slate-900">Croissance collective</p>
                <p className="text-sm text-slate-600">Tous gagnent en visibilité</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
          <h4 className="text-2xl font-bold mb-4">Prêt·e à rejoindre la communauté ?</h4>
          <p className="text-lg mb-6 text-slate-100">
            Développez votre présence en ligne entouré·e de pairs bienveillants
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Candidater au prochain séminaire →
          </a>
        </div>
      </div>
    </section>
  )
}
