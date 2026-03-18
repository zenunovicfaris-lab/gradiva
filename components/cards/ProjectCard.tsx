import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { formatProjectType } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  className?: string
  priority?: boolean
}

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  const {
    slug, title, subtitle, location, shortDescription,
    status, type, imageSrc, totalUnits, totalArea,
  } = project

  return (
    <article
      className={cn(
        'group relative flex flex-col bg-warm-white border border-stone-200',
        'hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-brand',
        className
      )}
    >
      {/* Image */}
      <Link
        href={`/projekti/${slug}`}
        className="relative block overflow-hidden aspect-[4/3]"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={imageSrc}
          alt={`${title}, ${location} — ${formatProjectType(type)}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          priority={priority}
          quality={85}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <Badge status={status} />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          {subtitle && (
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-gradiva-green mb-1">
              {subtitle}
            </p>
          )}
          <h3 className="font-heading text-2xl font-light text-charcoal leading-snug">
            <Link
              href={`/projekti/${slug}`}
              className="hover:text-gradiva-green transition-colors duration-150"
            >
              {title}
            </Link>
          </h3>
        </div>

        <div className="flex items-center gap-1.5 mb-4 text-slate-mid">
          <MapPin size={13} className="shrink-0" aria-hidden />
          <span className="font-body text-xs">{location}</span>
        </div>

        <p className="font-body text-sm text-slate-mid leading-relaxed flex-1 mb-5">
          {shortDescription}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <div className="flex gap-4">
            {totalUnits && (
              <span className="font-body text-xs text-slate-mid">
                <span className="font-semibold text-charcoal">{totalUnits}</span> jed.
              </span>
            )}
            {totalArea && (
              <span className="font-body text-xs text-slate-mid">
                <span className="font-semibold text-charcoal">{totalArea}</span>
              </span>
            )}
          </div>
          <Link
            href={`/projekti/${slug}`}
            className="inline-flex items-center gap-1.5 group/link font-body text-xs font-semibold tracking-[0.1em] uppercase text-gradiva-green hover:text-gradiva-green-dark transition-colors duration-150"
            aria-label={`Saznajte više o projektu ${title}`}
          >
            Saznajte više
            <ArrowRight
              size={13}
              className="transition-transform duration-200 group-hover/link:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
