import {
  Badge,
  Button,
  CheckList,
  Heading,
} from "@/components/ui";

import { ABOUT } from "@/constants/about";

import {
  textClasses,
} from "./about.styles";

export default function AboutContent() {
  return (
    <>
  <Badge>{ABOUT.badge}</Badge>

  <div className="mt-4">
    <Heading level={2}>
      {ABOUT.title}
    </Heading>
  </div>

  <div className="mt-6">
    <p className={textClasses}>
      {ABOUT.description}
    </p>
  </div>

  <div className="mt-8">
    <CheckList items={ABOUT.values} />
  </div>

  <div className="mt-10">
    <Button>
      Conoce nuestra historia
    </Button>
  </div>
</>
  );
}