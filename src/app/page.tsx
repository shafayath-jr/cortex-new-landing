import { Hero } from "@/components/pages/Home/Hero";
import { HowItWorks } from "@/components/pages/Home/HowItWorks";
import { NameChecker } from "@/components/pages/Home/NameChecker";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <NameChecker />
        <HowItWorks />
        <div className="h-screen border-t border-[#F4EEE4]" />
        {/* Spacer before footer */}
      </main>
      <Footer />
    </div>
  );
}
