'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'

interface MobileMenuProps {
  currentPath?: string
}

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export function MobileMenu({ currentPath }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const drawerRef  = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    // Fokus nazad na hamburger dugme
    setTimeout(() => triggerRef.current?.focus(), 50)
  }, [])

  // Escape tipka
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, close])

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Ručni focus trap
  useEffect(() => {
    if (!open) return
    const drawer = drawerRef.current
    if (!drawer) return

    // Fokusiraj prvi element u draweru
    const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE))
    focusable[0]?.focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (focusable.length === 0) { e.preventDefault(); return }

      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [open])

  return (
    <>
      {/* Hamburger trigger */}
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => (open ? close() : setOpen(true))}
        className="lg:hidden p-2 text-charcoal hover:text-gradiva-green transition-colors"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={true}
        onClick={close}
      />

      {/* Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal={true}
        aria-label="Navigacijski meni"
        className={cn(
          'fixed top-0 right-0 z-[60] h-full w-80 max-w-[90vw]',
          'bg-white shadow-2xl transition-transform duration-300 ease-brand lg:hidden',
          'flex flex-col',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <span className="font-heading text-lg font-semibold tracking-wider text-gradiva-green uppercase">
            Gradiva
          </span>
          <button
            type="button"
            aria-label="Zatvori meni"
            onClick={close}
            className="p-1.5 text-charcoal hover:text-gradiva-green transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-6 py-8 gap-1" aria-label="Mobilna navigacija">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={cn(
                'font-body text-base font-medium',
                'py-3.5 border-b border-stone-100',
                'hover:text-gradiva-green transition-colors duration-150',
                'flex items-center justify-between',
                currentPath === item.href ||
                (item.href !== '/' && currentPath?.startsWith(item.href))
                  ? 'text-gradiva-green'
                  : 'text-charcoal'
              )}
            >
              {item.label}
              <span className="text-slate-mid text-sm" aria-hidden={true}>→</span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-8">
          <Link
            href="/kontakt"
            onClick={close}
            className={cn(
              'w-full flex items-center justify-center gap-2',
              'bg-gradiva-green text-white',
              'font-body font-semibold tracking-[0.12em] uppercase text-xs',
              'px-6 py-3.5',
              'hover:bg-gradiva-green-dark transition-colors duration-200'
            )}
          >
            Zatražite informacije
          </Link>
        </div>
      </div>
    </>
  )
}
