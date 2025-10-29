'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeInUp, FadeIn } from '@/components/ui/Motion'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-primary-50/20">
      {/* Background decorative elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Logo / Brand */}
        <FadeInUp delay={0.1}>
          <div className="mb-8">
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Sphèris
            </motion.h1>
            <motion.div
              className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>
        </FadeInUp>

        {/* Main headline */}
        <FadeInUp delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Thérapeute, coach :
            <br />
            <span className="text-primary-600">et si créer du contenu</span>
            <br />
            devenait enfin simple ?
          </h2>
        </FadeInUp>

        {/* Subheadline */}
        <FadeInUp delay={0.3}>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un séminaire immersif de 2 jours pour créer <strong className="text-primary-600">20 à 40 vidéos professionnelles</strong>, sans stress technique et entouré de pairs bienveillants.
          </p>
        </FadeInUp>

        {/* Key benefits */}
        <FadeInUp delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
            <motion.div
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-primary-100"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-2xl">🎬</span>
              <span className="text-slate-700 font-medium">Contenu clés en main</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-primary-100"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-2xl">🤝</span>
              <span className="text-slate-700 font-medium">Communauté solidaire</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-primary-100"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-2xl">✨</span>
              <span className="text-slate-700 font-medium">Sans barrière technique</span>
            </motion.div>
          </div>
        </FadeInUp>

        {/* CTA Buttons */}
        <FadeInUp delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rejoindre le prochain séminaire
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.a
              href="#comment-ca-marche"
              className="text-primary-600 hover:text-primary-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir le concept
            </motion.a>
          </div>
        </FadeInUp>

        {/* Trust indicator */}
        <FadeIn delay={0.6}>
          <div className="mt-12 text-slate-500 text-sm">
            <p>📍 Séminaire à <strong>L'Hermitage, Compiègne</strong> • 2 jours / 1 nuit • <strong className="text-primary-600">800€</strong></p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
