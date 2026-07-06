import { CheckCircle2 } from "lucide-react";

import { ABOUT } from "@/constants/about";

import {
  itemClasses,
  listClasses,
  paragraphClasses,
  titleClasses,
} from "./about.styles";

export default function AboutContent() {
  return (
    <>
      <h2 className={titleClasses}>
        {ABOUT.title}
      </h2>

      <p className={paragraphClasses}>
        {ABOUT.description}
      </p>

      <div className={listClasses}>
        <div className={itemClasses}>
          <CheckCircle2 className="text-secondary" />
          <span>
            <strong>Misión:</strong> {ABOUT.mission}
          </span>
        </div>

        <div className={itemClasses}>
          <CheckCircle2 className="text-secondary" />
          <span>
            <strong>Visión:</strong> {ABOUT.vision}
          </span>
        </div>

        {ABOUT.values.map((value) => (
          <div
            key={value}
            className={itemClasses}
          >
            <CheckCircle2 className="text-secondary" />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </>
  );
}