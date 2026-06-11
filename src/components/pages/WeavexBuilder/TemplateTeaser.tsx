import Image from "next/image";
import Link from "next/link";

export function TemplateTeaser() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[80px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-[60px] px-6 sm:px-8 lg:flex-row lg:items-center">

        {/* Left — copy + CTA */}
        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center rounded-[28px] bg-linear-to-r from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
              Template Teaser
            </span>

            <h2 className="font-fraunces text-4xl font-bold leading-normal text-[#221c19] sm:text-5xl lg:text-[48px]">
              Prefer to start{" "}
              <span className="text-coral-500">from a design?</span>
            </h2>
          </div>

          <p className="max-w-[560px] font-figtree text-[19px] leading-[1.7] text-[#2e0d05]">
            Browse beautiful, ready-made templates for every kind of business
            and make one your own.
          </p>

          <Link
            href="#templates"
            className="group mt-1 inline-flex h-[56px] items-center justify-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>See templates</span>
            <svg
              className="size-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Right — browser window mockup */}
        <div className="relative w-full max-w-[566px] shrink-0 overflow-hidden rounded-[20px] lg:max-w-none lg:w-[566px]">
          <Image
            src="/images/weavex/template-teaser-window.png"
            alt="Weavex template preview"
            width={1132}
            height={764}
            className="h-auto w-full"
          />
        </div>

      </div>
    </section>
  );
}
