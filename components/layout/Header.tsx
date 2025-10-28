'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import { NAVIGATION_ITEMS } from '@/lib/utils/constants'
import { cn } from '@/lib/utils/cn'
import Button from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Détection du scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-primary-100/50 py-3'
            : 'bg-white/70 backdrop-blur-sm py-4 md:py-5'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Logo size="md" className={cn('transition-all duration-300', isScrolled && 'scale-95')} />
            </motion.div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAVIGATION_ITEMS.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group',
                        isActive
                          ? 'text-primary-600'
                          : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50/50'
                      )}
                    >
                      {item.label}
                      <motion.span
                        className="absolute -bottom-0.5 left-1/2 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                        initial={false}
                        animate={{
                          width: isActive ? '60%' : 0,
                          x: '-50%',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {!isActive && (
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full group-hover:w-full transition-all duration-300" />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* CTA Button Desktop */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="sm" glow icon={<ArrowRight size={16} />} asChild>
                <Link href="/contact">Candidater</Link>
              </Button>
            </motion.div>

            {/* Burger Menu Mobile */}
            <motion.button
              className="lg:hidden p-2 text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

        </div>
      </motion.header>

      {/* Menu Mobile Fullscreen - Enhanced */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full px-6">
              <motion.nav
                className="flex flex-col items-center gap-2 w-full max-w-sm"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                {NAVIGATION_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      className="w-full"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block w-full px-8 py-4 text-center text-lg font-semibold rounded-2xl transition-all duration-300',
                          isActive
                            ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/50'
                            : 'text-slate-700 hover:bg-white hover:shadow-md'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  className="w-full mt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button size="lg" className="w-full" glow icon={<ArrowRight size={20} />} asChild>
                    <Link href="/contact">Candidater</Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
