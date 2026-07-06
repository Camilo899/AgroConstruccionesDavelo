import {
  Container,
  Section,
} from "@/components/ui";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

import {
  gridClasses,
  sectionClasses,
} from "./about.styles";

export default function About() {
  return (
    <Section className={sectionClasses}>
      <Container>
        <div className={gridClasses}>
          <AboutImage />

          <AboutContent />
        </div>
      </Container>
    </Section>
  );
}