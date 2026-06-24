"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface TwoColumnLottieSectionProps {
  badgeText?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  loadAnimation?: () => Promise<{ default: any }>;
  bgClass?: string;
  imageScaleClass?: string;
}

export function TwoColumnLottieSection({
  badgeText,
  title,
  description,
  loadAnimation = () =>
    import("../../../public/lottie/hosting/cybersecurity system illustration.json"),
  bgClass = "w-full bg-white relative overflow-hidden",
  imageScaleClass = "scale-[1.1]",
}: TwoColumnLottieSectionProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    loadAnimation().then((mod) => {
      setAnimationData(mod.default);
    });
  }, [loadAnimation]);

  return (
    <section className={bgClass}>
      <Bounded className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between 2xl:justify-evenly lg:items-center lg:gap-35">
        {/* Left: copy */}
        <div className="flex flex-col gap-4 lg:max-w-148.75 2xl:max-w-175 flex-1">
          {badgeText && <Badge text={badgeText} className="w-fit" />}
          <h2
            className="font-fraunces font-bold text-[#221C19] leading-12 md:leading-13 text-4xl sm:text-5xl lg:text-[48px] tracking-normal"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            {title}
          </h2>

          <p className="font-figtree text-[19px] leading-normal text-[#6b5f57]">
            {description}
          </p>
        </div>

        {/* Right: Lottie */}
        <div
          className={`flex-1 max-w-[507px] min-h-[350px] mx-auto flex items-center justify-center ${imageScaleClass}`}
        >
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
