'use client'

import { motion, type Variants } from 'framer-motion'
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

// Helper pour filtrer les props incompatibles entre HTML et Framer Motion
const filterProps = (props: any) => {
  const { onDragStart, onDragEnd, onDrag, onDragEnter, onDragLeave, onDragOver, onDrop, onAnimationStart, onAnimationEnd, onAnimationIteration, ...safeProps } = props
  return safeProps
}

// Variants d'animation prédéfinies
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Composants d'animation prêts à l'emploi

interface MotionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

export const FadeIn = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInVariants}
      transition={{ delay }}
      {...filterProps(props)}
    >
      {children}
    </motion.div>
  )
)
FadeIn.displayName = 'FadeIn'

export const FadeInUp = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUpVariants}
      transition={{ delay }}
      {...filterProps(props)}
    >
      {children}
    </motion.div>
  )
)
FadeInUp.displayName = 'FadeInUp'

export const FadeInDown = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInDownVariants}
      transition={{ delay }}
      {...filterProps(props)}
    >
      {children}
    </motion.div>
  )
)
FadeInDown.displayName = 'FadeInDown'

export const ScaleIn = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={scaleInVariants}
      transition={{ delay }}
      {...filterProps(props)}
    >
      {children}
    </motion.div>
  )
)
ScaleIn.displayName = 'ScaleIn'

export const SlideInLeft = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={slideInLeftVariants}
      transition={{ delay }}
      {...filterProps(props)}
    >
      {children}
    </motion.div>
  )
)
SlideInLeft.displayName = 'SlideInLeft'

export const SlideInRight = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={slideInRightVariants}
      transition={{ delay }}
      {...filterProps(props)}
    >
      {children}
    </motion.div>
  )
)
SlideInRight.displayName = 'SlideInRight'

export const StaggerContainer = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainerVariants}
      transition={{ delay }}
      {...filterProps(props)}
    >
      {children}
    </motion.div>
  )
)
StaggerContainer.displayName = 'StaggerContainer'

// Export motion pour utilisation directe
export { motion }
