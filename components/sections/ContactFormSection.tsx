'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { ContactFormData } from '@/types'

const INQUIRY_TYPES = [
  { value: 'kupovina',   label: 'Kupovina stana' },
  { value: 'ulaganje',   label: 'Investicija / Ulaganje' },
  { value: 'partnerstvo', label: 'Partnerstvo' },
  { value: 'ostalo',     label: 'Ostalo' },
]

const INITIAL_STATE: ContactFormData = {
  name:        '',
  email:       '',
  phone:       '',
  inquiryType: 'kupovina',
  message:     '',
}

export function ContactFormSection() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_STATE)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/kontakt', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL_STATE)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase = cn(
    'w-full bg-warm-white border border-stone-200 px-4 py-3',
    'font-body text-sm text-charcoal placeholder:text-slate-mid/60',
    'focus:outline-none focus:border-gradiva-green focus:ring-1 focus:ring-gradiva-green/20',
    'transition-colors duration-150'
  )

  if (status === 'success') {
    return (
      <div className="py-20 text-center">
        <CheckCircle2 size={40} className="mx-auto text-gradiva-green mb-4" />
        <h3 className="font-heading text-2xl font-light text-charcoal mb-2">
          Hvala! Poruka je primljena.
        </h3>
        <p className="font-body text-sm text-slate-mid">
          Kontaktiraćemo vas u roku od 24 sata.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 font-body text-sm text-gradiva-green underline underline-offset-2 hover:text-gradiva-green-dark"
        >
          Pošalji još jednu poruku
        </button>
      </div>
    )
  }

  return (
    <div>
      <SectionLabel>Kontakt</SectionLabel>
      <h2 className="heading-title text-charcoal mb-3">Razgovarajmo</h2>
      <p className="font-body text-base text-slate-mid leading-relaxed mb-10 max-w-lg">
        Bilo da tražite stan, razmatrate investiciju ili vas zanima partnerstvo —
        svaki razgovor počinje ovdje. Odgovaramo u roku od 24 sata.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">

        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block font-body text-xs font-semibold text-charcoal mb-1.5 tracking-wide uppercase">
              Ime i prezime <span className="text-gradiva-green" aria-hidden>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Vaše ime"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-body text-xs font-semibold text-charcoal mb-1.5 tracking-wide uppercase">
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+387 6X XXX XXX"
              className={inputBase}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-body text-xs font-semibold text-charcoal mb-1.5 tracking-wide uppercase">
            Email adresa <span className="text-gradiva-green" aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="vasa@email.com"
            className={inputBase}
          />
        </div>

        {/* Inquiry type */}
        <div>
          <label htmlFor="inquiryType" className="block font-body text-xs font-semibold text-charcoal mb-1.5 tracking-wide uppercase">
            Vrsta upita
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            className={cn(inputBase, 'cursor-pointer')}
          >
            {INQUIRY_TYPES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-body text-xs font-semibold text-charcoal mb-1.5 tracking-wide uppercase">
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Opišite šta vas zanima — projekat, kvadratura, lokacija ili vrsta investicije..."
            className={cn(inputBase, 'resize-none')}
          />
        </div>

        {/* Error */}
        {status === 'error' && (
          <p className="font-body text-sm text-red-600" role="alert">
            Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte direktno.
          </p>
        )}

        {/* Submit */}
        <div className="pt-2">
          <Button
            as="button"
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className="w-full sm:w-auto"
          >
            {status === 'loading' ? (
              'Slanje...'
            ) : (
              <>
                Pošaljite upit
                <Send size={14} aria-hidden />
              </>
            )}
          </Button>
        </div>

      </form>
    </div>
  )
}
