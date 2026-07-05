import type { HTMLAttributes, ReactNode } from "react";

export interface FloatingCardProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}