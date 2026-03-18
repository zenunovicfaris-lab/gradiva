import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormData } from '@/types'

// Zamijeni s pravom email integracijom (Resend, Nodemailer, itd.)
// Pogledaj .env.example za konfiguraciju.

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactFormData>

    // Osnovna validacija
    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: 'Ime i email su obavezni.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Neispravna email adresa.' },
        { status: 400 }
      )
    }

    // --- Email slanje (primjer s Resend SDK) ---
    // Uncomment kada dodaš Resend:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from:    'Gradiva Web <noreply@gradiva.ba>',
    //   to:      ['info@gradiva.ba'],
    //   subject: `Novi upit — ${body.inquiryType} — ${body.name}`,
    //   html: `
    //     <h2>Novi upit s web sajta</h2>
    //     <p><strong>Ime:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Telefon:</strong> ${body.phone ?? '—'}</p>
    //     <p><strong>Tip upita:</strong> ${body.inquiryType}</p>
    //     <p><strong>Poruka:</strong></p>
    //     <p>${body.message ?? '—'}</p>
    //   `,
    // })

    // Konzolni log za development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Gradiva Kontakt]', {
        name:        body.name,
        email:       body.email,
        phone:       body.phone,
        inquiryType: body.inquiryType,
        message:     body.message,
      })
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error('[Gradiva Kontakt] Error:', err)
    return NextResponse.json(
      { error: 'Interna greška servera. Molimo pokušajte ponovo.' },
      { status: 500 }
    )
  }
}
