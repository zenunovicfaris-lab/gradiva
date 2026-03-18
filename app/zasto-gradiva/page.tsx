import type { Metadata } from 'next'
import { Container }     from '@/components/layout/Container'
import { Section }       from '@/components/layout/Section'
import { SectionLabel }  from '@/components/ui/SectionLabel'
import { WhyGradivaSection } from '@/components/sections/WhyGradivaSection'
import { TrustStripSection } from '@/components/sections/TrustStripSection'
import { ContactCTASection } from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Zašto Gradiva | Investicijska kompanija za premium nekretnine BiH',
  description:
    'Saznajte šta Gradiva razlikuje od ostalih graditelja — pažljivo odabrani materijali, transparentan proces, arhitektonski integritet i dugoročna vrijednost investicije.',
}

const COMPARISON = [
  {
    aspect:  'Arhitektura',
    gradiva: 'Individualni koncept za svaki projekat, prilagođen lokaciji i ciljnoj grupi',
    others:  'Tipska rješenja s minimalnim prilagodbama',
  },
  {
    aspect:  'Materijali',
    gradiva: 'Isključivo provjereni dobavljači, premium obloge i instalacije',
    others:  'Najniža cijena koja zadovoljava minimum standarda',
  },
  {
    aspect:  'Komunikacija',
    gradiva: 'Kupac prati svaki korak — od ugovora do predaje',
    others:  'Informacije dostupne na zahtjev, nejasni rokovi',
  },
  {
    aspect:  'Investicija',
    gradiva: 'Lokacije i dizajn birani s ciljem rasta vrijednosti',
    others:  'Fokus na brzinu prodaje, ne na dugoročnu vrijednost',
  },
  {
    aspect:  'Okoliš',
    gradiva: 'Zelene površine, energetska efikasnost, integracija s prirodom',
    others:  'Okoliš kao sporedna stavka',
  },
]

export default function WhyGradivaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-green-gradient pt-36 pb-16">
        <Container>
          <SectionLabel light>Zašto Gradiva</SectionLabel>
          <h1 className="font-heading text-hero text-white font-light max-w-2xl">
            Razlika između obećanja
            <br />
            i dokaza.
          </h1>
        </Container>
      </section>

      {/* Why section (reusable) */}
      <WhyGradivaSection />

      {/* Comparison table */}
      <Section variant="stone">
        <Container>
          <SectionLabel>Usporedba</SectionLabel>
          <h2 className="heading-title text-charcoal mb-10">
            Gradiva vs. klasični pristup gradnji
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse font-body text-sm">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="text-left p-4 font-semibold tracking-wide uppercase text-xs w-1/4">
                    Oblast
                  </th>
                  <th className="text-left p-4 font-semibold tracking-wide uppercase text-xs w-3/8 text-gradiva-green-light">
                    Gradiva standard
                  </th>
                  <th className="text-left p-4 font-semibold tracking-wide uppercase text-xs w-3/8 text-white/50">
                    Klasični pristup
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(({ aspect, gradiva, others }, i) => (
                  <tr
                    key={aspect}
                    className={i % 2 === 0 ? 'bg-warm-white' : 'bg-stone-warm'}
                  >
                    <td className="p-4 font-semibold text-charcoal align-top border-b border-stone-200">
                      {aspect}
                    </td>
                    <td className="p-4 text-charcoal align-top border-b border-stone-200">
                      <span className="flex gap-2 items-start">
                        <span className="text-gradiva-green mt-0.5 shrink-0" aria-hidden>✓</span>
                        {gradiva}
                      </span>
                    </td>
                    <td className="p-4 text-slate-mid align-top border-b border-stone-200">
                      {others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <TrustStripSection />
      <ContactCTASection />
    </>
  )
}
