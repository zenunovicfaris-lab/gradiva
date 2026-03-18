import Link from 'next/link'
import Image from 'next/image'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { getFeaturedProject } from '@/lib/projects'

export function FeaturedProjectSection() {
  const project = getFeaturedProject()
  if (!project) return null

  const {
    slug, title, subtitle, location, fullDescription,
    status, features, imageSrc, totalUnits, totalArea, completionDate,
  } = project

  return (
    <Section variant="white" id="istaknuti-projekat">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <SectionLabel>Istaknuti projekat</SectionLabel>
          <h2 className="heading-title text-charcoal">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-dark-green-gradient order-1">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={`${title} — render projekta`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            )}
            {/* Badge overlay */}
            <div className="absolute top-4 left-4">
              <Badge status={status} />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 flex flex-col gap-6">

            <div>
              {subtitle && (
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-gradiva-green mb-1">
                  {subtitle}
                </p>
              )}
              <div className="flex items-center gap-1.5 text-slate-mid mb-4">
                <MapPin size={13} aria-hidden />
                <span className="font-body text-sm">{location}</span>
              </div>
              <p className="font-body text-base text-slate-mid leading-relaxed">
                {fullDescription}
              </p>
            </div>

            {/* Meta numbers */}
            <div className="grid grid-cols-3 gap-4 py-5 border-t border-b border-stone-200">
              {totalUnits && (
                <div>
                  <p className="font-heading text-2xl font-light text-charcoal">{totalUnits}</p>
                  <p className="font-body text-xs text-slate-mid mt-0.5">Stambenih jedinica</p>
                </div>
              )}
              {totalArea && (
                <div>
                  <p className="font-heading text-2xl font-light text-charcoal">{totalArea}</p>
                  <p className="font-body text-xs text-slate-mid mt-0.5">Ukupna površina</p>
                </div>
              )}
              {completionDate && (
                <div>
                  <p className="font-heading text-2xl font-light text-charcoal">{completionDate}</p>
                  <p className="font-body text-xs text-slate-mid mt-0.5">Planirano završenje</p>
                </div>
              )}
            </div>

            {/* Feature list */}
            <ul className="space-y-2.5">
              {features.slice(0, 5).map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 mt-0.5 text-gradiva-green"
                    aria-hidden
                  />
                  <span className="font-body text-sm text-slate-mid">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex gap-4 pt-2">
              <Button as="link" href={`/projekti/${slug}`} variant="primary" arrow>
                Saznajte više
              </Button>
              <Button as="link" href="/kontakt" variant="secondary">
                Pošaljite upit
              </Button>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  )
}
