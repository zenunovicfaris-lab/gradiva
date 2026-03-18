import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-stone-warm">
      <Container className="py-20 text-center">
        <p className="label-overline mb-4">404</p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-charcoal mb-5">
          Stranica nije pronađena.
        </h1>
        <p className="font-body text-base text-slate-mid mb-10 max-w-md mx-auto">
          Stranica koju tražite ne postoji ili je premještena.
          Pogledajte naše projekte ili se vratite na početnu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="link" href="/" variant="primary">
            Početna stranica
          </Button>
          <Button as="link" href="/projekti" variant="secondary" arrow>
            Pogledajte projekte
          </Button>
        </div>
      </Container>
    </section>
  )
}
