import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/pages/Home/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
    </div>
  );
}


