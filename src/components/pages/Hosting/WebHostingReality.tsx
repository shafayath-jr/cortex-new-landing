"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export function WebHostingReality() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    import("../../../../public/lottie/hosting/cybersecurity system illustration.json").then(
      (mod) => {
        setAnimationData(mod.default);
      },
    );
  }, []);

  return (
    <section className="w-full bg-white relative overflow-hidden">
      <Bounded className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between 2xl:justify-evenly lg:items-center lg:gap-35">
        {/* Left: copy */}
        <div className="flex flex-col gap-4 lg:max-w-148.75 2xl:max-w-175 flex-1">
          <Badge text="Why it matters" className="w-fit" />
          <h2
            className="font-fraunces text-[40px] font-bold leading-[1.08] text-[#2e0d05] sm:text-[48px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            What is <span className="text-coral-500">web hosting, </span>
            really?
          </h2>

          <p className="font-figtree text-[19px] leading-normal text-[#6b5f57]">
            Your website&apos;s files have to live somewhere that&apos;s always
            switched on, so people can visit any time. That&apos;s hosting. We
            take care of it so you don&apos;t have to.
          </p>
        </div>

        {/* Right: Lottie */}
        <div className="flex-1 max-w-[507px] min-h-[350px] mx-auto flex items-center justify-center scale-[1.1]">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          ) : (
            <div className="size-full" />
          )}
        </div>
      </Bounded>
    </section>
  );
}
