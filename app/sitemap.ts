import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/projects'

const BASE_URL = 'https://gradiva.ba'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url:              BASE_URL,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         1,
    },
    {
      url:              `${BASE_URL}/projekti`,
      lastModified:     new Date(),
      changeFrequency:  'weekly',
      priority:         0.9,
    },
    {
      url:              `${BASE_URL}/o-nama`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.7,
    },
    {
      url:              `${BASE_URL}/zasto-gradiva`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.7,
    },
    {
      url:              `${BASE_URL}/kontakt`,
      lastModified:     new Date(),
      changeFrequency:  'yearly',
      priority:         0.8,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url:              `${BASE_URL}/projekti/${project.slug}`,
    lastModified:     new Date(),
    changeFrequency:  'weekly' as const,
    priority:         0.85,
  }))

  return [...staticRoutes, ...projectRoutes]
}
