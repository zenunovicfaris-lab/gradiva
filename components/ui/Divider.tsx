import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  gold?: boolean
  short?: boolean
}

export function Divider({ className, gold = false, short = false }: DividerProps) {
  return (
    <div
      className={cn(
        'h-px',
        short ? 'w-12' : 'w-full',
        gold ? 'bg-gold-accent' : 'bg-stone-200',
        className
      )}
      role="separator"
      aria-hidden
    />
  )
}
