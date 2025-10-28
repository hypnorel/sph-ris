'use client'

import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  glow?: boolean
  gradient?: boolean
}

export default function Card({ children, hover = true, glow = false, gradient = false, className, ...props }: CardProps) {
  const baseClasses = 'bg-white rounded-2xl p-6 transition-all duration-300'
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''
  const glowClasses = glow ? 'shadow-lg hover:shadow-primary-500/20' : 'shadow-md'
  const gradientClasses = gradient ? 'bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30' : ''

  // Filtrer les props incompatibles entre HTML et Framer Motion
  const { onDragStart, onDragEnd, onDrag, onDragEnter, onDragLeave, onDragOver, onDrop, onAnimationStart, onAnimationEnd, ...safeProps } = props

  return (
    <motion.div
      className={cn(
        baseClasses,
        hoverClasses,
        glowClasses,
        gradientClasses,
        'border border-slate-100 hover:border-primary-200',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : undefined}
      {...safeProps}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-2xl font-bold text-slate-900', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-slate-600', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-6 pt-4 border-t border-slate-100', className)} {...props}>
      {children}
    </div>
  )
}
