import { Container } from '@/components/layout/Container'
import { TRUST_NUMBERS } from '@/lib/constants'

export function TrustStripSection() {
  return (
    <section
      className="bg-dark-green-gradient py-14 md:py-16"
      aria-label="Trust signali kompanije Gradiva"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_NUMBERS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <span className="font-heading text-4xl md:text-5xl font-light text-white leading-none">
                {value}
              </span>
              <span className="font-body text-xs font-medium tracking-[0.12em] uppercase text-white/50">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="font-heading text-xl md:text-2xl font-light text-white/80 italic">
            Gradiva nije samo gradnja. Gradiva je standard.
          </p>
        </div>
      </Container>
    </section>
  )
}
