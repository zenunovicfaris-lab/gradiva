import type { Metadata } from 'next'
import { ProjectCard }   from '@/components/cards/ProjectCard'
import { Container }     from '@/components/layout/Container'
import { Section }       from '@/components/layout/Section'
import { SectionLabel }  from '@/components/ui/SectionLabel'
import { PROJECTS }      from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projekti — GRADIVA d.o.o. | Stanovi i vile u Visokom',
  description:
    'Pregledajte aktuelne i predstojeće stambene projekte kompanije Gradiva — od modernih vila do stambeno-poslovnih kompleksa u Visokom, BiH.',
}

export default function ProjectsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-dark-green-gradient pt-36 pb-16">
        <Container>
          <SectionLabel light>Naši projekti</SectionLabel>
          <h1 className="font-heading text-hero text-white font-light max-w-2xl">
            Svaki projekat je jedna priča o tome kako bi trebalo da se živi.
          </h1>
        </Container>
      </section>

      {/* Projects grid */}
      <Section variant="stone">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={i < 3}
              />
            ))}
          </div>

          {/* Empty state (future-proof) */}
          {PROJECTS.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-heading text-2xl font-light text-slate-mid">
                Novi projekti uskoro.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
