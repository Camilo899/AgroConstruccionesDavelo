import { Award } from "lucide-react";

import heroImage from "@/assets/images/hero/hero.webp";

import { FloatingCard } from "@/components/ui";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <img
        src={heroImage}
        alt="Proyecto de infraestructura"
        className="rounded-card shadow-card"
      />

      <FloatingCard
        title="+120 proyectos"
        subtitle="Ejecutados con altos estándares de calidad."
        icon={<Award className="text-secondary" size={32} />}
      />
    </div>
  );
}