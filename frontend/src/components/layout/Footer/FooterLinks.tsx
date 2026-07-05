import { NavLink } from "react-router-dom";

import { navigation } from "@/config/navigation";

export default function FooterLinks() {
  return (
    <div>
      <h4 className="mb-4 font-semibold">
        Enlaces
      </h4>

      <ul className="space-y-2">
        {navigation.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              className="text-white/80 transition hover:text-white"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}