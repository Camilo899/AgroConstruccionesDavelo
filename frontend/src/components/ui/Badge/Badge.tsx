import { cn } from "@/lib/cn";

import type { BadgeProps } from "./badge.types";

import { badgeClasses } from "./badge.styles";

export default function Badge({
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeClasses,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}