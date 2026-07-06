import { Container, Section } from "@/components/ui";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import {
  gridClasses,
  sectionClasses,
} from "./hero.styles";

export default function Hero() {
  return (
    <Section id="hero" className={sectionClasses}>
      <Container>
        <div className={gridClasses}>
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}