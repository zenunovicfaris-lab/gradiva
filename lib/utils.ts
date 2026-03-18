import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatStatus(status: string): string {
  const map: Record<string, string> = {
    'u-pripremi':   'U pripremi',
    'u-izgradnji':  'U izgradnji',
    'zavrseno':     'Završeno',
  }
  return map[status] ?? status
}

export function formatProjectType(type: string): string {
  const map: Record<string, string> = {
    'stambeni':           'Stambeni kompleks',
    'stambeno-poslovni':  'Stambeno-poslovni kompleks',
    'vila':               'Moderna vila',
  }
  return map[type] ?? type
}
