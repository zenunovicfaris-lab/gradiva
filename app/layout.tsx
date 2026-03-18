import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
})

const inter = Inter({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  variable: '--font-inter',
  display:  'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gradiva.ba'),
  title: {
    default:  'GRADIVA — Novi koncept stanovanja | Premium nekretnine Visoko',
    template: '%s | GRADIVA d.o.o.',
  },
  description:
    'Gradiva gradi premium stambene i stambeno-poslovne objekte koji donose harmoniju prirode i urbanog života. Investicijska kompanija za nekretnine u Visokom, Bosna i Hercegovina.',
  keywords: [
    'premium stanovi Visoko',
    'novi koncept stanovanja',
    'investicijska kompanija nekretnine',
    'moderne vile Bosna i Hercegovina',
    'stambeni kompleks Visoko',
    'Gradiva d.o.o.',
    'nekretnine BiH',
  ],
  authors: [{ name: 'GRADIVA d.o.o.' }],
  creator: 'GRADIVA d.o.o.',
  openGraph: {
    type:        'website',
    locale:      'bs_BA',
    url:         'https://gradiva.ba',
    siteName:    'GRADIVA d.o.o.',
    title:       'GRADIVA — Novi koncept stanovanja',
    description: 'Premium stambeni i stambeno-poslovni objekti koji donose harmoniju prirode i urbanog života.',
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'GRADIVA d.o.o. — Premium nekretnine Visoko',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'GRADIVA — Novi koncept stanovanja',
    description: 'Premium stambeni projekti u Visokom, Bosna i Hercegovina.',
    images:      ['/og-image.jpg'],
  },
  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor:    '#6B7229',
  width:         'device-width',
  initialScale:  1,
  maximumScale:  5,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="bs"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
