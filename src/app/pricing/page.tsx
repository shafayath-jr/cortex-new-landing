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
        heading="Start free"
        headingHighlight="today"
        subtext="No credit card needed. Build and publish for free, upgrade when you're ready."
        ctaLabel="Get Started for free"
        ctaHref="#"
      />
    </main>
  );
}
