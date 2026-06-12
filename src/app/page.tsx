import { Hero } from "@/components/pages/Home/Hero";
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
      </main>
      <Footer />
    </div>
  );
}
