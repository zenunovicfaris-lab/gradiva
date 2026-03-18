import type { Metadata } from 'next'
import { HeroSection }           from '@/components/sections/HeroSection'
import { ConceptSection }         from '@/components/sections/ConceptSection'
import { FeaturedProjectSection } from '@/components/sections/FeaturedProjectSection'
import { ProjectsPreviewSection } from '@/components/sections/ProjectsPreviewSection'
import { WhyGradivaSection }      from '@/components/sections/WhyGradivaSection'
import { TrustStripSection }      from '@/components/sections/TrustStripSection'
import { ContactCTASection }      from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'GRADIVA — Novi koncept stanovanja | Premium nekretnine Visoko',
  description:
    'Gradiva razvija premium stambene objekte koji donose harmoniju prirode i urbanog života. Istražite naše projekte u Visokom i okolini, BiH.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <FeaturedProjectSection />
      <ProjectsPreviewSection />
      <WhyGradivaSection />
      <TrustStripSection />
      <ContactCTASection />
    </>
  )
}
