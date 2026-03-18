import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?:   ButtonVariant
  size?:      ButtonSize
  className?: string
  children:   React.ReactNode
  arrow?:     boolean
}

type ButtonProps =
  | (BaseProps & { as?: 'button'; type?: 'button' | 'submit' | 'reset'; onClick?: () => void; disabled?: boolean })
  | (BaseProps & { as: 'link'; href: string })

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-gradiva-green text-white border border-gradiva-green',
    'hover:bg-gradiva-green-dark hover:border-gradiva-green-dark',
    'focus-visible:ring-2 focus-visible:ring-gradiva-green focus-visible:ring-offset-2'
  ),
  secondary: cn(
    'bg-transparent text-gradiva-green border border-gradiva-green',
    'hover:bg-gradiva-green hover:text-white',
    'focus-visible:ring-2 focus-visible:ring-gradiva-green focus-visible:ring-offset-2'
  ),
  ghost: cn(
    'bg-transparent text-charcoal border border-transparent',
    'hover:text-gradiva-green',
    'focus-visible:ring-2 focus-visible:ring-gradiva-green focus-visible:ring-offset-2'
  ),
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-xs',
  lg: 'px-10 py-4 text-sm',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, arrow = false } = props

  const base = cn(
    'group inline-flex items-center gap-2',
    'font-body font-semibold tracking-[0.12em] uppercase',
    'transition-all duration-200 ease-brand',
    'cursor-pointer select-none',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {children}
      {arrow && (
        <span
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        >
          →
        </span>
      )}
    </>
  )

  if (props.as === 'link') {
    return (
      <Link href={props.href} className={base}>
        {content}
      </Link>
    )
  }

  const { type, onClick, disabled } = props
  return (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, disabled && 'opacity-50 cursor-not-allowed')}
    >
      {content}
    </button>
  )
}
