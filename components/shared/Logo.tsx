import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
  }

  return (
    <Link href="/" className={cn('font-bold', sizes[size], className)}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
        Sphèris
      </span>
      <span className="text-slate-600 ml-2 font-light">Lab</span>
    </Link>
  )
}
