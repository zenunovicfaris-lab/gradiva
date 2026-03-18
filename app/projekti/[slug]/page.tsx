import type { Metadata } from 'next'
import { notFound }       from 'next/navigation'
import Image              from 'next/image'
import Link               from 'next/link'
import { MapPin, CheckCircle2, ArrowLeft, Calendar, Layers, Home } from 'lucide-react'
import { Container }      from '@/components/layout/Container'
import { Section }        from '@/components/layout/Section'
import { Badge }          from '@/components/ui/Badge'
import { Button }         from '@/components/ui/Button'
import { Divider }        from '@/components/ui/Divider'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { getProjectBySlug, PROJECTS } from '@/lib/projects'
import { formatProjectType } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title:       `${project.title} — ${formatProjectType(project.type)}`,
    description: project.shortDescription,
    openGraph: {
      title:       `${project.title} | GRADIVA d.o.o.`,
      description: project.shortDescription,
      images:      [{ url: project.imageSrc, width: 1200, height: 800 }],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const {
    title, subtitle, location, fullDescription,
    status, type, features, imageSrc, galleryImages,
    totalUnits, totalArea, floors, completionDate,
  } = project

  // Galerija bez hero slike (već je prikazana u hero sekciji)
  const galleryOnly = galleryImages?.filter((img) => img !== imageSrc) ?? []

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-20" aria-label={`${title} — projekat detalj`}>
        <div className="relative h-[55vh] md:h-[65vh] min-h-[420px] overflow-hidden bg-charcoal">
          <Image
            src={imageSrc}
            alt={`${title} — ${formatProjectType(type)}`}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <Container>
              <Badge status={status} className="mb-3" />
              <h1 className="font-heading text-hero text-white font-light">{title}</h1>
              {subtitle && (
                <p className="font-body text-sm text-white/65 mt-1 tracking-wide uppercase">
                  {subtitle}
                </p>
              )}
            </Container>
          </div>
        </div>
      </section>

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div className="bg-stone-warm border-b border-stone-200 py-3">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs text-slate-mid">
              <li><Link href="/" className="hover:text-gradiva-green transition-colors">Početna</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/projekti" className="hover:text-gradiva-green transition-colors">Projekti</Link></li>
              <li aria-hidden>/</li>
              <li className="text-charcoal font-medium" aria-current="page">{title}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* ─── Main content ───────────────────────────────────────────────────── */}
      <Section variant="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Left: description + gallery + features */}
            <div className="lg:col-span-2 space-y-10">

              {/* Location + Description */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-slate-mid">
                  <MapPin size={14} aria-hidden />
                  <span className="font-body text-sm">{location}</span>
                </div>
                <p className="font-body text-base text-slate-mid leading-relaxed">
                  {fullDescription}
                </p>
              </div>

              {/* Gallery — prikazuje se samo ako postoje slike */}
              {galleryOnly.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-light text-charcoal mb-5">
                    Galerija
                  </h2>
                  <div className={`grid gap-3 ${galleryOnly.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {galleryOnly.map((src, i) => (
                      <div
                        key={src}
                        className={`relative overflow-hidden bg-stone-warm ${
                          galleryOnly.length === 1 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${title} — slika ${i + 2}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center hover:scale-105 transition-transform duration-500"
                          quality={85}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Divider />

              {/* Features */}
              <div>
                <h2 className="font-heading text-2xl font-light text-charcoal mb-6">
                  Karakteristike projekta
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
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
              </div>

              {/* Back link */}
              <div className="pt-2">
                <Link
                  href="/projekti"
                  className="inline-flex items-center gap-2 font-body text-sm text-slate-mid hover:text-gradiva-green transition-colors"
                >
                  <ArrowLeft size={14} aria-hidden />
                  Svi projekti
                </Link>
              </div>
            </div>

            {/* ─── Sidebar ──────────────────────────────────────────────────── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">

                {/* Meta card */}
                <div className="border border-stone-200 p-6 bg-stone-warm">
                  <h3 className="font-heading text-xl font-light text-charcoal mb-5">
                    Detalji projekta
                  </h3>
                  <ul className="space-y-0 divide-y divide-stone-200">
                    <li className="flex items-center justify-between py-3.5">
                      <span className="font-body text-xs text-slate-mid uppercase tracking-wide">Tip</span>
                      <span className="font-body text-sm font-medium text-charcoal">{formatProjectType(type)}</span>
                    </li>
                    {totalUnits && (
                      <li className="flex items-center justify-between py-3.5">
                        <span className="font-body text-xs text-slate-mid uppercase tracking-wide flex items-center gap-1.5">
                          <Home size={12} aria-hidden /> Jedinica
                        </span>
                        <span className="font-body text-sm font-medium text-charcoal">{totalUnits}</span>
                      </li>
                    )}
                    {totalArea && (
                      <li className="flex items-center justify-between py-3.5">
                        <span className="font-body text-xs text-slate-mid uppercase tracking-wide flex items-center gap-1.5">
                          <Layers size={12} aria-hidden /> Površina
                        </span>
                        <span className="font-body text-sm font-medium text-charcoal">{totalArea}</span>
                      </li>
                    )}
                    {floors && (
                      <li className="flex items-center justify-between py-3.5">
                        <span className="font-body text-xs text-slate-mid uppercase tracking-wide">Spratnost</span>
                        <span className="font-body text-sm font-medium text-charcoal">P+{floors - 1}</span>
                      </li>
                    )}
                    {completionDate && (
                      <li className="flex items-center justify-between py-3.5">
                        <span className="font-body text-xs text-slate-mid uppercase tracking-wide flex items-center gap-1.5">
                          <Calendar size={12} aria-hidden /> Završetak
                        </span>
                        <span className="font-body text-sm font-medium text-charcoal">{completionDate}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* CTA card */}
                <div className="bg-gradiva-green p-6 space-y-3">
                  <h3 className="font-heading text-xl font-light text-white">
                    Zainteresirani ste?
                  </h3>
                  <p className="font-body text-sm text-white/70">
                    Pošaljite upit za ovaj projekat i naš tim će vam se javiti u roku od 24 sata.
                  </p>
                  <Link
                    href={`/kontakt?projekat=${slug}`}
                    className="mt-2 w-full flex items-center justify-center gap-2 font-body font-semibold tracking-[0.12em] uppercase text-xs px-6 py-3.5 bg-white text-gradiva-green hover:bg-stone-warm transition-colors duration-200"
                  >
                    Pošaljite upit →
                  </Link>
                </div>

              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <ContactCTASection />
    </>
  )
}
