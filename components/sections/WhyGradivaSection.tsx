import { MapPin, Users, Pencil, ClipboardList, BarChart2, Gem } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'
import { cn } from '@/lib/utils'

const BENEFITS = [
  {
    Icon: MapPin,
    title:       'Lokacije s vizijom',
    description: 'Svaki projekat lociramo tamo gdje ima prostora za mirnoću — a ipak dovoljno blizu svemu što čini svakodnevni život lakim i kvalitetnim.',
  },
  {
    Icon: Users,
    title:       'Partneri prvog reda',
    description: 'Radimo isključivo s izvođačima i dobavljačima koji prolaze kroz naš selekcijski proces. Jer iza svakog projekta stoje konkretna imena koja garantuju kvalitet.',
  },
  {
    Icon: Pencil,
    title:       'Arhitektonski identitet',
    description: 'Nema tipskih rješenja. Svaki Gradiva projekat nosi vlastiti arhitektonski koncept, prilagođen lokaciji, namjeni i potrebama budućih stanara.',
  },
  {
    Icon: ClipboardList,
    title:       'Transparentan proces',
    description: 'Od ugovora do predaje ključeva, kupac uvijek zna u kojoj fazi je izgradnja i šta slijedi. Jasna komunikacija nije bonus — to je naš standard.',
  },
  {
    Icon: BarChart2,
    title:       'Vrijednost koja raste',
    description: 'Nekretnine koje smo izgradili zadržavaju i povećavaju vrijednost. Dobra lokacija, čvrsta konstrukcija i kvalitetni materijali — to su temelji pametne investicije.',
  },
  {
    Icon: Gem,
    title:       'Briga o svakom detalju',
    description: 'Stolarija, keramika, instalacije, fasada — ništa nije prepušteno slučaju. Planiramo unaprijed da ne bismo kompromitirali na kraju.',
  },
]

export function WhyGradivaSection() {
  return (
    <Section variant="white" id="zasto-gradiva">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — sticky header */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>Zašto Gradiva</SectionLabel>
            <h2 className="heading-title text-charcoal mb-5">
              Razlika koja se vidi i osjeća
            </h2>
            <Divider gold short className="mb-5" />
            <p className="font-body text-base text-slate-mid leading-relaxed mb-8">
              Nije dovoljno izgraditi objekat. Mi gradimo mjesta u kojima se
              dobro živi — i to se ne dešava slučajno. Iza svakog Gradiva
              projekta stoji promišljeni proces koji počinje mnogo prije
              prve lopate.
            </p>
            {/* Visual accent */}
            <div className="hidden lg:block p-6 bg-stone-warm border border-stone-200">
              <p className="font-heading text-3xl font-light text-gradiva-green italic mb-2">
                &ldquo;Gradiva nije samo gradnja.
                Gradiva je standard.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — benefits list */}
          <div className="lg:col-span-3">
            <ul className="divide-y divide-stone-100">
              {BENEFITS.map(({ Icon, title, description }, i) => (
                <li
                  key={title}
                  className={cn(
                    'flex gap-5 py-7 group',
                    'hover:pl-1 transition-all duration-200'
                  )}
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-stone-200 group-hover:border-gradiva-green/30 group-hover:bg-gradiva-green/5 transition-all duration-200">
                    <Icon size={18} strokeWidth={1.5} className="text-gradiva-green" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-light text-charcoal mb-1.5">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-slate-mid leading-relaxed">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </Section>
  )
}
