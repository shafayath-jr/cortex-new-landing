import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import { PageFooter } from "@/components/pages/WeavexBuilder/PageFooter";
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
      <body className="min-h-full flex flex-col bg-[#fef8f6]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <PageFooter />
      </body>
    </html>
  );
}
