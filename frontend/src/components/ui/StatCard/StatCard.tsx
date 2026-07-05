import { cn } from "@/lib/cn";

import type { StatCardProps } from "./stat-card.types";

import {
  cardClasses,
  labelClasses,
  valueClasses,
} from "./stat-card.styles";

export default function StatCard({
  value,
  label,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(cardClasses, className)}
      {...props}
    >
      <div className={valueClasses}>{value}</div>

      <div className={labelClasses}>{label}</div>
    </div>
  );
}