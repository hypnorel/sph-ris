import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'
import Container from './Container'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  background?: 'default' | 'white' | 'gradient'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Section({
  children,
  background = 'default',
  containerSize = 'lg',
  className,
  ...props
}: SectionProps) {
  const backgrounds = {
    default: '',
    white: 'bg-white/50 backdrop-blur-sm',
    gradient: 'bg-gradient-to-br from-slate-50 to-purple-50',
  }

  return (
    <section className={cn('py-20', backgrounds[background], className)} {...props}>
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}

// Section Header pour titres de sections
export function SectionHeader({
  title,
  description,
  centered = true,
  className,
}: {
  title: string | React.ReactNode
  description?: string
  centered?: boolean
  className?: string
}) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <>
          <div className={cn('h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6', centered && 'mx-auto')} />
          <p className={cn('text-xl text-slate-600', centered ? 'max-w-3xl mx-auto' : 'max-w-3xl')}>
            {description}
          </p>
        </>
      )}
    </div>
  )
}
