import { FAQSection } from "@/components/pages/Home/FAQSection";
import { Hero } from "@/components/pages/Home/Hero";
import { HowItWorks } from "@/components/pages/Home/HowItWorks";
import { NameChecker } from "@/components/pages/Home/NameChecker";
import { OurProducts } from "@/components/pages/Home/OurProducts";
import { Stats } from "@/components/pages/Home/Stats";
import { WhyCortex } from "@/components/pages/Home/WhyCortex";

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
    </main>
  );
}
