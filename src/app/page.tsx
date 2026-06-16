import { Hero } from "@/components/pages/Home/Hero";
import { HowItWorks } from "@/components/pages/Home/HowItWorks";
import { NameChecker } from "@/components/pages/Home/NameChecker";
import { OurProducts } from "@/components/pages/Home/OurProducts";
import { Stats } from "@/components/pages/Home/Stats";
import { WhyCortex } from "@/components/pages/Home/WhyCortex";
import { FAQSection } from "@/components/pages/Home/FAQSection";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <NameChecker />
        <OurProducts />
        <HowItWorks />
        <WhyCortex />
        <Stats />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
