import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/cn";

import type { TrustBarProps } from "./trust-bar.types";

import {
  itemClasses,
  trustBarClasses,
} from "./trust-bar.styles";

export default function TrustBar({
  items,
  className,
  ...props
}: TrustBarProps) {
  return (
    <div
      className={cn(trustBarClasses, className)}
      {...props}
    >
      {items.map((item) => (
        <div
          key={item}
          className={itemClasses}
        >
          <CheckCircle2
            size={18}
            className="text-secondary"
          />

          {item}
        </div>
      ))}
    </div>
  );
}