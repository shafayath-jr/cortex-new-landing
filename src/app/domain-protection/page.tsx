import { DomainProtectionHero } from "@/components/pages/Domain-Protection/DomainProtectionHero";
import { CtaCard } from "@/components/shared/CtaCard";
import { WhyItMattersSection } from "@/components/shared/WhyItMattersSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Protection — CortexGrip",
  description:
    "Secure your online presence with CortexGrip Domain Protection. Safeguard your domain from unauthorized access, prevent hijacking, and ensure uninterrupted service with our comprehensive domain security solutions.",
};

export default function DomainProtectionPage() {
  return (
    <main>
      <DomainProtectionHero />
      <WhyItMattersSection
        badgeText="Why domain protection matters"
        title="Keep your domain safe, and your business online"
        card1Title="Never lose it by accident"
        card1Description={
          <>
            <strong className="font-bold text-[#6B5F57]">
              you@yourbusiness.com
            </strong>{" "}
            beats a generic free address every time.
          </>
        }
        card2Title="Privacy"
        card2Description="Keep your personal name, address and number off the public record."
        card3Title="Lock against hijacking"
        card3Description="Extra checks stop anyone moving your name without your say-so."
        card4Title="Recovery help"
        card4Description="If something goes wrong, we help you put it right."
        leftColumnReverse={true}
      />
      <CtaCard
        heading="Protect what's"
        headingHighlight="yours"
        subtext="Your domain is worth protecting. Add protection in one click."
        ctaLabel="Add domain protection"
        ctaHref="/domain-protection"
      />
    </main>
  );
}
