"use client";

import Bounded from "@/components/shared/Bounded";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function WebHostingReality() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <Bounded className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-35">
        {/* Left: copy */}
        <div className="flex flex-col gap-4 lg:max-w-[595px]">
          <span className="inline-flex w-fit items-center rounded-[28px] bg-gradient-to-r from-coral-500/15 to-coral-500/0 px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
            Why it matters
          </span>

          <h2
            className="font-fraunces text-[40px] font-bold leading-[1.08] text-[#2e0d05] sm:text-[48px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            What is <span className="text-coral-500">web hosting, </span>
            really?
          </h2>

          <p className="font-figtree text-[19px] leading-[1.5] text-[#6b5f57]">
            Your website&apos;s files have to live somewhere that&apos;s always
            switched on, so people can visit any time. That&apos;s hosting. We
            take care of it so you don&apos;t have to.
          </p>
        </div>

        {/* Right: Lottie */}
        <div className="shrink-0 lg:size-[507px]">
          <DotLottieReact
            src="/lottie/hosting/cybersecurity system illustration.json"
            loop
            autoplay
          />
        </div>
      </Bounded>
    </section>
  );
}
