"use client";

import Bounded from "@/components/shared/Bounded";
import FlameIcon from "@/components/ui/icons/FlameIcon";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    id: "all-in-one",
    title: "All in one place",
    description:
      "Website, name, email and security from one account — no juggling.",
  },
  {
    id: "free-to-start",
    title: "Free to start",
    description:
      "Get started for free, upgrade when you need to grow your business.",
  },
  {
    id: "your-name",
    title: "Your name, everywhere",
    description:
      "Keep your brand consistent across all your channels and platforms.",
  },
  {
    id: "real-support",
    title: "Real support",
    description:
      "24/7 access to our dedicated customer support team whenever you need help.",
  },
];

export function WhyCortex() {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);
  const containerRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll progress is scaled by this factor so the last card becomes active
  // before the section fully scrolls past, leaving room to read it.
  const PROGRESS_SCALE = 1.25;

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const adjustedLatest = latest * PROGRESS_SCALE;
    let index = Math.floor(adjustedLatest * FEATURES.length);
    if (index >= FEATURES.length) index = FEATURES.length - 1;
    if (index < 0) index = 0;
    setActiveFeature(FEATURES[index].id);
  });

  // GSAP-style sequential entrance animations mapped to scroll progress
  const card1Opacity = useTransform(smoothProgress, [0.08, 0.25], [0, 1]);
  const card1Y = useTransform(smoothProgress, [0.08, 0.25], [120, 0]);
  const card1Visibility = useTransform(card1Opacity, (o) =>
    o === 0 ? "hidden" : "visible",
  );

  const card2Opacity = useTransform(smoothProgress, [0.28, 0.45], [0, 1]);
  const card2Y = useTransform(smoothProgress, [0.28, 0.45], [120, 0]);
  const card2Visibility = useTransform(card2Opacity, (o) =>
    o === 0 ? "hidden" : "visible",
  );

  const card3Opacity = useTransform(smoothProgress, [0.48, 0.65], [0, 1]);
  const card3Y = useTransform(smoothProgress, [0.48, 0.65], [120, 0]);
  const card3Visibility = useTransform(card3Opacity, (o) =>
    o === 0 ? "hidden" : "visible",
  );

  const getCardStyle = (index: number) => {
    if (!isDesktop) return undefined;
    if (index === 0) return undefined;
    if (index === 1)
      return { y: card1Y, opacity: card1Opacity, visibility: card1Visibility };
    if (index === 2)
      return { y: card2Y, opacity: card2Opacity, visibility: card2Visibility };
    if (index === 3)
      return { y: card3Y, opacity: card3Opacity, visibility: card3Visibility };
    return undefined;
  };

  // Clicking a card scrolls the window to the scroll position that corresponds
  // to that card, so the scroll-driven state and the click stay in sync instead
  // of fighting each other. On mobile (section not pinned) we just set state.
  const handleCardClick = (index: number, id: string) => {
    setActiveFeature(id);

    const el = containerRef.current;
    if (!el || window.innerWidth < 1024) return;

    const rect = el.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollable = el.offsetHeight - window.innerHeight;

    // Target the center of this card's active range so it sits comfortably active.
    const targetProgress = (index + 0.5) / (PROGRESS_SCALE * FEATURES.length);
    const clamped = Math.min(Math.max(targetProgress, 0), 1);

    window.scrollTo({
      top: containerTop + clamped * scrollable,
      behavior: "smooth",
    });
  };

  return (
    <section ref={containerRef} className="bg-white relative lg:h-[200vh]">
      <div className="lg:sticky lg:top-0 lg:min-h-screen">
        <Bounded as="div">
          {/* Header */}
          <div className="flex flex-col items-start text-left mb-10 lg:mb-6">
            {/* Badge */}
            <div className="font-figtree inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(90deg,_#F24E29_-87.66%,_rgba(242,78,41,0)_41.77%)] px-3.5 py-2">
              <span className="text-[#F24E29] font-figtree text-[18px] font-semibold">
                Why Cortexgrip
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-fraunces font-bold text-[#221C19] leading-13 text-4xl sm:text-5xl lg:text-[48px] tracking-normal my-4">
              Made for people,{" "}
              <span className="text-coral-500">not techies</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Left Side Image */}
            <div className="relative w-full aspect-4/5 sm:aspect-4/3 lg:aspect-auto lg:flex-1 max-w-142.75 lg:h-151 xl:h-155.5 2xl:h-163.5 rounded-[24px] overflow-hidden md:mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(242,78,41,0)_0%,#8C2D18_177.75%)] pointer-events-none z-10" />
              <Image
                src="/images/homePage/whyCortex.webp"
                alt="Why Cortexgrip"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Side Accordion/Cards */}
            <div className="flex flex-col gap-4 lg:flex-1 lg:justify-between justify-start w-full xl:max-w-[684px] 2xl:max-w-[700px]">
              {FEATURES.map((feature, index) => {
                const isActive = activeFeature === feature.id;
                return (
                  <motion.button
                    key={feature.id}
                    onClick={() => handleCardClick(index, feature.id)}
                    style={getCardStyle(index)}
                    className={cn(
                      "w-full text-left rounded-[24px] py-6 lg:py-7 2xl:py-8 px-6 lg:px-8 transition-colors duration-500 flex items-start gap-6 lg:gap-8 justify-between cursor-pointer border-none",
                      isActive
                        ? "bg-coral-500 shadow-lg"
                        : "bg-[#FAF6EF] hover:bg-[#F3EFE8]",
                    )}
                    layout
                    transition={{
                      layout: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
                    }}
                  >
                    <div className="flex flex-col">
                      <motion.h3
                        layout="position"
                        className={cn(
                          "font-fraunces text-[22px] lg:text-[24px] xl:text-[28px] font-bold",
                          isActive ? "text-[#FEF8F6]" : "text-[#221C19]",
                        )}
                      >
                        {feature.title}
                      </motion.h3>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            opacity: { duration: 0.3 },
                            height: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 font-figtree text-[15px] lg:text-[16px] xl:text-[17px] text-[#FEF8F6] leading-7">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                    <div
                      className={cn(
                        "shrink-0 size-14 lg:size-16 xl:size-20 rounded-[14px] flex items-center justify-center transition-colors duration-500",
                        isActive ? "bg-[#FDECE633]" : "bg-[#FBF1E2]",
                      )}
                    >
                      <FlameIcon isActive={isActive} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </Bounded>
      </div>
    </section>
  );
}
