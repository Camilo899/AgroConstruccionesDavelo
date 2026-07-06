import { Button, Container } from "@/components/ui";

import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import MobileMenu from "./MobileMenu";

import { navbarClasses } from "./navbar.styles";

export default function Navbar() {
  return (
    <header className={navbarClasses}>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavbarLogo />

          <NavbarMenu />

          <a href="#contact">
            <Button size="sm">
              Contáctanos
            </Button>
          </a>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}