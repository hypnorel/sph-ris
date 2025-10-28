'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
  }

  return (
    <Link
      href="/"
      className={cn('font-bold inline-flex items-center gap-2 group', sizes[size], className)}
    >
      <motion.span
        className="relative inline-block"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-[length:200%_100%] animate-gradient">
          Sphèris
        </span>
        <motion.span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
      <motion.span
        className="text-slate-700 font-light relative"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Lab
        <motion.span
          className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary-500 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.span>
    </Link>
  )
}
