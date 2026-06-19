import { PricingFAQ } from "@/components/pages/Pricing/PricingFAQ";
import { PricingFeatures } from "@/components/pages/Pricing/PricingFeatures";
import { PricingSection } from "@/components/pages/Pricing/PricingSection";
import { CtaCard } from "@/components/shared/CtaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — CortexGrip",
  description:
    "Honest, transparent pricing for your domains, websites, and business growing needs.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingSection />
      <PricingFeatures />
      <PricingFAQ />
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
