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
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading level={2}>
            {CONTACT.title}
          </Heading>

          <p className="mt-4 text-lg text-text-light">
            {CONTACT.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}