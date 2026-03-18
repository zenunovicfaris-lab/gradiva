import { cn } from '@/lib/utils'

type SectionVariant = 'white' | 'stone' | 'dark' | 'green'

interface SectionProps {
  children: React.ReactNode
  variant?: SectionVariant
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

const variantClasses: Record<SectionVariant, string> = {
  white: 'bg-warm-white',
  stone: 'bg-stone-warm',
  dark:  'bg-charcoal text-white',
  green: 'bg-gradiva-green text-white',
}

export function Section({
  children,
  variant = 'white',
  className,
  id,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'section-padding',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Tag>
  )
}
