"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const STEPS = [
  {
    number: "01",
    badge: "1st Step",
    title: "Describe your business in a sentence.",
    description:
      "Just type what you do — \"a bakery\", \"a yoga studio\". That's your starting point.",
    illustration: "/images/weavex/how-it-works/step-1-describe.svg",
    illustrationWidth: 272,
    illustrationHeight: 216,
    cardAlign: "items-center",
  },
  {
    number: "02",
    badge: "2nd Step",
    title: "Weavex builds a complete first draft.",
    description: "Pages, words, layout and images — ready in minutes. No blank page.",
    illustration: "/images/weavex/how-it-works/step-2-build.svg",
    illustrationWidth: 296,
    illustrationHeight: 169,
    cardAlign: "items-center",
  },
  {
    number: "03",
    badge: "3rd Step",
    title: "Edit anything by clicking it.",
    description: "Swap photos, change words, add pages. No code, nothing to break.",
    illustration: "/images/weavex/how-it-works/step-3-edit.svg",
    illustrationWidth: 306,
    illustrationHeight: 204,
    cardAlign: "items-start",
  },
  {
    number: "04",
    badge: "4th Step",
    title: "Publish. You're live with security built in.",
    description: "Your site goes live instantly, free, with SSL included automatically.",
    illustration: "/images/weavex/how-it-works/step-4-publish.svg",
    illustrationWidth: 340,
    illustrationHeight: 200,
    cardAlign: "items-center",
  },
] as const;

function StepBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[18px] bg-linear-to-l from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
      {children}
    </span>
  );
}

function StepNumber({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="bg-linear-to-b from-coral-500 from-63% to-white to-125% bg-clip-text font-fraunces text-[72px] font-bold leading-none text-transparent sm:text-[88px] lg:text-[102px]"
      style={{ WebkitTextFillColor: "transparent" }}
    >
      {children}
    </p>
  );
}

function useDrawOnScroll() {
  const pathRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const head = headRef.current;
    if (!path || !head) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    head.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition = "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)";
          path.style.strokeDashoffset = "0";
          head.style.transition = "opacity 0.3s ease 1.1s";
          head.style.opacity = "1";
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(path);
    return () => observer.disconnect();
  }, []);

  return { pathRef, headRef };
}

// Arrow curving from top-right down-left, arrowhead at bottom (used on left side)
function ArrowEntry({ className }: { className?: string }) {
  const { pathRef, headRef } = useDrawOnScroll();

  return (
    <svg
      viewBox="0 0 161 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      overflow="visible"
    >
      {/* Centerline: from top-right (159,2) curving left/down to arrowhead back (127,281) */}
      <path
        ref={pathRef}
        d="M 159 8 C 70 40 -20 160 127 281"
        fill="none"
        stroke="#F26B45"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Arrowhead aligned to path tangent at (127,281): direction ≈43.7° right-down */}
      <polygon
        ref={headRef}
        points="122,287 133,275 140,294"
        fill="#F26B45"
      />
    </svg>
  );
}

// Arrow curving from bottom-right up-left to top (used on right side, applied with rotate-180)
// After rotation: visually draws top→bottom, arrowhead appears at bottom pointing down
function ArrowRight({ className }: { className?: string }) {
  const { pathRef, headRef } = useDrawOnScroll();

  return (
    <svg
      viewBox="0 0 212 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      overflow="visible"
    >
      {/* Single smooth cubic matching the original S-curve (bows left to x≈-8 at midpoint) */}
      <path
        ref={pathRef}
        d="M 212 362 C -20 320 -20 90 142 23"
        fill="none"
        stroke="#F26B45"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Arrowhead aligned to path tangent at (142,23): direction ≈-9.9° right-up in SVG (left-down after rotate-180) */}
      <polygon
        ref={headRef}
        points="141,31 143,15 160,20"
        fill="#F26B45"
      />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 sm:px-8 lg:gap-15">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <StepBadge>How it works</StepBadge>
          <h2 className="font-fraunces text-4xl font-semibold leading-normal text-[#221c19] sm:text-5xl lg:text-[48px]">
            From idea to website{" "}
            <span className="text-coral-500">in minutes</span>
          </h2>
        </div>

        {/* Steps timeline */}
        <div className="relative w-full max-w-201.5">
          {/* Connector arrows — desktop only */}
          <ArrowEntry className="pointer-events-none absolute -left-24 top-10 hidden w-30 lg:block xl:-left-48 xl:w-38.75" />
          <ArrowRight className="pointer-events-none absolute -right-20 top-[18%] hidden w-37.5 lg:block xl:-right-48 xl:w-53 rotate-180" />
          <ArrowEntry className="pointer-events-none absolute -left-24 top-[44%] hidden w-30 lg:block xl:-left-48 xl:w-38.75" />
          <ArrowRight className="pointer-events-none absolute -right-20 top-[68%] hidden w-37.5 lg:block xl:-right-48 xl:w-53 rotate-180" />

          <div className="flex flex-col gap-14 lg:gap-[70px]">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-6 z-20">
                <StepNumber>{step.number}</StepNumber>

                <div className="rounded-2xl bg-[#faf6ef] p-6 sm:p-8">
                  <div className={`flex flex-col gap-8 lg:flex-row lg:gap-2.5 ${step.cardAlign}`}>
                    <div className="flex min-w-0 flex-1 flex-col gap-6">
                      <StepBadge>{step.badge}</StepBadge>

                      <div className="flex flex-col gap-4">
                        <h3 className="max-w-[426px] font-fraunces text-[28px] font-bold leading-normal text-[#221c19] sm:text-[32px] lg:text-[36px]">
                          {step.title}
                        </h3>
                        <p className="max-w-[426px] font-figtree text-[17px] leading-[1.6] text-[#6b5f57]">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="mx-auto shrink-0 lg:mx-0">
                      <Image
                        src={step.illustration}
                        alt={step.title}
                        width={step.illustrationWidth}
                        height={step.illustrationHeight}
                        className="h-auto w-full max-w-[272px] lg:max-w-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
