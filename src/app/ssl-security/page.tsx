import { SSLHero } from "@/components/pages/SSL-Security/Hero";
import { Security } from "@/components/pages/SSL-Security/Security";
import { CtaCard } from "@/components/shared/CtaCard";
import { TwoColumnLottieSection } from "@/components/shared/TwoColumnLottieSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSL Security — CortexGrip",
  description:
    "Protect your website and customer data with CortexGrip SSL Security. Enable strong encryption, secure online transactions, and build trust with industry-standard SSL certificates.",
};

export default function SSLSecurityPage() {
  return (
    <main>
      <SSLHero />
      <TwoColumnLottieSection
        badgeText="What does SSL actually do?"
        title={
          <>
            What does <span className="text-coral-500">SSL actually do?</span>
          </>
        }
        description={`It scrambles the information that passes between your website and your visitors, so nobody can snoop on it. It also shows "https" and a padlock in the browser — a signal people trust.`}
      />
      <Security />
      <CtaCard
        heading="Get a secure site, free"
        subtext="hello@yourbusiness.com is waiting for you."
        ctaLabel="Build for free"
        ctaHref="#"
      />
    </main>
  );
}
