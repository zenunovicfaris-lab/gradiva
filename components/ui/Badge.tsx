import { cn } from '@/lib/utils'
import { formatStatus } from '@/lib/utils'
import type { ProjectStatus } from '@/types'

interface BadgeProps {
  status: ProjectStatus
  className?: string
}

const statusClasses: Record<ProjectStatus, string> = {
  'u-pripremi':  'bg-slate-mid/15 text-slate-mid border border-slate-mid/20',
  'u-izgradnji': 'bg-amber-500/15 text-amber-700 border border-amber-500/20',
  'zavrseno':    'bg-gradiva-green/15 text-gradiva-green-dark border border-gradiva-green/20',
}

export function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'rounded-full px-3 py-1',
        'font-body text-xs font-semibold tracking-wide uppercase',
        statusClasses[status],
        className
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          status === 'u-pripremi'  && 'bg-slate-mid',
          status === 'u-izgradnji' && 'bg-amber-500',
          status === 'zavrseno'    && 'bg-gradiva-green',
        )}
        aria-hidden
      />
      {formatStatus(status)}
    </span>
  )
}
