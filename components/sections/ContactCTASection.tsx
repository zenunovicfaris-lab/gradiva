import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

export function ContactCTASection() {
  return (
    <section
      className="bg-gradiva-green py-16 md:py-20"
      aria-label="Kontakt poziv na akciju"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white mb-3 text-balance">
              Zainteresirani ste za jedan od naših projekata?
            </h2>
            <p className="font-body text-base text-white/70 max-w-lg">
              Pošaljite nam upit ili nas kontaktirajte direktno.
              Odgovaramo u roku od 24 sata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/kontakt"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'font-body font-semibold tracking-[0.12em] uppercase text-sm',
                'px-10 py-4',
                'bg-white text-gradiva-green',
                'hover:bg-stone-warm transition-colors duration-200'
              )}
            >
              Pošaljite upit →
            </Link>
            <Link
              href="/projekti"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'font-body font-semibold tracking-[0.12em] uppercase text-sm',
                'px-10 py-4',
                'border border-white/40 text-white/80',
                'hover:border-white hover:text-white transition-colors duration-200'
              )}
            >
              Pogledajte projekte
            </Link>
          </div>

        </div>
      </Container>
    </section>
  )
}
