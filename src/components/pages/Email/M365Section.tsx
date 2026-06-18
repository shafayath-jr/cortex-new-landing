"use client";

import { TwoColumnLottieSection } from "@/components/shared/TwoColumnLottieSection";

export function M365Section() {
  return (
    <TwoColumnLottieSection
      badgeText="Microsoft 365 option"
      title={
        <>
          Want the full <span className="text-coral-500">Microsoft 365 suite?</span>
        </>
      }
      description="Add Microsoft 365 to get your email together with Word, Excel, Teams and more — licensed and set up through us, so it's one bill and one place to manage."
      imageScaleClass="shrink-0"
    />
  );
}
