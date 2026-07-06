import {
  Container,
  Heading,
  Section,
} from "@/components/ui";

import { PROJECTS } from "@/constants/projects";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading level={2}>
            Proyectos Destacados
          </Heading>

          <p className="mt-4 text-lg text-text-light">
            Algunas de nuestras experiencias más representativas.
          </p>
        </div>

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