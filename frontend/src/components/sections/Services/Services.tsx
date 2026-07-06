import { Container, Heading, Section } from "@/components/ui";

import { SERVICES } from "@/constants/services";

import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section>
      <Container>
        <Heading
          title="Nuestros Servicios"
          subtitle="Soluciones integrales para entidades públicas y privadas."
          align="center"
        />

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