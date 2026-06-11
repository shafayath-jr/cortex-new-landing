"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TYPING_PHRASES = [
  "my coffee shop",
  "my portfolio",
  "my local bakery",
  "my consulting business",
  "my clothing brand",
];

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
  const [typedText, setTypedText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullPhrase = TYPING_PHRASES[phraseIdx];

      if (!isDeleting) {
        setTypedText(fullPhrase.slice(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText.length === fullPhrase.length) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setTypedText(fullPhrase.slice(0, typedText.length - 1));
        setTypingSpeed(50);

        if (typedText.length === 0) {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % TYPING_PHRASES.length);
          timer = setTimeout(() => {}, 500);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx, typingSpeed]);

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

        {/* Right — prompt bar + window mockup */}
        <div className="relative flex w-full max-w-[520px] flex-col items-center gap-6 lg:max-w-[473px] lg:items-end">
          <div className="w-full rounded-full border border-[#dcd2c5] bg-white p-2 shadow-sm">
            <div className="flex items-center justify-between gap-3 pl-1">
              <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-[24px] bg-coral-500 text-white">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904zM18 5.25L17.25 8l-.75-2.75L13.75 4.5l2.75-.75L17.25 1l.75 2.75 2.75.75-2.75.75z"
                    />
                  </svg>
                </div>

                <div className="min-w-0 font-figtree text-base leading-normal">
                  <span className="text-[#9c9089]">Build me a website for </span>
                  <span className="font-medium text-[#2e0d05]">{typedText}</span>
                  <span className="font-semibold text-coral-500">|</span>
                </div>
              </div>

              <button
                type="button"
                className="flex size-12 shrink-0 items-center justify-center rounded-[24px] border border-[#2e0d05] bg-white text-[#2e0d05] transition-colors hover:bg-[#fef8f6] active:scale-95"
                aria-label="Submit website generation prompt"
              >
                <ArrowIcon className="size-6" />
              </button>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-[20px] bg-white shadow-sm">
            <Image
              src="/images/weavex/hero-window.png"
              alt="Weavex website builder preview"
              width={947}
              height={638}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
