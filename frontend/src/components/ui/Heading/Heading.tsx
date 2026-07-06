import { cn } from "@/lib/cn";

import type { HeadingProps } from "./heading.types";

import {
  headingBaseClasses,
  headingVariants,
} from "./heading.styles";

export default function Heading({
  children,
  level = 2,
  className,
  ...props
}: HeadingProps) {
  switch (level) {
    case 1:
      return (
        <h1
          className={cn(headingBaseClasses, headingVariants[1], className)}
          {...props}
        >
          {children}
        </h1>
      );

    case 2:
      return (
        <h2
          className={cn(headingBaseClasses, headingVariants[2], className)}
          {...props}
        >
          {children}
        </h2>
      );

    case 3:
      return (
        <h3
          className={cn(headingBaseClasses, headingVariants[3], className)}
          {...props}
        >
          {children}
        </h3>
      );

    case 4:
      return (
        <h4
          className={cn(headingBaseClasses, headingVariants[4], className)}
          {...props}
        >
          {children}
        </h4>
      );

    case 5:
      return (
        <h5
          className={cn(headingBaseClasses, headingVariants[5], className)}
          {...props}
        >
          {children}
        </h5>
      );

    case 6:
      return (
        <h6
          className={cn(headingBaseClasses, headingVariants[6], className)}
          {...props}
        >
          {children}
        </h6>
      );

    default:
      return null;
  }
}