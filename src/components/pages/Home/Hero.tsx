"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidingPills } from "./SlidingPills";

const TYPING_PHRASES = [
  "my coffee shop|",
  "my portfolio|",
  "my local bakery|",
  "my consulting business|",
  "my clothing brand|",
];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullPhrase = TYPING_PHRASES[phraseIdx];
      // Strip out the custom cursor "|" for slicing, we'll render it ourselves
      const cleanPhrase = fullPhrase.replace("|", "");

      if (!isDeleting) {
        // Typing text
        setTypedText(cleanPhrase.slice(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText.length === cleanPhrase.length) {
          // Pause when word is complete
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting text
        setTypedText(cleanPhrase.slice(0, typedText.length - 1));
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
    <section className="relative w-full overflow-hidden bg-gradient-to-tr from-zinc-50/50 via-white to-coral-50/20 py-16 md:py-24 lg:py-28 dark:from-zinc-950 dark:via-black dark:to-coral-950/10">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between px-6 sm:px-8 gap-12 lg:gap-8">
        
        {/* Left Column (Content) */}
        <div className="flex flex-col flex-1 items-start text-left max-w-2xl lg:max-w-xl xl:max-w-2xl">
          {/* Main Serif Headline */}
          <h1 className="font-fraunces text-4xl font-semibold tracking-tight text-zinc-900 leading-[1.12] dark:text-zinc-50 sm:text-5xl md:text-6xl lg:text-[62px]">
            Your <span className="text-coral-500 font-medium italic">big idea</span> deserves to be online.
          </h1>

          {/* Subtitle description */}
          <p className="font-figtree text-[17px] leading-relaxed text-zinc-600 dark:text-zinc-400 mt-6 max-w-[540px]">
            Build a website, claim a name that works everywhere, and add email that
            matches — all in one place, with none of the tech headache.
          </p>

          {/* CTA Action Buttons */}
          <div className="font-figtree flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="#build"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral-500 px-7 text-[15px] font-semibold text-white shadow-md shadow-coral-500/10 transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Build my website free</span>
              <svg
                className="size-4.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="#demo"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-zinc-200 bg-white/50 px-7 text-[15px] font-semibold text-zinc-900 transition-all duration-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-50 dark:hover:bg-zinc-900 active:scale-[0.98]"
            >
              <span>See how it works</span>
              <div className="flex size-7 items-center justify-center rounded-full border border-zinc-800 text-zinc-800 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:border-zinc-200 dark:text-zinc-200 dark:group-hover:bg-zinc-200 dark:group-hover:text-black">
                <svg className="size-3 fill-current translate-x-[1px]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Dynamic Prompt Box */}
          <div className="font-figtree mt-10 w-full max-w-[480px]">
            <div className="flex w-full items-center justify-between gap-3 rounded-full border border-zinc-200/80 bg-white/70 p-1.5 pl-4 shadow-sm backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/60">
              <div className="flex items-center gap-3 overflow-hidden">
                {/* Sparkles Icon */}
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904zM18 5.25L17.25 8l-.75-2.75L13.75 4.5l2.75-.75L17.25 1l.75 2.75 2.75.75-2.75.75z"
                    />
                  </svg>
                </div>
                {/* Text Content */}
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                  <span>Build me a website for </span>
                  <span className="font-semibold text-zinc-950 dark:text-zinc-50 border-r-2 border-coral-500 pr-0.5 animate-pulse">
                    {typedText}
                  </span>
                </div>
              </div>

              {/* Submit Action Button */}
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                aria-label="Submit website generation prompt"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Visual Image + Sliding Carousel overlay) */}
        <div className="relative flex flex-1 w-full max-w-[580px] lg:max-w-none items-center justify-center select-none">
          {/* Man sitting in bean bag image */}
          <div className="relative w-full aspect-[1.46] max-w-[550px] lg:max-w-[620px] transition-all duration-500 hover:scale-[1.01]">
            <Image
              src="/images/homePage/HeroImage.png"
              alt="Cortex Grip Workspace workflow illustration"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Overlapping Sliding Pills List */}
          <div className="absolute left-[2%] md:left-[6%] lg:left-[2%] top-[14%] md:top-[18%] scale-75 sm:scale-85 md:scale-95 lg:scale-90 xl:scale-100 origin-top-left z-30">
            <SlidingPills />
          </div>
        </div>

      </div>
    </section>
  );
}
