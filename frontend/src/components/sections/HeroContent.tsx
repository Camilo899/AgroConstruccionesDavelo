import { Badge, StatCard, TrustBar } from "@/components/ui";

import { HERO_CONTENT } from "@/constants/hero";
import { HERO_STATS } from "@/constants/stats";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <>
      <Badge>{HERO_CONTENT.badge}</Badge>

      <h1 className="mt-6 font-heading text-5xl font-bold leading-tight lg:text-6xl">
        {HERO_CONTENT.title}
      </h1>

      <p className="mt-6 max-w-xl text-lg text-text-light">
        {HERO_CONTENT.description}
      </p>

      <HeroButtons />

      <TrustBar items={HERO_CONTENT.trustItems} />

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {HERO_STATS.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </>
  );
}