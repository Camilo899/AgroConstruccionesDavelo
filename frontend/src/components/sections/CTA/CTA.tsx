import { Button, Container, Section } from "@/components/ui";

import { CTA as CTA_CONTENT } from "@/constants/cta";

export default function CTA() {
  return (
    <Section className="bg-primary text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold">
            {CTA_CONTENT.title}
          </h2>

          <p className="mt-6 text-lg text-slate-200">
            {CTA_CONTENT.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
            >
              {CTA_CONTENT.primaryButton}
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              {CTA_CONTENT.secondaryButton}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}