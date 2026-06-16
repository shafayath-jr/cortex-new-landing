import { HostingHero } from "@/components/pages/Hosting/Hero";
import { HostingWhyItMatters } from "@/components/pages/Hosting/WhyItMatters";
import { WebHostingReality } from "@/components/pages/Hosting/WebHostingReality";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Hosting — CortexGrip",
  description:
    "Fast, secure, always-online hosting. The behind-the-scenes power that keeps your website quick and available — without you having to think about it.",
};

export default function HostingPage() {
  return (
    <>
      <HostingHero />
      <HostingWhyItMatters />
      <WebHostingReality />
    </>
  );
}
