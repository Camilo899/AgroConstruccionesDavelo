import { navigation } from "@/config/navigation";

export default function NavbarMenu() {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="transition hover:text-primary"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}