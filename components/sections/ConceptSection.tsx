import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ValuePillar } from '@/components/cards/ValuePillar'

const PILLARS = [
  {
    iconName: 'ShieldCheck' as const,
    title:       'Sigurnost na prvom mjestu',
    description: 'Gradimo po najvišim građevinskim standardima. Svaki izvođač, svaki materijal i svaki detalj prolaze kroz rigorozan odabir — jer dom mora biti sigurno mjesto prije svega.',
  },
  {
    iconName: 'Layers' as const,
    title:       'Materijali bez kompromisa',
    description: 'Koristimo dokazane materijale i partnere koji dijele naš standard. Podno grijanje, premium stolarija, trajne obloge — svaki detalj govori koliko je pažnje uloženo.',
  },
  {
    iconName: 'TrendingUp' as const,
    title:       'Investicija koja raste',
    description: 'Nekretnina ne gubi vrijednost ako je dobro zamišljena i izgrađena. Naše lokacije, dizajn i oprema birani su da zadržavaju i povećavaju vrijednost s godinama.',
  },
  {
    iconName: 'Trees' as const,
    title:       'Harmonija s prirodom',
    description: 'Arhitektura koja se uklapa u okruženje, a ne nameće mu se. Zelene površine, prirodno osvjetljenje i veza interijera s eksterijerom čine razliku koja se osjeća svaki dan.',
  },
]

export function ConceptSection() {
  return (
    <Section variant="stone" id="koncept">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <SectionLabel>Naš pristup</SectionLabel>
          <h2 className="heading-title text-charcoal mb-4">
            Četiri stuba Gradiva standarda
          </h2>
          <p className="font-body text-base text-slate-mid leading-relaxed">
            Svaki projekat koji nosimo Gradiva imenom mora proći kroz isti filter.
            Ne gradimo samo objekte — gradimo standard u kojem se dobro živi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((pillar) => (
            <ValuePillar
              key={pillar.iconName}
              iconName={pillar.iconName}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
