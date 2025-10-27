'use client'

import { Check } from 'lucide-react'

export default function Tarifs() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 px-4" id="tarifs">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Investissez dans votre <span className="text-primary-600">visibilité</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un tarif transparent et accessible pour un accompagnement complet
          </p>
        </div>

        {/* Offre principale */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                  ⭐ SÉMINAIRE COMPLET
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  <span className="text-5xl md:text-6xl text-primary-600">800€</span>
                </h3>
                <p className="text-xl text-slate-600">2 jours / 1 nuit à Compiègne</p>
              </div>

              {/* Ce qui est inclus */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📦</span>
                    Contenu & Production
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700"><strong>20 à 40 vidéos</strong> professionnelles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Tournage en <strong>interviews croisées</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Cadre, lumière et son <strong>professionnels</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Format <strong>shorts/reels</strong> optimisé</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    Accompagnement & Communauté
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700"><strong>Double coaching</strong> technique & stratégie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Ateliers <strong>personal branding</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Accès <strong>à vie</strong> à la communauté Slack</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Ateliers réguliers <strong>visio & présentiel</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🤝</span>
                    Réseau & Visibilité
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700"><strong>Co-publication</strong> sur 3 comptes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Réseau de <strong>thérapeutes engagés</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Entraide et <strong>engagement mutuel</strong></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏨</span>
                    Logistique
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Hébergement <strong>1 nuit</strong> inclus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Lieu inspirant : <strong>L'Hermitage, Compiègne</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">Groupe intime : <strong>7 participants max</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Réserver ma place →
                </button>
                <p className="text-sm text-slate-500 mt-4">Places limitées • Paiement sécurisé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Option montage */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">✂️</div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Option : Montage Professionnel</h3>
                <p className="text-slate-600">
                  Confiez-nous le montage de vos vidéos pour un rendu encore plus professionnel et prêt à publier
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Tarif unitaire</p>
                  <p className="text-4xl font-bold text-slate-900 mb-2">45€</p>
                  <p className="text-slate-600">par vidéo montée</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border-2 border-primary-300">
                <div className="text-center">
                  <div className="inline-block bg-primary-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                    MEILLEURE OFFRE
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Pack 10+ vidéos</p>
                  <p className="text-4xl font-bold text-primary-600 mb-2">40€</p>
                  <p className="text-slate-600">par vidéo montée</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                💡 Le montage peut être commandé pendant ou après le séminaire
              </p>
            </div>
          </div>
        </div>

        {/* Garantie / Réassurance */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-primary-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Pourquoi choisir Sphèris ?</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">💰</div>
                <p className="font-semibold text-slate-900">Rapport qualité/prix</p>
                <p className="text-sm text-slate-600">Un investissement accessible pour un résultat professionnel</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <p className="font-semibold text-slate-900">Résultats garantis</p>
                <p className="text-sm text-slate-600">Repartez avec 20 à 40 vidéos prêtes à publier</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💫</div>
                <p className="font-semibold text-slate-900">Accompagnement continu</p>
                <p className="text-sm text-slate-600">Communauté et ateliers à vie inclus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
