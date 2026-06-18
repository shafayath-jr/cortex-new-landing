"use client";

import { useEffect, useState } from "react";

type Phase =
  | "typing"
  | "connected"
  | "show-card"
  | "show-check"
  | "show-text"
  | "hold"
  | "exit";

const DURATIONS: Record<Phase, number> = {
  typing: 2400,
  connected: 600,
  "show-card": 500,
  "show-check": 600,
  "show-text": 800,
  hold: 3500,
  exit: 400,
};

export function SSLAnimation() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [typedText, setTypedText] = useState("");

  // Phase transition state machine
  useEffect(() => {
    const sequence: Phase[] = [
      "typing",
      "connected",
      "show-card",
      "show-check",
      "show-text",
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
    }, 80); // Typing speed
    return () => clearTimeout(timer);
  }, [phase, typedText]);

  // Derived state for transitions
  const isTyping = phase === "typing";
  const isSecure = phase !== "typing";

  const showCard = ["show-card", "show-check", "show-text", "hold"].includes(
    phase,
  );

  const showCheck = ["show-check", "show-text", "hold"].includes(phase);

  const showText = ["show-text", "hold"].includes(phase);
  const fadeOut = phase === "exit";

  return (
    <div
      className="relative flex w-full flex-col gap-6 rounded-3xl bg-white p-6 drop-shadow-sm border border-coral-500/5 transition-all duration-300"
      style={{
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(0.98)" : "scale(1)",
        transition: "opacity 300ms ease, transform 300ms ease",
      }}
    >
      {/* Address Bar */}
      <div className="flex w-full items-center gap-3 rounded-2xl bg-[#FDF8F6] px-5 py-4 border border-[#F5EBE6]">
        {/* Padlock Icon */}
        <svg
          className="size-5 shrink-0 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isSecure ? "scale(1.1)" : "scale(1)",
          }}
        >
          {/* Shackle */}
          <path
            d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10"
            stroke={isSecure ? "#e5b73c" : "#9c9089"}
            strokeWidth="2.5"
            strokeLinecap="round"
            className="transition-colors duration-300"
          />
          {/* Body */}
          <rect
            x="5"
            y="9"
            width="14"
            height="11"
            rx="2"
            fill={isSecure ? "#e5b73c" : "#dcd2c5"}
            stroke={isSecure ? "#c59a27" : "#9c9089"}
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          {/* Keyhole */}
          <circle
            cx="12"
            cy="14.5"
            r="1.2"
            fill={isSecure ? "#7c5e12" : "#9c9089"}
            className="transition-colors duration-300"
          />
        </svg>

        {/* Address text */}
        <div className="font-figtree text-base md:text-lg select-none leading-none">
          <span className="text-[#a49890] transition-colors duration-300">
            https://
          </span>
          <span className="font-medium text-[#2e0d05]">
            {typedText.replace("https://", "")}
          </span>
          {isTyping && (
            <span className="font-semibold text-coral-500 animate-pulse ml-0.5">
              |
            </span>
          )}
        </div>
      </div>

      {/* Main Connection Status Card */}
      <div
        className="relative flex flex-col items-center justify-center rounded-2xl bg-[#FAF5F0] py-14 px-8 text-center transition-all duration-500 ease-out min-h-[300px]"
        style={{
          opacity: showCard ? 1 : 0,
          transform: showCard ? "scale(1)" : "scale(0.95)",
        }}
      >
        {/* Animated Checkmark Circle */}
        <div
          className="flex size-24 items-center justify-center rounded-full bg-coral-500 text-white shadow-lg shadow-coral-500/20 transition-all duration-500 ease-out"
          style={{
            opacity: showCheck ? 1 : 0,
            transform: showCheck
              ? "scale(1) rotate(0deg)"
              : "scale(0.4) rotate(-15deg)",
          }}
        >
          <svg
            className="size-10 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Connection text */}
        <div
          className="mt-6 transition-all duration-700 ease-out"
          style={{
            opacity: showText ? 1 : 0,
            transform: showText ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <h3 className="font-fraunces text-2xl font-bold leading-tight text-[#2e0d05] md:text-3xl">
            Secure Connection
          </h3>
          <p className="mt-2 font-figtree text-base font-medium text-coral-500">
            Your connection is encrypted & secure
          </p>
        </div>
      </div>
    </div>
  );
}
