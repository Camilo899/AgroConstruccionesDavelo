import { Container } from "@/components/ui";

import FooterBrand from "./FooterBrand";
import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";

import {
  bottomSectionClasses,
  footerClasses,
  topSectionClasses,
} from "./footer.styles";

export default function Footer() {
  return (
    <footer className={footerClasses}>
      <Container>
        <div
          className={`${topSectionClasses} grid gap-12 md:grid-cols-2`}
        >
          <FooterBrand />

          <FooterLinks />
        </div>

        <div className={bottomSectionClasses}>
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}