import {
  Container,
  Heading,
  Section,
} from "@/components/ui";

import { SERVICES } from "@/constants/services";

import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading level={2}>
            Nuestros Servicios
          </Heading>

          <p className="mt-4 text-lg text-text-light">
            Soluciones integrales para entidades públicas y privadas.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}