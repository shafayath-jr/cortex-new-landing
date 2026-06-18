"use client";

import { TwoColumnLottieSection } from "@/components/shared/TwoColumnLottieSection";

export function WebHostingReality() {
  return (
    <TwoColumnLottieSection
      badgeText="Why it matters"
      title={
        <>
          What is <span className="text-coral-500">web hosting, </span>
          really?
        </>
      }
      description="Your website's files have to live somewhere that's always switched on, so people can visit any time. That's hosting. We take care of it so you don't have to."
    />
  );
}
