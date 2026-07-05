import type {
  HeadingAlign,
  HeadingSize,
} from "./heading.types";

export const baseClasses = `
flex
flex-col
gap-4
`;

export const titleClasses: Record<HeadingSize, string> = {
  sm: "text-3xl md:text-4xl",

  md: "text-4xl md:text-5xl",

  lg: "text-5xl md:text-6xl",
};

export const alignClasses: Record<HeadingAlign, string> = {
  left: "items-start text-left",

  center: "items-center text-center",

  right: "items-end text-right",
};

export const subtitleClasses = `
max-w-3xl
text-lg
leading-8
text-text-light
`;