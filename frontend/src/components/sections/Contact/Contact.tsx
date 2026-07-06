import {
  Container,
  Heading,
  Section,
} from "@/components/ui";

import { CONTACT } from "@/constants/contact";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Section>
      <Container>
        <Heading
          title={CONTACT.title}
          subtitle={CONTACT.subtitle}
          align="center"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}