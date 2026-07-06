import type {
  ButtonSize,
  ButtonVariant,
} from "./button.types";
//Coment

export const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark",

  secondary:
    "bg-secondary text-white hover:bg-secondary-dark",

  outline:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",

  ghost:
    "bg-transparent text-primary hover:bg-slate-100",

  danger:
    "bg-danger text-white hover:opacity-90",
};

export const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",

  md: "px-6 py-3",

  lg: "px-8 py-4 text-lg",
};

export const baseClasses = `
inline-flex
items-center
justify-center
gap-2
rounded-button
font-semibold
transition-all
duration-300
shadow-card
disabled:pointer-events-none
disabled:opacity-50
`;