import type { Metadata }      from 'next'
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react'
import { Container }           from '@/components/layout/Container'
import { Section }             from '@/components/layout/Section'
import { SectionLabel }        from '@/components/ui/SectionLabel'
import { Divider }             from '@/components/ui/Divider'
import { ContactFormSection }  from '@/components/sections/ContactFormSection'
import { CONTACT_INFO }        from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Kontakt — GRADIVA d.o.o.',
  description:
    'Pošaljite upit za kupovinu stana, investiciju ili partnerstvo. Tim Gradive odgovara u roku od 24 sata. Naselje Luke bb, 71300 Visoko, BiH.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-dark-green-gradient pt-36 pb-16">
        <Container>
          <SectionLabel light>Kontakt</SectionLabel>
          <h1 className="font-heading text-hero text-white font-light max-w-xl">
            Svaki dobar stan
            <br />
            počinje razgovorom.
          </h1>
        </Container>
      </section>

      <Section variant="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form — 3/5 */}
            <div className="lg:col-span-3">
              <ContactFormSection />
            </div>

            {/* Sidebar — 2/5 */}
            <aside className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">

                {/* Contact info */}
                <div className="bg-stone-warm p-7 border border-stone-200">
                  <SectionLabel className="mb-4">Direktni kontakt</SectionLabel>

                  <address className="not-italic space-y-5">
                    <div className="flex gap-3.5">
                      <div className="shrink-0 w-9 h-9 border border-stone-200 bg-warm-white flex items-center justify-center">
                        <MapPin size={15} className="text-gradiva-green" aria-hidden />
                      </div>
                      <div>
                        <p className="font-body text-xs text-slate-mid uppercase tracking-wide mb-1">
                          Adresa
                        </p>
                        <p className="font-body text-sm text-charcoal leading-snug">
                          {CONTACT_INFO.address}
                        </p>
                      </div>
                    </div>

                    <Divider />

                    <div className="flex gap-3.5">
                      <div className="shrink-0 w-9 h-9 border border-stone-200 bg-warm-white flex items-center justify-center">
                        <Phone size={15} className="text-gradiva-green" aria-hidden />
                      </div>
                      <div>
                        <p className="font-body text-xs text-slate-mid uppercase tracking-wide mb-1">
                          Telefon
                        </p>
                        <a
                          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                          className="font-body text-sm text-charcoal hover:text-gradiva-green transition-colors"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <Divider />

                    <div className="flex gap-3.5">
                      <div className="shrink-0 w-9 h-9 border border-stone-200 bg-warm-white flex items-center justify-center">
                        <Mail size={15} className="text-gradiva-green" aria-hidden />
                      </div>
                      <div>
                        <p className="font-body text-xs text-slate-mid uppercase tracking-wide mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="font-body text-sm text-charcoal hover:text-gradiva-green transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    <Divider />

                    <div className="flex gap-3.5">
                      <div className="shrink-0 w-9 h-9 border border-stone-200 bg-warm-white flex items-center justify-center">
                        <Instagram size={15} className="text-gradiva-green" aria-hidden />
                      </div>
                      <div>
                        <p className="font-body text-xs text-slate-mid uppercase tracking-wide mb-1">
                          Instagram
                        </p>
                        <a
                          href={CONTACT_INFO.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm text-charcoal hover:text-gradiva-green transition-colors"
                        >
                          @gradiva_doo
                        </a>
                      </div>
                    </div>
                  </address>
                </div>

                {/* Response time */}
                <div className="flex gap-3.5 p-5 bg-gradiva-green/5 border border-gradiva-green/15">
                  <Clock size={16} className="shrink-0 text-gradiva-green mt-0.5" aria-hidden />
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    <strong className="font-semibold text-charcoal">Odgovaramo u roku od 24 sata.</strong>{' '}
                    Radnim danom od 09:00 do 17:00.
                  </p>
                </div>

              </div>
            </aside>

          </div>
        </Container>
      </Section>

      {/* Map placeholder */}
      <div
        className="w-full h-64 md:h-80 bg-stone-warm border-y border-stone-200 flex items-center justify-center"
        aria-label="Lokacija na mapi — Gradiva d.o.o."
      >
        <div className="text-center">
          <MapPin size={32} className="mx-auto text-gradiva-green mb-2" aria-hidden />
          <p className="font-body text-sm text-slate-mid">
            Naselje Luke bb, 71300 Visoko
          </p>
          <a
            href={CONTACT_INFO.mapsEmbed}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-gradiva-green underline underline-offset-2 mt-1 inline-block hover:text-gradiva-green-dark"
          >
            Otvori u Google Maps →
          </a>
        </div>
      </div>
    </>
  )
}
