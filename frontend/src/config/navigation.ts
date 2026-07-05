export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Licitaciones",
    href: "/licitaciones",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];