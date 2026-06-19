import { SolutionsSection } from "@/components/pages/Solutions/SolutionsSection";
import { CtaCard } from "@/components/shared/CtaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — CortexGrip",
  description: "Websites and tools built for whatever you're starting.",
};

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      <SolutionsSection />
      <CtaCard
        heading="Your website is"
        headingHighlight="one sentence away"
        subtext="No credit card. No code. No catch."
        ctaLabel="Build my website free"
        ctaHref="/builder"
      />
    </main>
  );
}
