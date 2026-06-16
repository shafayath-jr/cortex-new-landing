import SmoothScroll from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";
import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";

import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CortexGrip",
  description: "Your domain and website — without the complexity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        figtree.variable,
        fraunces.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
