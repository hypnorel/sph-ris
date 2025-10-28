'use client'

import { ButtonHTMLAttributes, forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  glow?: boolean
}

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false }
type ButtonAsChild = ButtonBaseProps & HTMLAttributes<HTMLDivElement> & { asChild: true }

type ButtonProps = ButtonAsButton | ButtonAsChild

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, icon, iconPosition = 'right', glow = false, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'

    const variants = {
      primary: 'bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 active:scale-95',
      secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg',
      outline: 'border-2 border-slate-300 text-slate-700 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50/50 hover:scale-105 active:scale-95',
      ghost: 'text-slate-700 hover:bg-slate-100 hover:text-primary-600',
      gradient: 'bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-[length:200%_100%] text-white hover:bg-right shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 active:scale-95 animate-gradient',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-2xl',
      xl: 'px-10 py-5 text-xl rounded-2xl',
    }

    const glowClasses = glow ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-400 before:to-secondary-400 before:blur-xl before:opacity-0 hover:before:opacity-50 before:transition-opacity before:-z-10' : ''

    const classes = cn(baseClasses, variants[variant], sizes[size], glowClasses, className)

    const content = (
      <>
        {iconPosition === 'left' && icon && (
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {iconPosition === 'right' && icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
      </>
    )

    // @ts-ignore
    if (props.asChild) {
      return (
        <motion.div
          className={classes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.div>
      )
    }

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: 'inline-block' }}
      >
        <button
          ref={ref}
          className={classes}
          {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {content}
        </button>
      </motion.div>
    )
  }
)

Button.displayName = 'Button'

export default Button
