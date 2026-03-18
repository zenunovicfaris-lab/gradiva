import { ShieldCheck, Layers, TrendingUp, Trees } from 'lucide-react'
import { cn } from '@/lib/utils'

const ICONS = {
  ShieldCheck,
  Layers,
  TrendingUp,
  Trees,
} as const

type IconName = keyof typeof ICONS

interface ValuePillarProps {
  iconName: IconName
  title: string
  description: string
  className?: string
  inverted?: boolean
}

export function ValuePillar({ iconName, title, description, className, inverted = false }: ValuePillarProps) {
  const Icon = ICONS[iconName]

  return (
    <div
      className={cn(
        'flex flex-col gap-4 p-6 md:p-8',
        'border transition-all duration-300',
        inverted
          ? 'border-white/10 hover:border-gradiva-green-light/40'
          : 'border-stone-200 hover:border-gradiva-green/30 hover:shadow-sm bg-warm-white',
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-10 h-10 flex items-center justify-center',
          inverted ? 'text-gradiva-green-light' : 'text-gradiva-green'
        )}
      >
        <Icon size={28} strokeWidth={1.5} aria-hidden />
      </div>

      {/* Title */}
      <h3
        className={cn(
          'font-heading text-xl font-light leading-snug',
          inverted ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </h3>

      {/* Divider */}
      <div
        className={cn(
          'h-px w-8',
          inverted ? 'bg-gradiva-green-light/50' : 'bg-gold-accent'
        )}
        aria-hidden
      />

      {/* Description */}
      <p
        className={cn(
          'font-body text-sm leading-relaxed',
          inverted ? 'text-white/60' : 'text-slate-mid'
        )}
      >
        {description}
      </p>
    </div>
  )
}
