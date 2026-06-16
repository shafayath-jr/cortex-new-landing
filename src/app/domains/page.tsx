import { DomainsHero } from "@/components/pages/Domains/Hero";
import { WhyItMatters } from "@/components/pages/Domains/WhyItMatters";
import { EndingsStrip } from "@/components/pages/Domains/EndingsStrip";
import { CtaCard } from "@/components/shared/CtaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domains — CortexGrip",
  description:
    "Find and register the perfect domain name. Check domain availability and matching social handles in one search.",
};

export default function DomainsPage() {
  return (
    <>
      <DomainsHero />
      <WhyItMatters />
      <EndingsStrip />
      <CtaCard
        heading="Claim your name before"
        headingHighlight="someone else does"
        subtext="One search. Your domain and social handles together."
        ctaLabel="Search your name"
      />
    </>
  );
}
