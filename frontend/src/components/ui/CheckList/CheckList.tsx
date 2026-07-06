import { CheckCircle2 } from "lucide-react";

import {
  iconClasses,
  itemClasses,
  listClasses,
} from "./check-list.styles";

import type { CheckListProps } from "./check-list.types";

export default function CheckList({
  items,
}: CheckListProps) {
  return (
    <ul className={listClasses}>
      {items.map((item) => (
        <li
          key={item}
          className={itemClasses}
        >
          <CheckCircle2
            size={20}
            className={iconClasses}
          />

          {item}
        </li>
      ))}
    </ul>
  );
}