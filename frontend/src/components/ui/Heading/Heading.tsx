import { cn } from "@/lib/cn";

import type { HeadingProps } from "./heading.types";

import {
  alignClasses,
  baseClasses,
  subtitleClasses,
  titleClasses,
} from "./heading.styles";

export default function Heading({
  title,
  subtitle,
  size = "md",
  align = "center",
  className,
  ...props
}: HeadingProps) {
  return (
    <div
      className={cn(
        baseClasses,
        alignClasses[align],
        className
      )}
      {...props}
    >
      <h2
        className={cn(
          "font-heading font-bold text-text",
          titleClasses[size]
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={subtitleClasses}>
          {subtitle}
        </p>
      )}
    </div>
  );
}