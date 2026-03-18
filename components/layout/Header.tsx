'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/lib/constants'
import { Container } from './Container'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-warm-white shadow-md border-b border-stone-200'
          : 'bg-warm-white/95 border-b border-stone-200/50'
      )}
    >
      <Container>
        {/* Uklonjen px-4 md:px-8 — Container već ima padding */}
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 group"
            aria-label="GRADIVA d.o.o. — početna stranica"
          >
            <Image
              src="/logos/gradiva-logo.png"
              alt="GRADIVA"
              width={400}
              height={267}
              className="h-10 w-auto md:h-14 object-contain transition-opacity duration-200 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop nav — hidden na mobile/tablet, vidljiv od lg */}
          <nav
            className="hidden lg:flex items-center gap-6 ml-10"
            aria-label="Glavna navigacija"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'font-body text-sm font-medium px-3 py-1 transition-colors duration-150',
                    'relative after:absolute after:bottom-[-3px] after:left-0 after:h-px',
                    'after:bg-gradiva-green after:transition-all after:duration-200',
                    isActive
                      ? 'text-gradiva-green after:w-full'
                      : 'text-charcoal hover:text-gradiva-green after:w-0 hover:after:w-full'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desna strana: CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3 ml-auto lg:ml-8">
            {/* CTA — vidljiv samo na lg+, NE na md da ne blokira hamburger */}
            <Link
              href="/kontakt"
              className={cn(
                'hidden lg:inline-flex items-center',
                'bg-gradiva-green text-white',
                'font-body font-semibold tracking-[0.12em] uppercase text-xs',
                'px-5 py-2.5',
                'hover:bg-gradiva-green-dark transition-colors duration-200'
              )}
            >
              Zatražite informacije
            </Link>

            {/* Hamburger — vidljiv samo ispod lg */}
            <MobileMenu currentPath={pathname} />
          </div>

        </div>
      </Container>
    </header>
  )
}