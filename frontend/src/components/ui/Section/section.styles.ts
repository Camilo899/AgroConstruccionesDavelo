import type {
  SectionBackground,
  SectionSpacing,
} from "./section.types";

export const baseClasses = `
w-full
`;

export const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
};

export const backgroundClasses: Record<
  SectionBackground,
  string
> = {
  default: "bg-background",

  surface: "bg-surface",

  primary: "bg-primary text-white",

  secondary: "bg-secondary text-white",
};