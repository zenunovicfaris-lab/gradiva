export type ProjectStatus = 'u-pripremi' | 'u-izgradnji' | 'zavrseno'

export type ProjectType = 'stambeni' | 'stambeno-poslovni' | 'vila'

export interface Project {
  slug: string
  title: string
  subtitle?: string
  location: string
  shortDescription: string
  fullDescription: string
  status: ProjectStatus
  type: ProjectType
  features: string[]
  imageSrc: string
  galleryImages?: string[]
  isFeatured?: boolean
  completionDate?: string
  totalUnits?: number
  totalArea?: string
  floors?: number
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  inquiryType: 'kupovina' | 'ulaganje' | 'partnerstvo' | 'ostalo'
  message: string
}

export interface NavItem {
  label: string
  href: string
}

export interface ValuePillarData {
  title: string
  description: string
  iconName: string
}
