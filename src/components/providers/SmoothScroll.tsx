"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * App-wide smooth scrolling via Lenis.
 *
 * `root` attaches Lenis to the window/document scroller, so every route scrolls
 * smoothly without wrapping the layout in an extra scroll container. Lenis still
 * drives the real document scroll position (it only smooths the delta), so
 * Motion's `useScroll`-based, scroll-linked animations keep working unchanged.
 *
 * `autoRaf` lets Lenis run its own requestAnimationFrame loop — no manual ticker.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        // Leave touch devices on native scrolling — smoothing touch tends to
        // feel laggy and fights the OS momentum, so only the wheel is smoothed.
        syncTouch: false,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
