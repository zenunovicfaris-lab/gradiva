import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero sekcija"
    >
      {/* ─── Background image ─────────────────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-staniste.jpg"
          alt="GRADIVA — premium stambeni objekat"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay — čitljivost teksta */}
        <div className="absolute inset-0 bg-charcoal/65" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/70 to-transparent" />
        {/* Subtle green tint — brand accent */}
        <div className="absolute inset-0 bg-gradiva-green/10 mix-blend-multiply" />
      </div>

      {/* ─── Decorative vertical label ─────────────────────────────────────── */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
        aria-hidden
      >
        <div className="h-24 w-px bg-gradient-to-b from-transparent to-white/20" />
        <span className="font-body text-[9px] tracking-[0.3em] text-white/25 uppercase rotate-90 my-6 whitespace-nowrap">
          Visoko · BiH
        </span>
        <div className="h-24 w-px bg-gradient-to-t from-transparent to-white/20" />
      </div>

      {/* ─── Content ───────────────────────────────────────────────────────── */}
      <Container className="relative z-10 pt-28 pb-20">
        <div className="max-w-[680px]">

          {/* Overline */}
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-gradiva-green-light mb-7
                       opacity-0 animate-fade-up animate-delay-100"
            style={{ animationFillMode: 'forwards' }}
          >
            GRADIVA d.o.o. · Premium nekretnine
          </p>

          {/* H1 */}
          <h1
            className="font-heading text-display text-white font-light leading-[1.05] tracking-tight mb-7
                       opacity-0 animate-fade-up animate-delay-200"
            style={{ animationFillMode: 'forwards' }}
          >
            Stanovanje{' '}
            <span className="italic text-gradiva-green-light">koje traje.</span>
            <br />
            Arhitektura koja inspiriše.
          </h1>

          {/* Gold separator */}
          <div
            className="h-px w-12 bg-gold-accent mb-7 opacity-0 animate-fade-up animate-delay-300"
            style={{ animationFillMode: 'forwards' }}
            aria-hidden
          />

          {/* Subtitle */}
          <p
            className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-lg mb-10
                       opacity-0 animate-fade-up animate-delay-300"
            style={{ animationFillMode: 'forwards' }}
          >
            Razvijamo premium stambene projekte koji spajaju modernu arhitekturu
            s prirodnim okruženjem — mjesta u kojima vrijednost raste zajedno sa zidovima.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4
                       opacity-0 animate-fade-up animate-delay-400"
            style={{ animationFillMode: 'forwards' }}
          >
            <Button as="link" href="/projekti" variant="primary" size="lg" arrow>
              Pogledajte projekte
            </Button>
            <Button
              as="link"
              href="/kontakt"
              variant="secondary"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 hover:text-white"
            >
              Zatražite informacije
            </Button>
          </div>

        </div>
      </Container>

      {/* ─── Scroll indicator ──────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5"
        aria-hidden
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-white/30">
          Skrolujte
        </span>
        <ChevronDown size={14} className="text-white/25 animate-bounce" />
      </div>

      {/* ─── Bottom gold line ──────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent"
        aria-hidden
      />
    </section>
  )
}
