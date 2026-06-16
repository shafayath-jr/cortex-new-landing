"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ROWS = [
  { barW: "w-16", tagW: "w-10", dir: "left"  as const },
  { barW: "w-14", tagW: "w-7",  dir: "right" as const },
  { barW: "w-15", tagW: "w-12", dir: "left"  as const },
  { barW: "w-13", tagW: "w-8",  dir: "right" as const },
];

const STAGGER_MS = 150;
const HOLD_MS    = 2200;
const EXIT_MS    = 320;
const PAUSE_MS   = 120;   // very short blank gap
const ENTER_MS   = 480;

function AvatarIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9 shrink-0">
      <circle cx="18" cy="18" r="18" fill="#F26B45" />
      <circle cx="18" cy="14" r="5.5" fill="white" />
      <path d="M6 30c0-6.627 5.373-10 12-10s12 3.373 12 10"
        stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function BrowserWindow() {
  const [mounted,  setMounted]    = useState(false);
  const [chromeIn, setChromeIn]   = useState(false);
  const [headerIn, setHeaderIn]   = useState(false);
  const [visible,  setVisible]    = useState([false, false, false, false]);
  const [exiting,  setExiting]    = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const WINDOW_ENTER_MS = 600; // outer window slide-up duration

    // whole window slides up first
    timers.push(setTimeout(() => setMounted(true), 80));

    const cycle = () => {
      // — instant reset —
      setChromeIn(false);
      setHeaderIn(false);
      setVisible([false, false, false, false]);
      setExiting(false);

      // chrome bar slides down first
      timers.push(setTimeout(() => setChromeIn(true), 60));

      // inner card header slides in slightly after chrome
      timers.push(setTimeout(() => setHeaderIn(true), 180));

      // rows stagger in
      ROWS.forEach((_, i) => {
        timers.push(
          setTimeout(() => {
            setVisible(prev => {
              const next = [...prev] as typeof prev;
              next[i] = true;
              return next;
            });
          }, 240 + i * STAGGER_MS)
        );
      });

      // begin exit
      const exitAt = 240 + ROWS.length * STAGGER_MS + HOLD_MS;
      timers.push(setTimeout(() => setExiting(true), exitAt));

      // restart after exit + tiny pause
      timers.push(setTimeout(cycle, exitAt + EXIT_MS + PAUSE_MS));
    };

    // first cycle starts after outer window finishes sliding in
    const init = setTimeout(cycle, WINDOW_ENTER_MS);
    return () => {
      clearTimeout(init);
      timers.forEach(clearTimeout);
    };
  }, []);

  const chromeTx   = chromeIn && !exiting;
  const headerShow = headerIn && !exiting;

  return (
    <div
      className="w-full overflow-hidden rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
      style={{
        background: "#fef5f2",
        opacity:    mounted ? 1 : 0,
        transform:  mounted ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: "opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* ── Browser chrome bar — slides down from above ── */}
      <div
        className="flex h-13 items-center justify-end gap-3 bg-[#F26B45] px-5"
        style={{
          opacity:   chromeTx ? 1 : 0,
          transform: chromeTx ? "translateY(0)" : "translateY(-100%)",
          transition: exiting
            ? `opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease`
            : `opacity ${ENTER_MS}ms ease, transform ${ENTER_MS}ms cubic-bezier(0.22,1,0.36,1)`,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="size-4 rounded-full bg-white/90" />
        ))}
      </div>

      {/* ── Window body ── */}
      <div className="px-6 py-6 sm:px-10 sm:py-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

          {/* Card header — slides in from top */}
          <div
            className="h-12 bg-[#f5b8b0]/60"
            style={{
              opacity:   headerShow ? 1 : 0,
              transform: headerShow ? "translateY(0)" : "translateY(-18px)",
              transition: exiting
                ? `opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease`
                : `opacity ${ENTER_MS}ms ease, transform ${ENTER_MS}ms cubic-bezier(0.34,1.2,0.64,1)`,
            }}
          />

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {ROWS.map((row, i) => {
              const isIn   = visible[i] && !exiting;
              const offset = row.dir === "left" ? "-50px" : "50px";

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-4"
                  style={{
                    opacity:   isIn ? 1 : 0,
                    transform: isIn
                      ? "translateX(0) scale(1)"
                      : `translateX(${offset}) scale(0.97)`,
                    transition: exiting
                      ? `opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease`
                      : `opacity ${ENTER_MS}ms ease, transform ${ENTER_MS}ms cubic-bezier(0.34,1.4,0.64,1)`,
                  }}
                >
                  <AvatarIcon />
                  <div className="h-5 w-16 rounded-md bg-[#9b8fb0]/50" />
                  <div className="h-5 w-14 rounded-md bg-[#bdd3e8]/60" />
                  <div className="flex gap-1">
                    <div className={`h-5 ${row.barW} rounded-l-md bg-[#f5b8b0]/80`} />
                    <div className={`h-5 ${row.tagW} rounded-r-md bg-[#bdd3e8]/60`} />
                  </div>
                  <div className="ml-auto h-5 w-14 rounded-md bg-[#bdd3e8]/60" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TemplateTeaser() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-15 px-6 sm:px-8 lg:flex-row lg:items-center">

        {/* Left — copy + CTA */}
        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center rounded-[28px] bg-linear-to-l from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
              Template Teaser
            </span>
            <h2 className="font-fraunces text-4xl font-bold leading-normal text-[#221c19] sm:text-5xl lg:text-[48px]">
              Prefer to start{" "}
              <span className="text-coral-500">from a design?</span>
            </h2>
          </div>

          <p className="max-w-140 font-figtree text-[19px] leading-[1.7] text-[#2e0d05]">
            Browse beautiful, ready-made templates for every kind of business
            and make one your own.
          </p>

          <Link
            href="#templates"
            className="group mt-1 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>See templates</span>
            <svg
              className="size-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Right — animated browser window */}
        <div className="relative w-full max-w-141.5 shrink-0 lg:max-w-none lg:w-141.5">
          <BrowserWindow />
        </div>

      </div>
    </section>
  );
}
