"use client";

import { useEffect, useState } from "react";

type Phase =
  | "typing"
  | "logo-drop"
  | "tag-1"
  | "tag-2"
  | "tag-3"
  | "hold"
  | "exit";

const DURATIONS: Record<Phase, number> = {
  typing: 2200,
  "logo-drop": 700,
  "tag-1": 600,
  "tag-2": 600,
  "tag-3": 600,
  hold: 3500,
  exit: 400,
};

export function DomainFeatureAnimation() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [typedText, setTypedText] = useState("");
  const [mounted, setMounted] = useState(false);

  // Trigger container fade-in on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Phase transition state machine
  useEffect(() => {
    const sequence: Phase[] = [
      "typing",
      "logo-drop",
      "tag-1",
      "tag-2",
      "tag-3",
      "hold",
      "exit",
    ];
    const timer = setTimeout(() => {
      const idx = sequence.indexOf(phase);
      const next = sequence[(idx + 1) % sequence.length];
      if (next === "typing") {
        setTypedText("");
      }
      setPhase(next);
    }, DURATIONS[phase]);

    return () => clearTimeout(timer);
  }, [phase]);

  // Typewriter effect
  useEffect(() => {
    if (phase !== "typing") return;
    const target = "rosiesbakery.com";
    if (typedText.length >= target.length) return;
    const timer = setTimeout(() => {
      setTypedText(target.slice(0, typedText.length + 1));
    }, 90);
    return () => clearTimeout(timer);
  }, [phase, typedText]);

  // Transitions helper states
  const showLogo = phase !== "typing";

  const showTag1 = ["tag-1", "tag-2", "tag-3", "hold"].includes(phase);

  const showTag2 = ["tag-2", "tag-3", "hold"].includes(phase);

  const showTag3 = ["tag-3", "hold"].includes(phase);

  const innerFadeOut = phase === "exit";

  return (
    <div
      className="relative flex w-full flex-col items-center gap-8 rounded-3xl bg-white p-8 md:p-10 drop-shadow-sm border border-coral-500/5 select-none"
      style={{
        opacity: mounted ? 1 : 0.35,
        transform: mounted ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 1000ms ease, transform 100ms ease",
      }}
    >
      {/* Animated Inner Contents Wrapper (exits independently of the white container) */}
      <div
        className="flex w-full flex-col items-center gap-4"
        style={{
          opacity: innerFadeOut ? 0 : 1,
          transform: innerFadeOut ? "scale(0.98)" : "scale(1)",
          transition: "opacity 350ms ease, transform 350ms ease",
        }}
      >
        {/* Cortex Shield Logo */}
        <div
          className="flex h-32 items-center justify-center transition-all duration-700 ease-out"
          style={{
            opacity: showLogo ? 1 : 0,
            transform: showLogo
              ? "translateY(0) scale(1)"
              : "translateY(-24px) scale(0.85)",
          }}
        >
          <span className="text-[110px]">🛡️</span>
        </div>

        {/* Typed Domain Text */}
        <h2 className="font-fraunces text-[26px] font-semibold leading-none text-[#221C19] md:text-[34px] min-h-9.5 flex items-center">
          <span>{typedText}</span>
          {phase === "typing" && (
            <span className="font-semibold text-coral-500 animate-pulse ml-0.5">
              |
            </span>
          )}
        </h2>

        {/* Features List Section */}
        <div className="flex w-full flex-col gap-3.5">
          {/* Tag 1: Privacy On */}
          <div
            className="flex items-center gap-2 rounded-[10px] bg-[#12A97E12] px-4 py-2 text-left w-full transition-all duration-500 font-figtree text-[#12A97E] text-base font-semibold"
            style={{
              opacity: showTag1 ? 1 : 0,
              transform: showTag1
                ? "translateY(0) scale(1)"
                : "translateY(12px) scale(0.97)",
            }}
          >
            <span>✓</span>
            <span>Privacy on</span>
          </div>

          {/* Tag 2: Lock Enabled */}
          <div
            className="flex items-center gap-2 rounded-[10px] bg-[#12A97E12] px-4 py-2 text-left w-full transition-all duration-500 font-figtree text-[#12A97E] text-base font-semibold"
            style={{
              opacity: showTag2 ? 1 : 0,
              transform: showTag2
                ? "translateY(0) scale(1)"
                : "translateY(12px) scale(0.97)",
            }}
          >
            <span>✓</span>
            <span>Lock enabled</span>
          </div>

          {/* Tag 3: Auto-renew On */}
          <div
            className="flex items-center gap-2 rounded-[10px] bg-[#12A97E12] px-4 py-2 text-left w-full transition-all duration-500 font-figtree text-[#12A97E] text-base font-semibold"
            style={{
              opacity: showTag3 ? 1 : 0,
              transform: showTag3
                ? "translateY(0) scale(1)"
                : "translateY(12px) scale(0.97)",
            }}
          >
            <span>✓</span>
            <span>Auto-renew on</span>
          </div>
        </div>
      </div>
    </div>
  );
}
