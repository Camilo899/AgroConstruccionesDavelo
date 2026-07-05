import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className="font-heading text-2xl font-bold text-primary"
    >
      Davelo
    </Link>
  );
}