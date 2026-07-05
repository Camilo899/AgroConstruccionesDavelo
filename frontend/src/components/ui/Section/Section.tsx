import { cn } from "@/lib/cn";

import type { SectionProps } from "./section.types";

import {
  backgroundClasses,
  baseClasses,
  spacingClasses,
} from "./section.styles";

export default function Section({
  children,
  spacing = "md",
  background = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        baseClasses,
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}