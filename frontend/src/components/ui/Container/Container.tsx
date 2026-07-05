import { cn } from "@/lib/cn";

import type { ContainerProps } from "./container.types";

import {
  baseClasses,
  fixedWidth,
  fluidWidth,
} from "./container.styles";

export default function Container({
  children,
  fluid = false,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        baseClasses,
        fluid ? fluidWidth : fixedWidth,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}