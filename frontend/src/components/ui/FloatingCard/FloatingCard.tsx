import { cn } from "@/lib/cn";

import type { FloatingCardProps } from "./floating-card.types";
import { floatingCardClasses } from "./floating-card.styles";

export default function FloatingCard({
  title,
  subtitle,
  icon,
  className,
  ...props
}: FloatingCardProps) {
  return (
    <div
      className={cn(floatingCardClasses, className)}
      {...props}
    >
      {icon && <div className="mb-3">{icon}</div>}

      <h4 className="font-heading text-lg font-semibold text-primary">
        {title}
      </h4>

      <p className="mt-1 text-sm text-text-light">
        {subtitle}
      </p>
    </div>
  );
}