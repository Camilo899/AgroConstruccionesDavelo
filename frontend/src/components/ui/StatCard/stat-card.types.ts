import type { HTMLAttributes } from "react";

export interface StatCardProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
}