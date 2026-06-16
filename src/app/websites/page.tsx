import { CtaCard } from "@/components/pages/WeavexBuilder/CtaCard";
import { FaqSection } from "@/components/pages/WeavexBuilder/FaqSection";
import { FeatureHighlights } from "@/components/pages/WeavexBuilder/FeatureHighlights";
import { Hero } from "@/components/pages/WeavexBuilder/Hero";
import { HowItWorks } from "@/components/pages/WeavexBuilder/HowItWorks";
import { TemplateTeaser } from "@/components/pages/WeavexBuilder/TemplateTeaser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites — CortexGrip",
  description:
    "Build beautiful websites in minutes. Drag-and-drop builder, AI-powered design, 500+ templates. Start free — no credit card needed.",
};

export default function WeavexWebsiteBuilderPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeatureHighlights />
      <TemplateTeaser />
      <FaqSection />
      <CtaCard />
    </>
  );
}
