import type { Metadata } from 'next'
import { CheckCircle2 }  from 'lucide-react'
import { Container }     from '@/components/layout/Container'
import { Section }       from '@/components/layout/Section'
import { SectionLabel }  from '@/components/ui/SectionLabel'
import { Divider }       from '@/components/ui/Divider'
import { ContactCTASection } from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'O nama — GRADIVA d.o.o. | Investicijska kompanija za nekretnine',
  description:
    'Upoznajte kompaniju Gradiva — tim koji stoji iza novog koncepta stanovanja u Bosni i Hercegovini. Naša vizija, vrijednosti i pristup izgradnji.',
}

const VALUES = [
  {
    title:       'Integritet u svakom koraku',
    description: 'Naši kupci znaju s kim rade, šta dobivaju i kada. Bez skrivenih troškova, bez praznih obećanja.',
  },
  {
    title:       'Kvalitet kao jedini standard',
    description: 'Gradimo jedanput, a dobro. Materijali, izvođači i procesi biraju se prema istom kriteriju: hoće li za deset godina biti jednako dobri?',
  },
  {
    title:       'Lokalna ukorijenjenost, regionalna ambicija',
    description: 'Visoko je naš polazni punkt. Razumijemo teren, zajednicu i potrebe — i gradimo za ljude koji tu žive i planiraju živjeti.',
  },
  {
    title:       'Odgovornost prema okruženju',
    description: 'Svaki projekat uzima u obzir prirodno i urbano okruženje. Ne gradimo na uštrb prostora — gradimo da ga oplemenimo.',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title:       'Odabir lokacije',
    description: 'Analiziramo infrastrukturu, prirodno okruženje, razvojni potencijal lokacije i potrebe tržišta.',
  },
  {
    step: '02',
    title:       'Arhitektonski koncept',
    description: 'Svaki projekat dobiva vlastiti identitet — ne tipska rješenja, nego objekat koji razumije gdje je i za koga je.',
  },
  {
    step: '03',
    title:       'Odabir partnera',
    description: 'Izvođači, dobavljači i materijali prolaze kroz naš selekcijski proces. Kvalitet ne počinje na gradilištu — počinje od odabira.',
  },
  {
    step: '04',
    title:       'Izgradnja i nadzor',
    description: 'Aktivno pratimo svaku fazu. Kupci su redovno informisani, a rokovi se poštuju.',
  },
  {
    step: '05',
    title:       'Predaja i podrška',
    description: 'Predaja ključeva nije kraj — to je početak odnosa koji gradimo s vlasnicima naših nekretnina.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-green-gradient pt-36 pb-16">
        <Container narrow>
          <SectionLabel light>O nama</SectionLabel>
          <h1 className="font-heading text-hero text-white font-light">
            Mi smo Gradiva.
            <br />
            <span className="text-gradiva-green-light">Gradimo da traje.</span>
          </h1>
        </Container>
      </section>

      {/* Intro */}
      <Section variant="white">
        <Container narrow>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Naša priča</SectionLabel>
              <h2 className="heading-title text-charcoal mb-5">
                Novi koncept stanovanja u centralnoj Bosni
              </h2>
              <Divider gold short className="mb-6" />
              <div className="space-y-4 font-body text-base text-slate-mid leading-relaxed">
                <p>
                  Gradiva d.o.o. nastala je iz uvjerenja da premium stanovanje ne mora biti privilegija
                  rezervisana za velika urbana središta. Visoko i centralna Bosna imaju sve
                  preduvjete za moderan, miran i kvalitetan život — prirodu, prostor i rastuće
                  tržište nekretnina.
                </p>
                <p>
                  Naš pristup je jednostavan: svaki projekat osmišljavamo kao da će u njemu živjeti
                  netko kome stalo do svake pojedinosti. Lokacija, arhitektura, materijali,
                  izvođači — svaki korak prolazi kroz isti filter kvaliteta.
                </p>
                <p>
                  Nismo najveći developer u regiji, ali smo pažljivi. I to čini razliku.
                </p>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="relative bg-dark-green-gradient aspect-[4/3] lg:aspect-auto">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="font-heading text-4xl font-light text-white italic mb-2">
                  &ldquo;Stanovanje koje traje.&rdquo;
                </p>
                <p className="font-body text-sm text-white/50 tracking-widest uppercase">
                  GRADIVA d.o.o., 2023
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section variant="stone">
        <Container narrow>
          <SectionLabel>Naše vrijednosti</SectionLabel>
          <h2 className="heading-title text-charcoal mb-10">
            Šta stoji iza svakog projekta
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map(({ title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-6 bg-warm-white border border-stone-200"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 mt-0.5 text-gradiva-green"
                  aria-hidden
                />
                <div>
                  <h3 className="font-heading text-xl font-light text-charcoal mb-1.5">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section variant="white">
        <Container narrow>
          <SectionLabel>Naš proces</SectionLabel>
          <h2 className="heading-title text-charcoal mb-12">
            Od ideje do predaje ključeva
          </h2>
          <div className="space-y-0 divide-y divide-stone-100">
            {PROCESS_STEPS.map(({ step, title, description }) => (
              <div key={step} className="flex gap-8 py-8 group">
                <span
                  className="font-heading text-4xl font-light text-stone-200 group-hover:text-gradiva-green/20 transition-colors duration-300 leading-none shrink-0 w-12 text-right"
                  aria-hidden
                >
                  {step}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-light text-charcoal mb-1.5">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTASection />
    </>
  )
}
