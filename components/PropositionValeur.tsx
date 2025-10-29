'use client'

import Card from '@/components/ui/Card'
import { Video, Package, TrendingUp, Crown, Repeat, MessageCircle, Key, Users as UsersIcon, DollarSign, Sparkles } from 'lucide-react'

export default function PropositionValeur() {
  return (
    <section className="py-20 px-4 bg-slate-50/80" id="comment-ca-marche">
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
            <Card hover glow className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Comment ça fonctionne ?</h4>
              </div>
              <p className="text-slate-700 mb-4">
                Vous vous interviewez <strong className="text-primary-600">2 par 2</strong> devant la caméra. Chacun pose des questions à l'autre sur son expertise.
              </p>
              <p className="text-slate-600 text-sm italic">
                Un format naturel qui vous positionne automatiquement en expert face à votre communauté.
              </p>
            </Card>

            <Card hover glow className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Ce que vous repartez avec</h4>
              </div>
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
            </Card>
          </div>

          {/* Pourquoi ce format */}
          <Card gradient className="bg-gradient-to-br from-slate-50 to-primary-50">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Pourquoi l'interview croisée ?
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Performant</p>
                  <p className="text-sm text-slate-600">Format éprouvé sur les réseaux</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Expert naturel</p>
                  <p className="text-sm text-slate-600">Positionnement automatique</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Repeat className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Échange de trafic</p>
                  <p className="text-sm text-slate-600">Co-publication bénéfique</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Plus naturel</p>
                  <p className="text-sm text-slate-600">Vs vidéos solo</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Différenciation */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Ce qui nous <span className="text-primary-600">différencie</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover glow className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Key className="w-7 h-7 text-white" />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">Clés en main</h5>
                <p className="text-sm text-slate-600">De la conception au tournage, tout est pris en charge</p>
              </div>
            </Card>
            <Card hover glow className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <UsersIcon className="w-7 h-7 text-white" />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">Communautaire</h5>
                <p className="text-sm text-slate-600">Création de liens durables entre participants</p>
              </div>
            </Card>
            <Card hover glow className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">Accessible</h5>
                <p className="text-sm text-slate-600">Rapport qualité/prix optimisé</p>
              </div>
            </Card>
            <Card hover glow className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">Expérience</h5>
                <p className="text-sm text-slate-600">Au-delà de la technique, une aventure collective</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
