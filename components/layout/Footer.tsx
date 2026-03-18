import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'
import { Container } from './Container'
import { Divider } from '@/components/ui/Divider'
import { NAV_ITEMS, CONTACT_INFO, COMPANY_INFO } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white" aria-label="Footer">
      <Container>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-5 group" aria-label="GRADIVA — početna stranica">
              <Image
                src="/logos/gradiva-logo.png"
                alt="GRADIVA"
                width={240}
                height={160}
                className="h-14 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Razvijamo premium stambene objekte koji spajaju modernu arhitekturu
              s trajnom vrijednošću. Svaki projekat je obećanje kvaliteta koje se
              mjeri godinama.
            </p>
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gradiva-green-light transition-colors duration-150"
              aria-label="Gradiva na Instagramu"
            >
              <Instagram size={16} />
              @gradiva_doo
            </a>
          </div>

          {/* Nav links */}
          <div>
            <p className="label-overline text-gradiva-green-light mb-5">Navigacija</p>
            <nav aria-label="Footer navigacija">
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="label-overline text-gradiva-green-light mb-5">Kontakt</p>
            <address className="not-italic space-y-3">
              <a
                href={CONTACT_INFO.mapsEmbed}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-gradiva-green-light" />
                {CONTACT_INFO.address}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Phone size={15} className="shrink-0 text-gradiva-green-light" />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Mail size={15} className="shrink-0 text-gradiva-green-light" />
                {CONTACT_INFO.email}
              </a>
            </address>
          </div>

        </div>

        <Divider className="bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Sva prava zadržana.
          </p>
          <p className="font-body text-xs text-white/30">
            Registrovan u Bosni i Hercegovini
          </p>
        </div>

      </Container>
    </footer>
  )
}
