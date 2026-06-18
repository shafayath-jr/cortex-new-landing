import { EmailHero } from "@/components/pages/Email/Hero";
import { M365Section } from "@/components/pages/Email/M365Section";
import { EmailWhyItMatters } from "@/components/pages/Email/WhyItMatters";
import { WhiteCtaCard } from "@/components/shared/WhiteCtaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Email — CortexGrip",
  description:
    "Get a professional email address at your own domain. Look the part from your very first message.",
};

export default function EmailPage() {
  return (
    <>
      <EmailHero />
      <EmailWhyItMatters />
      <M365Section />
      <WhiteCtaCard
        heading="Get email at your own name"
        subtext="hello@yourbusiness.com is waiting for you."
        ctaLabel="See Email plans"
        ctaHref="/plans"
      />
    </>
  );
}
