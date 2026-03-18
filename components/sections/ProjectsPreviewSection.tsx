import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { getProjectsPreview } from '@/lib/projects'

export function ProjectsPreviewSection() {
  const projects = getProjectsPreview(3)

  return (
    <Section variant="stone" id="projekti-preview">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Naši projekti</SectionLabel>
            <h2 className="heading-title text-charcoal">
              Projekti koji mijenjaju standard
            </h2>
          </div>
          <Button as="link" href="/projekti" variant="secondary" arrow className="shrink-0">
            Svi projekti
          </Button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={i === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
