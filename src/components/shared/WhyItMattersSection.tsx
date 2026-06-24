"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import QuickLoadIcon from "@/components/ui/icons/QuickLoadIcon";
import ShieldIcon from "@/components/ui/icons/ShieldIcon";
import StarIcon from "@/components/ui/icons/StarIcon";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface WhyItMattersSectionProps {
  badgeText?: string;
  title: React.ReactNode;
  card1Title: string;
  card1Description: React.ReactNode;
  card2Title: string;
  card2Description: React.ReactNode;
  card3Title: string;
  card3Description: React.ReactNode;
  card4Title: string;
  card4Description: React.ReactNode;
  leftColumnReverse?: boolean;
}

export function WhyItMattersSection({
  badgeText = "Why it matters",
  title,
  card1Title,
  card1Description,
  card2Title,
  card2Description,
  card3Title,
  card3Description,
  card4Title,
  card4Description,
  leftColumnReverse = false,
}: WhyItMattersSectionProps) {
  const [globeData, setGlobeData] = useState<any>(null);
  const [loadData, setLoadData] = useState<any>(null);

  useEffect(() => {
    import("../../../public/lottie/hosting/internetBrowserAnimation.json").then(
      (mod) => {
        setGlobeData(mod.default);
      },
    );
    import("../../../public/lottie/hosting/loadingRocketAnimation.json").then(
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
          <Badge text={badgeText} className="w-fit" />
          <h2
            className="text-center font-fraunces font-bold text-[#221C19] leading-12 md:leading-13 text-4xl sm:text-5xl lg:text-[48px] tracking-normal"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            {title}
          </h2>
        </div>

        {/* Bento grid */}
        <div className="flex flex-col gap-6 2xl:gap-12 xl:flex-row xl:justify-center">
          {/* Left column */}
          <div
            className={`flex flex-col gap-6 justify-between flex-1 ${leftColumnReverse ? "flex-col-reverse" : ""}`}
          >
            {/* Card 1 — wide card */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 hover:-translate-y-2 transition-transform duration-500">
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
                      {card1Title}
                    </h3>
                    <p className="xl:max-w-109.75 font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                      {card1Description}
                    </p>
                  </div>
                </div>
                {/* Browser + rocket loading animation */}
                <div className="flex-1 max-w-[400px] min-h-[160px] mx-auto flex items-center justify-center scale-[1.25] xl:scale-[1.3]">
                  {loadData ? (
                    <Lottie animationData={loadData} loop={true} />
                  ) : (
                    <div className="size-full" />
                  )}
                </div>
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Card 2 */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6 hover:translate-y-[-8px] transition-transform duration-500">
                <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                  <ShieldIcon className="size-8" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    {card2Title}
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    {card2Description}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                  <StarIcon className="size-8" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    {card3Title}
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    {card3Description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — Right column */}
          <div className="flex-1 flex flex-col gap-6 overflow-hidden rounded-2xl bg-white p-6 lg:shrink-0 xl:max-w-127 2xl:max-w-full hover:-translate-y-2 transition-transform duration-500">
            <div className="flex flex-col gap-7">
              <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                <StarIcon className="size-8" />
              </div>
              <div className="flex flex-col gap-4">
                <h3
                  className="font-fraunces text-[32px] font-bold leading-normal text-[#221c19]"
                  style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  {card4Title}
                </h3>
                <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                  {card4Description}
                </p>
              </div>
            </div>
            {/* Decorative Browser Globe Animation */}
            <div className="h-68 relative flex items-center justify-center">
              {globeData ? (
                <Lottie
                  animationData={globeData}
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
