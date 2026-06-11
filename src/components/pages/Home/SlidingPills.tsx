"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { MdDone } from "react-icons/md";

const ITEMS = [
  { label: "SSL Security", id: "ssl" },
  { label: "Website Builder", id: "builder" },
  { label: "Launch a Website", id: "launch" },
  { label: "Professional Email", id: "email" },
  { label: "Domain Protection", id: "domain" },
];

const ITEM_HEIGHT = 52; // px — matches h-13 (52px)
const VISIBLE_COUNT = 5;

// To achieve infinite looping, we repeat the array 3 times
const EXTENDED_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS];
const START_INDEX = ITEMS.length + 2; // Middle copy, active item "Launch a Website" (index 7)

export function SlidingPills() {
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);

      // Turn off transition state once translation is completed (800ms)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When we reach near the end of the extended array, reset to the middle copy
    // Wait for 1500ms (in the middle of the settled phase) to do the index swap invisibly
    if (activeIndex >= START_INDEX + ITEMS.length) {
      const resetTimeout = setTimeout(() => {
        // 1. Disable transition first
        setIsTransitioning(false);

        // 2. In the next frame tick (50ms), swap activeIndex to START_INDEX
        // This guarantees the browser registers the transition-none state and snaps instantly without rewinding
        timeoutRef.current = setTimeout(() => {
          setActiveIndex(START_INDEX);
        }, 50);
      }, 1500);

      return () => {
        clearTimeout(resetTimeout);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
  }, [activeIndex]);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative h-92.5 w-[320px] overflow-hidden font-figtree select-none flex justify-center"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      {/* Green Checkmark Badge (Single, static center position) */}
      <span
        className={cn(
          "absolute flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md transition-all duration-300 ease-out z-30",
          !isTransitioning
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-50 pointer-events-none",
        )}
        style={{
          top: "152px",
          right: "60px",
        }}
      >
        <MdDone className="size-3 text-white" />
      </span>

      {/* Scrolling List Wrapper */}
      <div
        className={cn("flex flex-col gap-3 items-center w-full")}
        style={{
          transform: `translateY(calc(159px - ${activeIndex * (ITEM_HEIGHT + 12)}px))`, // Centers the active item perfectly
          transitionProperty: isTransitioning ? "all" : "none",
          transitionDuration: isTransitioning ? "800ms" : "0ms",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {EXTENDED_ITEMS.map((item, idx) => {
          const distance = Math.abs(idx - activeIndex);
          const isActive = distance === 0;

          // Determine scale and opacity based on distance from active center
          let styleClass = "";
          if (isActive) {
            styleClass =
              "bg-coral-500 text-[#FEF8F6] text-[19px] font-medium leading-7 scale-102 z-25 opacity-100 shadow-xl shadow-coral-500/25";
          } else if (distance === 1) {
            styleClass =
              "bg-white/90 text-[#B23117] border border-[#F1EEEA] scale-95 opacity-70 z-20";
          } else {
            styleClass =
              "bg-white/70 text-[#B23117] border border-[#F1EEEA] scale-85 opacity-30 z-10";
          }

          return (
            <div
              key={`${item.id}-${idx}`}
              className={cn(
                "relative flex h-13 w-50 items-center justify-center gap-3 rounded-full shrink-0",
                styleClass,
              )}
              style={{
                transitionProperty: isTransitioning ? "all" : "none",
                transitionDuration: isTransitioning ? "800ms" : "0ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {/* Globe Icon */}
              <BsGlobe2
                className={cn(
                  "flex size-6 items-center justify-center rounded-full",
                  isTransitioning
                    ? "transition-colors duration-500"
                    : "transition-none",
                  isActive ? "text-white" : "text-coral-500",
                )}
              />

              {/* Text Label */}
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
