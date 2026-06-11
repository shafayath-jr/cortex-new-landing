"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { label: "SSL Security", id: "ssl" },
  { label: "Website Builder", id: "builder" },
  { label: "Launch a Website", id: "launch" },
  { label: "Professional Email", id: "email" },
  { label: "Domain Protection", id: "domain" },
];

const ITEM_HEIGHT = 64; // px
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
    if (activeIndex >= START_INDEX + ITEMS.length) {
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex((prev) => prev - ITEMS.length);
      }, 800);
      return () => clearTimeout(resetTimeout);
    }
  }, [activeIndex]);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative h-[320px] w-[320px] overflow-hidden font-figtree select-none flex justify-center">
      {/* Scrolling List Wrapper */}
      <div
        className={cn(
          "flex flex-col gap-3 items-center w-full"
        )}
        style={{
          transform: `translateY(calc(128px - ${activeIndex * (ITEM_HEIGHT + 12)}px))`, // 128px centers the active item
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
            styleClass = "bg-coral-500 text-white shadow-xl shadow-coral-500/25 scale-105 z-25 opacity-100";
          } else if (distance === 1) {
            styleClass = "bg-white/95 text-zinc-700 border border-zinc-200/40 dark:bg-zinc-900/90 dark:border-zinc-800/40 dark:text-zinc-300 scale-95 opacity-70 z-20";
          } else {
            styleClass = "bg-white/80 text-zinc-500 border border-zinc-200/20 dark:bg-zinc-950/80 dark:border-zinc-900/20 dark:text-zinc-500 scale-85 opacity-35 z-10";
          }

          return (
            <div
              key={`${item.id}-${idx}`}
              className={cn(
                "relative flex h-[64px] w-[280px] items-center gap-3 rounded-full px-5 py-3 shrink-0",
                styleClass
              )}
              style={{
                transitionProperty: "all",
                transitionDuration: "800ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {/* Globe Icon */}
              <div
                className={cn(
                  "flex size-7 items-center justify-center rounded-full transition-colors duration-500",
                  isActive ? "bg-white/20 text-white" : "bg-coral-50/50 text-coral-500 dark:bg-coral-950/20"
                )}
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text Label */}
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                {item.label}
              </span>

              {/* Green Checkmark Badge */}
              <span
                className={cn(
                  "absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md border-2 border-zinc-50 dark:border-black transition-all duration-300 ease-out",
                  isActive && !isTransitioning
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-50 pointer-events-none"
                )}
              >
                <svg
                  className="size-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>

            </div>
          );
        })}
      </div>
    </div>
  );
}
