import { Container, Heading, Section } from "@/components/ui";

import { WHY_CHOOSE_US } from "@/constants/whyChooseUs";

import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <Heading
          title="¿Por qué elegir AgroConstrucciones Davelo?"
          subtitle="Nuestro compromiso es brindar soluciones confiables, eficientes y de alta calidad."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {WHY_CHOOSE_US.map((item) => (
            <WhyChooseUsCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}