import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type SectionSpacing =
  | "sm"
  | "md"
  | "lg";

export type SectionBackground =
  | "default"
  | "surface"
  | "primary"
  | "secondary";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  spacing?: SectionSpacing;

  background?: SectionBackground;
}