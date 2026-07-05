import type { HTMLAttributes } from "react";

export interface TrustBarProps
  extends HTMLAttributes<HTMLDivElement> {
  items: string[];
}