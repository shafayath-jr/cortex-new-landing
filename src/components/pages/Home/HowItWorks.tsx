"use client";

import Bounded from "@/components/shared/Bounded";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Badge } from "@/components/shared/Badge";

const STEPS = [
  {
    step: "1st Step",
    num: "01",
    title: "Describe it",
    desc: "Tell Cortex what you do. It builds your first website for you — words, layout and all.",
  },
  {
    step: "2nd Step",
    num: "02",
    title: "Make it yours",
    desc: "Swap the photos, tweak the words, pick your name. No code, nothing to break.",
  },
  {
    step: "3rd Step",
    num: "03",
    title: "Go live",
    desc: "Hit publish. Your site is live straight away, free, with security built in.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  // "end end" → progress 0–1 spans exactly the pinned phase (section height
  // minus one viewport), so the whole range is usable for the animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Spring-smoothed progress: glides between discrete wheel ticks
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const card2Y = useTransform(progress, [0.15, 0.42], [400, 0]);
  const card2Opacity = useTransform(progress, [0.15, 0.32], [0, 1]);
  const card3Y = useTransform(progress, [0.55, 0.82], [400, 0]);
  const card3Opacity = useTransform(progress, [0.55, 0.72], [0, 1]);

  // Line 1 fills as card 2 enters; line 2 fills as card 3 enters
  const line1ScaleY = useTransform(progress, [0.08, 0.42], [0, 1]);
  const line2ScaleY = useTransform(progress, [0.48, 0.82], [0, 1]);
  const lineScales = [line1ScaleY, line2ScaleY];

  return (
    // 180vh = 1 viewport pin + 0.8 viewports of scroll to drive the animation
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FEFDFB] min-h-[180vh]"
    >
      <Bounded
        as="div"
        className="sticky top-0 min-h-screen flex flex-col justify-center"
      >
        {/* Title — compact so 3 cards fit alongside it inside the pinned frame */}
        <div className="w-full flex flex-col items-center shrink-0 pt-4">
          <Badge text="How it works" className="py-1.5" />
          <h2 className="font-fraunces font-bold text-center text-[#221C19] leading-tight text-3xl sm:text-4xl lg:text-[40px] tracking-normal mt-3">
            Online in <span className="text-coral-500">three easy steps</span>
          </h2>
        </div>

        {/* Cards area */}
        <div className="w-full max-w-218.5 mx-auto px-4 shrink-0 mt-6 sm:mt-8 overflow-hidden py-4 -my-4">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            {STEPS.map((item, idx) => (
              <motion.div
                key={item.num}
                className="flex gap-3 sm:gap-6 lg:gap-10 will-change-transform"
                initial={idx === 0 ? { opacity: 0, y: 30 } : undefined}
                whileInView={idx === 0 ? { opacity: 1, y: 0 } : undefined}
                viewport={idx === 0 ? { once: true, amount: 0.4 } : undefined}
                transition={idx === 0 ? { duration: 0.5 } : undefined}
                style={
                  idx === 1
                    ? { y: card2Y, opacity: card2Opacity }
                    : idx === 2
                      ? { y: card3Y, opacity: card3Opacity }
                      : undefined
                }
              >
                {/* Number column — bg-white masks the line behind the glyph */}
                <div className="relative shrink-0 flex flex-col items-center bg-white w-14 sm:w-20 lg:w-28">
                  <span className="font-fraunces font-bold select-none leading-none text-4xl sm:text-5xl lg:text-7xl xl:text-[102px] bg-[linear-gradient(180deg,#F24E29_-63.38%,#FFF_125.35%)] bg-clip-text text-transparent">
                    {item.num}
                  </span>

                  {/* Line segment between this step and the next; top tracks the
                      glyph height per breakpoint, bottom spans the stack gap */}
                  {idx < STEPS.length - 1 && (
                    <div className="absolute top-10 sm:top-13 lg:top-16 xl:top-24 -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-0.5 rounded-full bg-[#F24E29]/10">
                      <motion.div
                        className="absolute inset-0 bg-[#F24E29] origin-top rounded-full"
                        style={{ scaleY: lineScales[idx] }}
                      />
                    </div>
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 flex flex-col p-5 sm:p-6 bg-[#FAF6EF] rounded-[16px] cursor-default">
                  <span className="border border-[#F24E29] py-1 px-3 rounded-[8px] font-figtree text-[13px] sm:text-[14px] font-semibold text-coral-500 w-fit">
                    {item.step}
                  </span>
                  <h3 className="font-fraunces text-[#221C19] text-2xl sm:text-[28px] font-bold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-figtree text-[#6B5F57] text-[15px] sm:text-[16px] leading-6">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
}
