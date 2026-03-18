import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    slug: 'staniste',
    title: 'Stanište',
    subtitle: 'Stambeno-poslovni kompleks',
    location: 'Visoko, Bosna i Hercegovina',
    shortDescription:
      'Moderni stambeno-poslovni kompleks koji redefinira standard življenja u centralnoj Bosni. Čiste arhitektonske linije, zeleni balkoni i pažljivo planirana okolina.',
    fullDescription:
      'Stanište je Gradiva flagship projekat — stambeno-poslovni kompleks u srcu Visokog koji spaja funkcionalan urbani životni stil s arhitektonskom elegancijom. Objekat se prostire na više spratova s pažljivo planiranim stanovima različitih kvadratura, od kompaktnih jednosobnih do prostornih četverosobnih jedinica. Svaki stan projektovan je s ciljem maksimalnog iskorištenja prirodnog svjetla, uz balkon ili terasu koji produžuju životni prostor prema vani. Fasada objekta nosi karakterističan zeleno-antracit dizajn s istaknutim balkonima obloženim zelenilom, koji u svakom godišnjem dobu daju život fasadi. Komercijalni prostor u prizemlju omogućava stanovima da imaju sve potrepštine na pješačkoj udaljenosti.',
    status: 'u-izgradnji',
    type: 'stambeno-poslovni',
    isFeatured: true,
    features: [
      'Višespratni stambeni kompleks s komercijalnim prizemom',
      'Lift u svakom ulazu',
      'Podzemna i nadzemna parking mjesta',
      'Energetski razred A — podno grijanje, toplinska izolacija',
      'Balkoni i terase s prefabriciranim zelenim elementima',
      'Video nadzor i kontrola pristupa',
      'Završna obrada s premium materijalima',
      'Uskoro otvaramo prodaju',
    ],
    totalUnits: 48,
    totalArea: '4.200 m²',
    floors: 5,
    imageSrc: '/projects/staniste/hero-staniste.jpg',
    galleryImages: [
      '/projects/staniste/hero-staniste.jpg',
      '/projects/staniste/aerial.jpg',
    ],
    completionDate: '2025/2026',
  },
  {
    slug: 'vila-luka',
    title: 'Vila Luke',
    subtitle: 'Moderna porodična vila',
    location: 'Naselje Luke, Visoko',
    shortDescription:
      'Premium porodična vila s ravnim krovom, velikim staklenim površinama i direktnom vezom interijera i eksterijera. Arhitektura koja govori tišinom.',
    fullDescription:
      'Vila Luka je referentni Gradiva projekat koji demonstrira šta znači graditi po mjeri. Jednokatna vila s ravnim krovom i minimalističkom fasadom smještena je na mirnoj lokaciji u Naselju Luke. Veliki stakleni otvori prema terasi i bašti donose prirodno svjetlo u svaki kutak dnevnog boravka, dok otvoreni koncept kuhinja-dnevni boravak-trpezarija stvara prostor koji je jednako dobar za porodičan život i za primanje gostiju. Vanjski prostor uključuje prostranu terasu s natkrivenjem, uređenu baštu i bazen. Materijali korišteni u izgradnji — kamen, drvo, terazzo — biraju se s ciljem da s vremenom postaju ljepši, ne da se troše.',
    status: 'zavrseno',
    type: 'vila',
    isFeatured: false,
    features: [
      'Jednokatna vila s ravnim krovom, 280 m²',
      'Otvoreni dnevni prostor s pogledom na baštu',
      'Velike staklene površine i klizna vrata',
      'Bazen i natkrivena terasa',
      'Podno grijanje kroz cijeli objekat',
      'Kamen, drvo i terazzo kao primarni materijali',
      'Pametna kućna automatika',
      'Garaža za dva vozila',
    ],
    totalUnits: 1,
    totalArea: '280 m²',
    floors: 2,
    imageSrc: '/projects/vila-luka/hero-vila-luka.jpg',
    galleryImages: [
      '/projects/vila-luka/hero-vila-luka.jpg',
      '/projects/vila-luka/facade.jpg',
      '/projects/vila-luka/interior-1.jpg',
    ],
    completionDate: '2024',
  },
  {
    slug: 'rezidencija-visoko',
    title: 'Rezidencija Visoko',
    subtitle: 'Ekskluzivni stambeni kompleks',
    location: 'Visoko, Bosna i Hercegovina',
    shortDescription:
      'Predstojeći premium stambeni kompleks s manjim brojem ekskluzivnih jedinica. Svaki stan projektovan individualno, s fokusom na privatnost i kvalitet.',
    fullDescription:
      'Rezidencija Visoko je Gradiva projekt u fazi razrade — ekskluzivni stambeni kompleks s ograničenim brojem stanova premium kvaliteta. Projekat je zamišljen kao zatvorena rezidencijalna cjelina s vlastitim uređenim parkom, privatnim parking mjestima i concierge uslugom. Detalji o projektu biće objavljeni u narednom periodu. Zainteresovani kupci mogu se prijaviti za listu prioritetnih kupaca.',
    status: 'u-pripremi',
    type: 'stambeni',
    isFeatured: false,
    features: [
      'Ograničen broj ekskluzivnih stambenih jedinica',
      'Zatvorena rezidencijalna cjelina s privatnim parkom',
      'Individualno projektovani stanovi',
      'Privatna parking mjesta i garaže',
      'Detalji projekta — uskoro',
    ],
    totalUnits: 24,
    imageSrc: '/projects/staniste/coming-soon-placeholder.jpg',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getFeaturedProject(): Project | undefined {
  return PROJECTS.find((p) => p.isFeatured)
}

export function getProjectsPreview(count = 3): Project[] {
  return PROJECTS.slice(0, count)
}
