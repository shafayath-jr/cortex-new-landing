"use client";

import Lottie from "lottie-react";
import cyberSecurityAnimation from "../../../../public/lottie/hosting/cybersecurity system illustration.json";
export function M365Section() {
  return (
    <section className="w-full bg-white px-6 py-[80px] sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-[140px]">
        {/* Left: copy */}
        <div className="flex flex-col gap-4 lg:max-w-[595px]">
          <span className="inline-flex w-fit items-center rounded-[28px] bg-gradient-to-r from-coral-500/15 to-coral-500/0 px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
            Microsoft 365 option
          </span>

          <h2
            className="font-fraunces text-[40px] font-bold leading-[1.08] text-[#2e0d05] sm:text-[48px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Want the full{" "}
            <span className="text-coral-500">Microsoft 365 suite?</span>
          </h2>

          <p className="font-figtree text-[19px] leading-[1.5] text-[#6b5f57]">
            Add Microsoft 365 to get your email together with Word, Excel, Teams
            and more — licensed and set up through us, so it&apos;s one bill and
            one place to manage.
          </p>
        </div>

        {/* Right: Lottie */}
        <Lottie
          animationData={cyberSecurityAnimation}
          loop={true}
          autoPlay={true}
          className="shrink-0 lg:size-[507px]"
        />
      </div>
    </section>
  );
}
