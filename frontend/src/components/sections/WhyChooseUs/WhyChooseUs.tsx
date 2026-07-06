import {
  Container,
  Heading,
  Section,
} from "@/components/ui";

import { WHY_CHOOSE_US } from "@/constants/whyChooseUs";

import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading level={2}>
            ¿Por qué elegir AgroConstrucciones Davelo?
          </Heading>

          <p className="mt-4 text-lg text-text-light">
            Nuestro compromiso es brindar soluciones confiables,
            eficientes y de alta calidad.
          </p>
        </div>

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