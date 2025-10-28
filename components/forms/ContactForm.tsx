'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  profession: z.string().min(1, 'Veuillez sélectionner votre profession'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine((val) => val === true, 'Vous devez accepter la politique de confidentialité'),
  newsletter: z.boolean().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    try {
      // TODO: Remplacer par vraie API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Prénom et Nom */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">
            Prénom *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.firstName ? 'border-red-500' : 'border-slate-200'
            } focus:border-primary-500 focus:outline-none transition-colors`}
            placeholder="Jean"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">
            Nom *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.lastName ? 'border-red-500' : 'border-slate-200'
            } focus:border-primary-500 focus:outline-none transition-colors`}
            placeholder="Dupont"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className={`w-full px-4 py-3 rounded-lg border-2 ${
            errors.email ? 'border-red-500' : 'border-slate-200'
          } focus:border-primary-500 focus:outline-none transition-colors`}
          placeholder="jean.dupont@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
          Téléphone
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none transition-colors"
          placeholder="06 12 34 56 78"
        />
      </div>

      {/* Profession */}
      <div>
        <label htmlFor="profession" className="block text-sm font-semibold text-slate-900 mb-2">
          Profession *
        </label>
        <select
          {...register('profession')}
          id="profession"
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
          <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border-2 ${
            errors.message ? 'border-red-500' : 'border-slate-200'
          } focus:border-primary-500 focus:outline-none transition-colors resize-none`}
          placeholder="Parlez-nous de votre projet et de vos attentes..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Consent RGPD */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('consent')}
            type="checkbox"
            className="mt-1 w-5 h-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500"
          />
          <span className="text-sm text-slate-700">
            J'accepte que mes données soient traitées pour me recontacter concernant ma demande *
            <a href="/contact/politique-confidentialite" className="text-primary-600 hover:underline ml-1">
              (Politique de confidentialité)
            </a>
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-500 text-sm">{errors.consent.message}</p>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('newsletter')}
            type="checkbox"
            className="mt-1 w-5 h-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500"
          />
          <span className="text-sm text-slate-700">
            Je souhaite recevoir les actualités et conseils de Sphèris Lab par email
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer ma demande
            <Send size={20} />
          </>
        )}
      </Button>

      {/* Success Message */}
      {status === 'success' && (
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="font-semibold text-green-900">Message envoyé avec succès !</p>
            <p className="text-green-700 text-sm">Nous vous recontacterons très prochainement.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="font-semibold text-red-900">Erreur d'envoi</p>
            <p className="text-red-700 text-sm">
              Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par email.
            </p>
          </div>
        </div>
      )}
    </form>
  )
}
