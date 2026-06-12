"use client";

import Bounded from "@/components/shared/Bounded";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi";
import { PiPlayBold } from "react-icons/pi";
import { RiArrowRightLine } from "react-icons/ri";
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
    <section className="relative w-full overflow-hidden bg-[#FEF8F6]">
      <Bounded
        as="div"
        className="flex flex-col lg:flex-row items-center justify-between"
      >
        {/* Left Column (Content) */}
        <div className="flex flex-col flex-2 items-start text-left max-w-185">
          {/* Main Serif Headline */}
          <h1 className="font-fraunces font-bold  text-[#2E0D05] leading-19 tracking-normal text-4xl sm:text-5xl md:text-6xl lg:text-[66px]">
            Your <span className="text-coral-500">big idea</span> deserves to be
            online.
          </h1>

          {/* Subtitle description */}
          <p className="font-figtree text-[19px] leading-7 text-[#6B5F57] dark:text-zinc-400 mt-4 lg:max-w-165">
            Build a website, claim a name that works everywhere, and add email
            that matches — all in one place, with none of the tech headache.
          </p>

          {/* CTA Action Buttons */}
          <div className="font-figtree flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6 w-full sm:w-auto">
            <Link
              href="#build"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-4 text-[16px] font-normal text-white shadow-sm shadow-coral-500/10 transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Build my website free</span>
              <FaArrowRight className="size-4" />
            </Link>

            <Link
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#DCD2C5] bg-white px-6 py-4 text-[16px] font-normal text-[#2E0D05] transition-all duration-200 hover:bg-zinc-50 active:scale-[0.98]"
            >
              <span>See how it works</span>
              <PiPlayBold className="size-4" />
            </Link>
          </div>

          {/* Dynamic Prompt Box */}
          <div className="font-figtree mt-5 w-full max-w-120">
            <div className="flex w-full items-center justify-between gap-3 rounded-full border border-[#DCD2C5] bg-white p-2 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-3 overflow-hidden">
                {/* Sparkles Icon */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
                  <HiOutlineSparkles className="size-6" />
                </div>
                {/* Text Content */}
                <div className="text-[16px] font-normal text-[#9C9089] whitespace-nowrap">
                  <span>Build me a website for </span>
                  <span className="font-medium text-[#2E0D05] border-r-2 border-coral-500 pr-px animate-pulse">
                    {typedText}
                  </span>
                </div>
              </div>

              {/* Submit Action Button */}
              <button
                type="button"
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#2E0D05] bg-white text-[#2E0D05] transition-colors hover:bg-zinc-50 active:scale-95"
                aria-label="Submit website generation prompt"
              >
                <RiArrowRightLine className="size-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Visual Image + Sliding Carousel overlay) */}
        <div className="relative flex flex-1 w-full items-center justify-center select-none z-30">
          <SlidingPills />
        </div>
      </Bounded>
      <div className="absolute bottom-0 -right-1/30 w-full aspect-[1.46] max-w-[550px] lg:max-w-[620px] transition-all duration-500">
        <Image
          src="/images/homePage/HeroImage.png"
          alt="Cortex Grip Workspace workflow illustration"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 620px"
          className="object-contain"
        />
      </div>
      <div className="size-115 rounded-full bg-[#F26B45] opacity-60 blur-[197px] absolute bottom-0 right-0" />
      <div className="size-102 rounded-full bg-[#F4B53F] opacity-30 blur-[197px] absolute bottom-0 left-0" />
    </section>
  );
}
