'use client'

import Card from '@/components/ui/Card'
import { BookOpen, Video, MessageSquare, Camera, BarChart3 } from 'lucide-react'

export default function Programme() {
  return (
    <section className="py-20 px-4" id="programme">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Le <span className="text-primary-600">Programme</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un séminaire complet qui allie théorie, pratique et production
          </p>
        </div>

        {/* Structure du programme */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card hover glow gradient className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Conférences</h3>
                <p className="text-slate-700">
                  Théorie, bonnes pratiques et stratégies de personal branding pour maximiser votre impact.
                </p>
              </div>
            </Card>

            <Card hover glow gradient className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Ateliers pratiques</h3>
                <p className="text-slate-700">
                  Tournage vidéo, coaching face caméra et optimisation de votre posture professionnelle.
                </p>
              </div>
            </Card>

            <Card hover glow gradient className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Interviews croisées</h3>
                <p className="text-slate-700">
                  Sessions d'interview 2 par 2 pour créer vos contenus professionnels et authentiques.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Encadrement */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Un <span className="text-primary-600">double accompagnement</span> expert
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card hover glow className="group border-t-4 border-primary-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Animateur Technique</h4>
                  <p className="text-primary-600 font-semibold">Expert vidéo & production</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-slate-700">Gestion caméra, prise de vue et son</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-slate-700">Coaching face caméra personnalisé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-slate-700">Optimisation de votre posture et présence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-slate-700">Qualité professionnelle garantie</span>
                </li>
              </ul>
            </Card>

            <Card hover glow className="group border-t-4 border-secondary-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Animateur Stratégie</h4>
                  <p className="text-secondary-600 font-semibold">Expert marketing & branding</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span className="text-slate-700">Ateliers marketing et personal branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span className="text-slate-700">Choix stratégique des questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span className="text-slate-700">Maximisation de l'engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span className="text-slate-700">Accompagnement contenu long terme</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Livrables détaillés */}
        <div className="bg-gradient-to-br from-slate-900 to-primary-900 p-10 rounded-3xl shadow-2xl text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Ce que vous <span className="text-secondary-300">repartez avec</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-4">📦</div>
              <h4 className="text-2xl font-bold mb-4">Vos contenus</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span><strong>20 à 40 vidéos</strong> prêtes à publier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span>Format <strong>shorts/reels</strong> optimisé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span>Qualité <strong>professionnelle</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span>Planning de contenu pour <strong>plusieurs mois</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-2xl font-bold mb-4">Vos compétences</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span><strong>Confiance</strong> face caméra</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span>Stratégie de <strong>personal branding</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span>Techniques de <strong>communication</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-300 text-xl">✓</span>
                  <span>Autonomie pour continuer après</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Option montage */}
          <div className="bg-white/5 border-2 border-white/20 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✂️</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Option Montage Professionnel</h4>
                <p className="text-slate-200 mb-3">
                  Envie de contenus montés et optimisés sans effort supplémentaire ?
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="bg-secondary-500 px-4 py-2 rounded-full font-bold">45€/vidéo</span>
                  <span className="text-slate-300">ou</span>
                  <span className="bg-secondary-600 px-4 py-2 rounded-full font-bold">40€/vidéo (pack +10)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
