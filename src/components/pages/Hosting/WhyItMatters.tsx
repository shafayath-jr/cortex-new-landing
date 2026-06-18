"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import QuickLoadIcon from "@/components/ui/icons/QuickLoadIcon";
import ShieldIcon from "@/components/ui/icons/ShieldIcon";
import StarIcon from "@/components/ui/icons/StarIcon";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export function HostingWhyItMatters() {
  const [globeData, setGlobeData] = useState<any>(null);
  const [loadData, setLoadData] = useState<any>(null);

  useEffect(() => {
    import("../../../../public/lottie/hosting/internetBrowserAnimation.json").then(
      (mod) => {
        setGlobeData(mod.default);
      },
    );
    import("../../../../public/lottie/hosting/loadingRocketAnimation.json").then(
      (mod) => {
        setLoadData(mod.default);
      },
    );
  }, []);
  return (
    <section className="w-full bg-[#fef8f6] relative overflow-hidden">
      <Bounded as="div" className="">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <Badge text="Why it matters" className="w-fit" />
          <h2
            className="text-center font-fraunces text-[40px] font-bold leading-normal text-[#221c19] sm:text-[48px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Built to be fast,{" "}
            <span className="text-coral-500">secure and always on</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="flex flex-col gap-6 2xl:gap-12 xl:flex-row xl:justify-center">
          {/* Left column */}
          <div className="flex flex-col gap-6 justify-between flex-1">
            {/* Quick to load — wide card */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-6">
              <div className="flex gap-7 flex-col lg:flex-row">
                <div className="flex-2 flex flex-col gap-7 xl:max-w-110">
                  <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                    <QuickLoadIcon className="size-8" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                      style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                    >
                      Quick to load
                    </h3>
                    <p className="max-w-109.75 font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                      Fast hosting keeps visitors happy and helps you show up in
                      search results.
                    </p>
                  </div>
                </div>
                {/* Browser + rocket loading animation */}
                <div className="flex-1 max-w-[400px] min-h-[160px] mx-auto flex items-center justify-center scale-[1.25] xl:scale-[1.3]">
                  {loadData ? (
                    <Lottie
                      animationData={loadData}
                      loop={true}
                      autoplay={true}
                    />
                  ) : (
                    <div className="size-full" />
                  )}
                </div>
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Secure by default */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6">
                <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                  <ShieldIcon className="size-8" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    Secure by default
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    Free SSL and automatic backups included with every plan.
                  </p>
                </div>
              </div>

              {/* Simple to manage */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6">
                <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                  <StarIcon className="size-8" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    Simple to manage
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    One friendly dashboard — no server knowledge needed. Ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Always on tall card */}
          <div className="flex-1 flex flex-col gap-6 overflow-hidden rounded-2xl bg-white p-6 lg:shrink-0 xl:max-w-127 2xl:max-w-full">
            <div className="flex flex-col gap-7">
              <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                <StarIcon className="size-8" />
              </div>
              <div className="flex flex-col gap-4">
                <h3
                  className="font-fraunces text-[32px] font-bold leading-normal text-[#221c19]"
                  style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  Always on
                </h3>
                <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                  99.9% uptime, so your site is there whenever someone looks for
                  you.
                </p>
              </div>
            </div>
            {/* Decorative Browser Globe Animation */}
            <div className="h-68 relative flex items-center justify-center">
              {globeData ? (
                <Lottie
                  animationData={globeData}
                  autoplay={true}
                  loop={true}
                  className="absolute inset-0 scale-[1.5] 2xl:translate-y-10 2xl:scale-[1.6]"
                />
              ) : (
                <div className="size-full" />
              )}
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
