import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { CONTACT } from "@/constants/contact";

export default function ContactInfo() {
  return (
    <div>
      <h3 className="font-heading text-2xl font-semibold">
        Información de contacto
      </h3>

      <div className="mt-8 space-y-6">
        <div className="flex gap-4">
          <MapPin className="text-primary" />

          <div>
            <strong>Dirección</strong>

            <p>{CONTACT.address}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone className="text-primary" />

          <div>
            <strong>Teléfono</strong>

            <p>{CONTACT.phone}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="text-primary" />

          <div>
            <strong>Correo</strong>

            <p>{CONTACT.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}