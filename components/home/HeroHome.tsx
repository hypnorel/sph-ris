'use client'

import { ArrowRight, Sparkles, Video, Users, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeInUp, FadeIn } from '@/components/ui/Motion'

export default function HeroHome() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-primary-50/20">
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

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Surtitre animé */}
        <FadeInUp delay={0.1}>
          <div className="mb-8 mt-8 md:mt-12">
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-100 via-secondary-50 to-primary-100 text-primary-700 font-semibold text-sm md:text-base border border-primary-200 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              Séminaires • Production • Coaching
            </motion.span>
          </div>
        </FadeInUp>

        {/* Titre principal avec animation */}
        <FadeInUp delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight px-4">
            Transformez votre expertise en{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 animate-gradient bg-[length:200%_100%]">
                impact digital
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </h1>
        </FadeInUp>

        {/* Sous-titre */}
        <FadeInUp delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Thérapeutes, coachs, praticiens : propulsez votre activité avec un écosystème complet.
            De la création de contenu à la stratégie digitale.
          </p>
        </FadeInUp>

        {/* Key benefits - Enhanced with icons */}
        <FadeInUp delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto px-4">
            <motion.div
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-lg border border-primary-100"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-700 font-semibold text-sm md:text-base">20-40 vidéos en 2 jours</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-lg border border-primary-100"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-700 font-semibold text-sm md:text-base">Communauté solidaire</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-lg border border-primary-100"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-700 font-semibold text-sm md:text-base">Double expertise</span>
            </motion.div>
          </div>
        </FadeInUp>

        {/* CTA Buttons - Enhanced */}
        <FadeInUp delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="xl" glow icon={<ArrowRight size={20} />} asChild>
              <Link href="/seminaires">
                Découvrir les séminaires
              </Link>
            </Button>
            <Button size="xl" variant="secondary" asChild>
              <Link href="/agence">Notre écosystème</Link>
            </Button>
          </div>
        </FadeInUp>

        {/* Trust indicators - Enhanced */}
        <FadeIn delay={0.6}>
          <div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <motion.div
              className="text-center p-4 rounded-2xl bg-white border border-primary-100"
              whileHover={{ y: -5 }}
            >
              <motion.p
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                47+
              </motion.p>
              <p className="text-slate-600 text-xs md:text-sm mt-1 font-medium">Participants</p>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-2xl bg-white border border-primary-100"
              whileHover={{ y: -5 }}
            >
              <motion.p
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
              >
                1200+
              </motion.p>
              <p className="text-slate-600 text-xs md:text-sm mt-1 font-medium">Vidéos créées</p>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-2xl bg-white border border-primary-100"
              whileHover={{ y: -5 }}
            >
              <motion.p
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                98%
              </motion.p>
              <p className="text-slate-600 text-xs md:text-sm mt-1 font-medium">Satisfaction</p>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
