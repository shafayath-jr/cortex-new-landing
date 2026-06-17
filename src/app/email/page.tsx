import { EmailHero } from "@/components/pages/Email/Hero";
import { EmailWhyItMatters } from "@/components/pages/Email/WhyItMatters";
import { M365Section } from "@/components/pages/Email/M365Section";
import { CtaCard } from "@/components/shared/CtaCard";
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
      <CtaCard
        heading="Your professional email is"
        headingHighlight="one click away"
        subtext="No credit card. No setup fees. Just your name at your domain."
        ctaLabel="Get Professional Email"
      />
    </>
  );
}
