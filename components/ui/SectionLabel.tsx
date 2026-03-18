import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'label-overline mb-4',
        light ? 'text-gradiva-green-light' : 'text-gradiva-green',
        className
      )}
    >
      {children}
    </p>
  )
}
