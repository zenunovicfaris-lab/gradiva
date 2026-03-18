import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projekti',       href: '/projekti' },
  { label: 'O nama',         href: '/o-nama' },
  { label: 'Zašto Gradiva',  href: '/zasto-gradiva' },
  { label: 'Kontakt',        href: '/kontakt' },
]

export const CONTACT_INFO = {
  address:    'Naselje Luke bb, 71300 Visoko, Bosna i Hercegovina',
  phone:      '+387 32 000 000',
  email:      'info@gradiva.ba',
  instagram:  'https://www.instagram.com/gradiva_doo',
  mapsEmbed:  'https://maps.google.com/?q=Visoko,+Bosna+i+Hercegovina',
}

export const COMPANY_INFO = {
  name:       'GRADIVA d.o.o.',
  shortName:  'Gradiva',
  tagline:    'Novi koncept stanovanja',
  founded:    '2023',
}

export const TRUST_NUMBERS = [
  { value: '3+',    label: 'Projekata u razvoju' },
  { value: '150+',  label: 'Stambenih jedinica' },
  { value: '2023',  label: 'Godina osnivanja' },
  { value: '100%',  label: 'Fokus na kvalitet' },
]
