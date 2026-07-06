import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <article
      className="
        rounded-card
        border
        border-border
        bg-surface
        p-8
        shadow-card
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <Icon
        size={42}
        className="text-primary"
      />

      <h3 className="mt-6 font-heading text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-text-light">
        {description}
      </p>
    </article>
  );
}