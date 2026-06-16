import { FAQSection } from "@/components/pages/Home/FAQSection";
import { Hero } from "@/components/pages/Home/Hero";
import { HowItWorks } from "@/components/pages/Home/HowItWorks";
import { NameChecker } from "@/components/pages/Home/NameChecker";
import { OurProducts } from "@/components/pages/Home/OurProducts";
import { Stats } from "@/components/pages/Home/Stats";
import { WhyCortex } from "@/components/pages/Home/WhyCortex";
import { CtaCard } from "@/components/shared/CtaCard";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <NameChecker />
      <OurProducts />
      <HowItWorks />
      <WhyCortex />
      <Stats />
      <FAQSection />
      <CtaCard
        heading="Let's get your"
        headingHighlight="idea online"
        subtext="Build it free today — no credit card, no code, no catch."
        ctaLabel="Build my website free"
        ctaHref="#"
      />
    </main>
  );
}
