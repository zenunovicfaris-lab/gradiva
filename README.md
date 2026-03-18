# GRADIVA d.o.o. — Web sajt

Premium real-estate web sajt za GRADIVA d.o.o., investicijsku kompaniju iz Visokog, BiH.

## Stack

| Tehnologija       | Verzija  | Opis                                  |
|-------------------|----------|---------------------------------------|
| Next.js           | 15.x     | App Router, Server Components         |
| TypeScript        | 5.x      | Tip sigurnost                         |
| Tailwind CSS      | 3.x      | Utility-first CSS + brand theme       |
| Framer Motion     | 11.x     | Animacije (hero, scroll reveal)       |
| Lucide React      | latest   | Ikone (linijski stil)                 |
| Cormorant Garamond| —        | Heading tipografija                   |
| Inter             | —        | Body tipografija                      |

## Pokretanje lokalno

```bash
# 1. Klonirajte repo
git clone https://github.com/vas-username/gradiva-web.git
cd gradiva-web

# 2. Instalirajte zavisnosti
npm install

# 3. Kopirajte env fajl
cp .env.example .env.local
# (Editujte .env.local ako trebate email integraciju)

# 4. Pokrenite dev server
npm run dev
```

Sajt je dostupan na [http://localhost:3000](http://localhost:3000).

## Struktura projekta

```
app/              # Next.js stranice (App Router)
components/
  layout/         # Header, Footer, Container, Section
  ui/             # Button, Badge, SectionLabel, Divider
  sections/       # Page sekcije (Hero, Concept, Projects...)
  cards/          # ProjectCard, ValuePillar
lib/              # Konstante, projekti (mock data), utils
types/            # TypeScript interfejsi
public/images/    # Slike projekata (zamijenite placeholderima)
```

## Dodavanje novog projekta

Otvorite `lib/projects.ts` i dodajte novi objekat u `PROJECTS` niz koristeći `Project` tip iz `types/index.ts`. Sajt automatski prikazuje novi projekat na svim relevantnim stranicama.

## Slike

Projekat koristi `next/image` za optimizovane slike. Smjestite fotografije u `public/images/` i ažurirajte `imageSrc` u `lib/projects.ts`. Format `jpg` ili `webp` preporučen.

## Deploy na Vercel

```bash
# Instalirajte Vercel CLI
npm i -g vercel

# Deployajte
vercel

# Ili povežite GitHub repo na vercel.com i deploy je automatski
```

Vercel automatski:
- Detektuje Next.js projekat
- Optimizuje slike (WebP/AVIF)
- Postavlja edge network za brzinu
- Pruža preview URL za svaki commit

### Environment varijable na Vercel

Dodajte `RESEND_API_KEY` u Vercel Dashboard → Settings → Environment Variables.

## Email integracija

1. Registrujte se na [resend.com](https://resend.com)
2. Generirajte API ključ
3. Dodajte `RESEND_API_KEY` u `.env.local`
4. Odkomentirajte Resend blok u `app/api/kontakt/route.ts`
5. Dodajte `npm install resend`

## TODO — naredne iteracije

- [ ] Zamijeniti gradient placeholdere s pravim fotografijama projekata
- [ ] Dodati galeriju slika na stranicu projekta (lightbox)
- [ ] Integrirati Google Maps embed u kontakt stranicu
- [ ] Dodati Resend email integraciju za kontakt formu
- [ ] Dodati Google Analytics / Plausible
- [ ] CMS integracija (Sanity ili Contentful) za upravljanje projektima bez koda
- [ ] Scroll reveal animacije s Framer Motion
- [ ] Instagram feed sekcija (Instagram Basic Display API)
- [ ] Višejezičnost (BA/HR/EN) s next-intl
- [ ] Sitemap.xml i robots.txt generisanje

## Kontakt

GRADIVA d.o.o.
Naselje Luke bb, 71300 Visoko, BiH
info@gradiva.ba
