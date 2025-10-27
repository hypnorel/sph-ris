'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    profession: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis'
    }

    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    if (!formData.profession.trim()) {
      newErrors.profession = 'Votre profession est requise'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Un message est requis'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus('loading')

    // Simulation d'envoi (à remplacer par votre API)
    setTimeout(() => {
      console.log('Form data:', formData)
      setStatus('success')
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        profession: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Prêt·e à <span className="text-primary-600">franchir le cap</span> ?
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Candidatez au prochain séminaire et donnez à votre expertise la visibilité qu'elle mérite
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-slate-900 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.prenom ? 'border-red-500' : 'border-slate-200'
                    } focus:border-primary-500 focus:outline-none transition-colors`}
                    placeholder="Jean"
                  />
                  {errors.prenom && (
                    <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-slate-900 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.nom ? 'border-red-500' : 'border-slate-200'
                    } focus:border-primary-500 focus:outline-none transition-colors`}
                    placeholder="Dupont"
                  />
                  {errors.nom && (
                    <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.email ? 'border-red-500' : 'border-slate-200'
                  } focus:border-primary-500 focus:outline-none transition-colors`}
                  placeholder="jean.dupont@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="profession" className="block text-sm font-semibold text-slate-900 mb-2">
                  Profession *
                </label>
                <select
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.profession ? 'border-red-500' : 'border-slate-200'
                  } focus:border-primary-500 focus:outline-none transition-colors bg-white`}
                >
                  <option value="">Sélectionnez votre profession</option>
                  <option value="psychologue">Psychologue</option>
                  <option value="sophrologue">Sophrologue</option>
                  <option value="naturopathe">Naturopathe</option>
                  <option value="hypnotherapeute">Hypnothérapeute</option>
                  <option value="coach-vie">Coach de vie</option>
                  <option value="coach-confiance">Coach confiance en soi</option>
                  <option value="autre-therapeute">Autre thérapeute</option>
                  <option value="autre-coach">Autre coach</option>
                </select>
                {errors.profession && (
                  <p className="text-red-500 text-sm mt-1">{errors.profession}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.message ? 'border-red-500' : 'border-slate-200'
                  } focus:border-primary-500 focus:outline-none transition-colors resize-none`}
                  placeholder="Parlez-nous de vous et de vos attentes..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma candidature
                    <Send size={20} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-green-900">Message envoyé !</p>
                    <p className="text-green-700 text-sm">Nous vous recontacterons très prochainement.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-red-900">Erreur d'envoi</p>
                    <p className="text-red-700 text-sm">Veuillez réessayer ultérieurement.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📍 Informations pratiques</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Lieu</p>
                  <p>L'Hermitage, Compiègne</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Durée</p>
                  <p>2 jours / 1 nuit</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Capacité</p>
                  <p>7 participants maximum</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Tarif</p>
                  <p className="text-2xl font-bold text-primary-600">800€</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">🤔 Questions fréquentes</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Quel niveau requis ?</p>
                  <p className="text-slate-600 text-sm">Aucun niveau technique requis. Débutants bienvenus !</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Quand aura lieu le prochain séminaire ?</p>
                  <p className="text-slate-600 text-sm">Les dates sont communiquées après validation de votre candidature.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Dois-je apporter du matériel ?</p>
                  <p className="text-slate-600 text-sm">Non, tout le matériel technique est fourni.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-primary-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3">💬 Besoin d'échanger avant ?</h3>
              <p className="text-slate-200 mb-4">
                Vous avez des questions ? N'hésitez pas à nous contacter directement.
              </p>
              <p className="text-slate-300 text-sm">
                📧 Réponse sous 24h ouvrées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
