"use client";

import Link from "next/link";
import { BuilderAnimation } from "./BuilderAnimation";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function Hero() {

  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6] py-16 md:py-24 lg:py-[120px]">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-32 size-[459px] rounded-full bg-coral-500/10 blur-[120px] md:-right-16 lg:right-[5%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-[408px] rounded-full bg-coral-500/8 blur-[100px] md:-left-20"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        {/* Left — copy + CTAs */}
        <div className="flex w-full flex-col items-start gap-8 lg:max-w-[740px]">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center rounded-[18px] bg-linear-to-l from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
              AI Website Builder
            </span>

            <h1 className="font-fraunces text-4xl font-bold leading-[1.06] text-[#2e0d05] sm:text-5xl md:text-6xl lg:text-[72px]">
              Describe it. Watch it build.{" "}
              <span className="text-coral-500">Weavex</span>
            </h1>

            <p className="max-w-[660px] font-figtree text-[17px] leading-normal text-[#6b5f57] sm:text-[19px]">
              Tell Weavex what you do, and it builds your first website — words, layout,
              images and all — in minutes. Then make it yours.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Link
              href="#build"
              className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Build for free</span>
              <ArrowIcon className="size-6 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#templates"
              className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-full border border-[#dcd2c5] bg-white px-6 font-figtree text-base font-medium text-[#2e0d05] transition-all duration-200 hover:bg-[#fef8f6] active:scale-[0.98]"
            >
              <span>See Templates</span>
              <ArrowIcon className="size-6 text-[#2e0d05] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right — animated builder loop */}
        <div className="relative w-full max-w-[520px] lg:max-w-[473px]">
          <BuilderAnimation />
        </div>
      </div>
    </section>
  );
}
