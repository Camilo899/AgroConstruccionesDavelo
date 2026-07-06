import { Container, Heading, Section } from "@/components/ui";

import { PROJECTS } from "@/constants/projects";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section>
      <Container>
        <Heading
          title="Proyectos Destacados"
          subtitle="Algunas de nuestras experiencias más representativas."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}