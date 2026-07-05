import type { HTMLAttributes } from "react";

export type HeadingSize =
  | "sm"
  | "md"
  | "lg";

export type HeadingAlign =
  | "left"
  | "center"
  | "right";

export interface HeadingProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;

  subtitle?: string;

  size?: HeadingSize;

  align?: HeadingAlign;
}