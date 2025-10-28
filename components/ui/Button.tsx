import { ButtonHTMLAttributes, forwardRef, AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false }
type ButtonAsChild = ButtonBaseProps & HTMLAttributes<HTMLDivElement> & { asChild: true }

type ButtonProps = ButtonAsButton | ButtonAsChild

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-xl transform hover:scale-105',
      secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
      outline: 'border-2 border-slate-300 text-slate-700 hover:border-primary-500 hover:text-primary-600',
      ghost: 'text-slate-700 hover:bg-slate-100',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const classes = cn(baseClasses, variants[variant], sizes[size], className)

    // @ts-ignore
    if (props.asChild) {
      return <div className={classes}>{children}</div>
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
