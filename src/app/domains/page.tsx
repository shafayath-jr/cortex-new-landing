import { DomainsHero } from "@/components/pages/Domains/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domains — CortexGrip",
  description:
    "Find and register the perfect domain name. Check domain availability and matching social handles in one search.",
};

export default function DomainsPage() {
  return <DomainsHero />;
}
