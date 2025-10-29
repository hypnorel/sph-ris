'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl shadow-2xl p-12 md:p-16">
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Content */}
          <div className="relative text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Prêt à donner de la visibilité à votre expertise ?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les thérapeutes et coachs qui ont franchi le cap et transformé leur présence en ligne avec Sphèris Lab.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-slate-50"
                asChild
              >
                <Link href="/seminaires" className="group">
                  Découvrir nos séminaires
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Prendre contact</Link>
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-slate-200 text-sm">
                ✨ 800€ pour 2 jours / 1 nuit • 20 à 40 vidéos • Communauté à vie • Accompagnement pro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
