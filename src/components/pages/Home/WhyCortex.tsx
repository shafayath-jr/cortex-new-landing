"use client";

import Bounded from "@/components/shared/Bounded";
import FlameIcon from "@/components/ui/icons/FlameIcon";
import { cn } from "@/lib/utils";
import {
  cubicBezier,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/shared/Badge";

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

// Easing shared by the scroll-linked transforms and the first-load reveal:
// expo-out — quick to commit, then a long, gentle settle.
const EASE = cubicBezier(0.16, 1, 0.3, 1);

// First-load reveal: a soft, staggered fade-up that plays once when the section
// scrolls into view. The header items stagger in first, then the image and the
// first card settle just after — so arriving at the section feels composed
// rather than everything appearing at once.
const revealContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// The image and the first card share this exact variant so they reveal
// identically. They're driven by one parent trigger (revealGroup) rather than
// each watching the viewport on its own — otherwise the short card crosses its
// in-view threshold before the tall image does, and the card always appears
// first. One trigger means both start on the same frame.
const revealMedia = {
  hidden: { opacity: 0, y: 32, scale: 1.04 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.1 },
  },
};

// Parent orchestrator: holds no styles of its own, it just broadcasts the
// hidden/visible label to its descendants (the image and the first card) at a
// single moment so their reveals are synchronized.
const revealGroup = {
  hidden: {},
  visible: {},
};

export function WhyCortex() {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);
  const containerRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const hasClickedOverride = useRef(false);
  const lastScrollY = useRef(0);

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
    stiffness: 60,
    damping: 24,
    mass: 0.8,
    restDelta: 0.0001,
  });

  // Scroll progress is scaled by this factor so the last card becomes active
  // before the section fully scrolls past, leaving room to read it.
  const PROGRESS_SCALE = 1.25;

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    // If the user clicked a card, pause scroll-driven active feature updates
    // until they scroll the page by more than a minor delta (10px).
    if (hasClickedOverride.current) {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastScrollY.current) > 10) {
        hasClickedOverride.current = false;
      } else {
        return;
      }
    }

    const adjustedLatest = latest * PROGRESS_SCALE;
    let index = Math.floor(adjustedLatest * FEATURES.length);
    if (index >= FEATURES.length) index = FEATURES.length - 1;
    if (index < 0) index = 0;

    setActiveFeature(FEATURES[index].id);
  });

  // Each card fades up while easing back to full scale, settling into place
  // just as it becomes the active card. Opacity leads slightly so the card is
  // already visible by the time it finishes rising — a softer, more natural
  // arrival than a hard pop-in. Transform + opacity only, so it stays composited
  // and buttery during the scroll.
  const card1Opacity = useTransform(smoothProgress, [0.06, 0.22], [0, 1]);
  const card1Y = useTransform(smoothProgress, [0.06, 0.24], [64, 0]);
  const card1Scale = useTransform(smoothProgress, [0.06, 0.24], [0.96, 1]);
  const card1Visibility = useTransform(card1Opacity, (o) =>
    o === 0 ? "hidden" : "visible",
  );

  const card2Opacity = useTransform(smoothProgress, [0.26, 0.42], [0, 1]);
  const card2Y = useTransform(smoothProgress, [0.26, 0.44], [64, 0]);
  const card2Scale = useTransform(smoothProgress, [0.26, 0.44], [0.96, 1]);
  const card2Visibility = useTransform(card2Opacity, (o) =>
    o === 0 ? "hidden" : "visible",
  );

  const card3Opacity = useTransform(smoothProgress, [0.46, 0.62], [0, 1]);
  const card3Y = useTransform(smoothProgress, [0.46, 0.64], [64, 0]);
  const card3Scale = useTransform(smoothProgress, [0.46, 0.64], [0.96, 1]);
  const card3Visibility = useTransform(card3Opacity, (o) =>
    o === 0 ? "hidden" : "visible",
  );

  const getCardStyle = (index: number) => {
    if (!isDesktop) return undefined;
    if (index === 0) return undefined;
    if (index === 1)
      return {
        y: card1Y,
        scale: card1Scale,
        opacity: card1Opacity,
        visibility: card1Visibility,
      };
    if (index === 2)
      return {
        y: card2Y,
        scale: card2Scale,
        opacity: card2Opacity,
        visibility: card2Visibility,
      };
    if (index === 3)
      return {
        y: card3Y,
        scale: card3Scale,
        opacity: card3Opacity,
        visibility: card3Visibility,
      };
    return undefined;
  };

  const isCardVisible = (index: number) => {
    if (!isDesktop) return true;
    if (index === 0) return true;
    const progressVal = smoothProgress.get();
    if (index === 1) return progressVal >= 0.06;
    if (index === 2) return progressVal >= 0.26;
    if (index === 3) return progressVal >= 0.46;
    return false;
  };

  // Clicking a card makes it active directly without scrolling, as long as it's visible/loaded.
  const handleCardClick = (index: number, id: string) => {
    if (!isCardVisible(index)) return;

    setActiveFeature(id);
    hasClickedOverride.current = true;
    lastScrollY.current = window.scrollY;
  };

  return (
    <section ref={containerRef} className="bg-white relative lg:h-[200vh]">
      <div className="lg:sticky lg:top-0 lg:min-h-screen">
        <Bounded as="div">
          {/* Header */}
          <motion.div
            className="flex flex-col items-start text-left mb-10 lg:mb-6"
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {/* Badge */}
            <motion.div variants={revealItem}>
              <Badge text="Why Cortexgrip" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={revealItem}
              className="font-fraunces font-bold text-[#221C19] leading-13 text-4xl sm:text-5xl lg:text-[48px] tracking-normal my-4"
            >
              Made for people,{" "}
              <span className="text-coral-500">not techies</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-8 items-start justify-center"
            variants={revealGroup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Side Image */}
            <motion.div
              className="relative w-full aspect-4/5 sm:aspect-4/3 lg:aspect-auto lg:flex-1 max-w-142.75 lg:h-151 xl:h-155.5 2xl:h-163.5 rounded-[24px] overflow-hidden md:mx-auto lg:mx-0"
              variants={revealMedia}
            >
              <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(242,78,41,0)_0%,#8C2D18_177.75%)] pointer-events-none z-10" />
              <Image
                src="/images/homePage/whyCortex.webp"
                alt="Why Cortexgrip"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Right Side Accordion/Cards */}
            <div className="flex flex-col gap-4 lg:flex-1 lg:justify-between justify-start w-full xl:max-w-[684px] 2xl:max-w-[700px]">
              {FEATURES.map((feature, index) => {
                const isActive = activeFeature === feature.id;
                return (
                  <motion.button
                    key={feature.id}
                    onClick={() => handleCardClick(index, feature.id)}
                    style={getCardStyle(index)}
                    {...(index === 0
                      ? {
                          // No initial/whileInView of its own — it inherits the
                          // hidden/visible label from the row orchestrator so it
                          // reveals in lockstep with the image.
                          variants: revealMedia,
                        }
                      : {})}
                    className={cn(
                      "w-full text-left rounded-[24px] py-6 lg:py-7 2xl:py-8 px-6 lg:px-8 transition-colors duration-500 flex items-start gap-6 lg:gap-8 justify-between cursor-pointer border-none",
                      isActive
                        ? "bg-coral-500 shadow-lg"
                        : "bg-[#FAF6EF] hover:bg-[#F3EFE8]",
                    )}
                    layout
                    transition={{
                      layout: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
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
                          initial={{ opacity: 0, height: 0, y: -6 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -6 }}
                          transition={{
                            height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                            opacity: {
                              duration: 0.28,
                              ease: [0.16, 1, 0.3, 1],
                              delay: 0.02,
                            },
                            y: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
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
          </motion.div>
        </Bounded>
      </div>
    </section>
  );
}
