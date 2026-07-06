import type { LucideIcon } from "lucide-react";

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function WhyChooseUsCard({
  title,
  description,
  icon: Icon,
}: WhyChooseUsCardProps) {
  return (
    <article className="rounded-card border border-border bg-surface p-6 shadow-card">
      <Icon
        className="text-primary"
        size={36}
      />

      <h3 className="mt-4 font-heading text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-text-light">
        {description}
      </p>
    </article>
  );
}