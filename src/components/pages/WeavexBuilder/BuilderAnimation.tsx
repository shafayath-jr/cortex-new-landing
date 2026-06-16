"use client";

import { useEffect, useState } from "react";

type Phase =
  | "prompt"
  | "cursor-to-arrow"
  | "arrow-click"
  | "prompt-exit"
  | "theme-enter"
  | "cursor-to-square"
  | "square-click"
  | "theme-exit"
  | "webpage-enter"
  | "cursor-to-webpage"
  | "webpage-click"
  | "webpage-exit";

const PROMPTS = [
  "my coffee shop",
  "my portfolio",
  "my local bakery",
  "my clothing brand",
];

const DURATIONS: Record<Phase, number> = {
  prompt: 2400,
  "cursor-to-arrow": 750,
  "arrow-click": 320,
  "prompt-exit": 450,
  "theme-enter": 620,
  "cursor-to-square": 750,
  "square-click": 320,
  "theme-exit": 450,
  "webpage-enter": 1000,
  "cursor-to-webpage": 750,
  "webpage-click": 320,
  "webpage-exit": 450,
};

const PHASES: Phase[] = [
  "prompt",
  "cursor-to-arrow",
  "arrow-click",
  "prompt-exit",
  "theme-enter",
  "cursor-to-square",
  "square-click",
  "theme-exit",
  "webpage-enter",
  "cursor-to-webpage",
  "webpage-click",
  "webpage-exit",
];

type Pos = { x: number; y: number };

// prompt bar is vertically centered at y≈165 in the 330px container
// "Learn more" button in row-2 right card ≈ x=390, y=206
const CURSOR_POS: Record<Phase, Pos> = {
  prompt: { x: 305, y: 165 },
  "cursor-to-arrow": { x: 436, y: 165 },
  "arrow-click": { x: 436, y: 165 },
  "prompt-exit": { x: 436, y: 165 },
  "theme-enter": { x: 436, y: 80 },
  "cursor-to-square": { x: 88, y: 172 },
  "square-click": { x: 88, y: 172 },
  "theme-exit": { x: 88, y: 172 },
  "webpage-enter": { x: 88, y: 172 },
  "cursor-to-webpage": { x: 388, y: 295 },
  "webpage-click": { x: 388, y: 295 },
  "webpage-exit": { x: 388, y: 295 },
};

function blockStyle(fromLeft: boolean, delay: number, visible: boolean): React.CSSProperties {
  return {
    transform: visible ? "translateX(0)" : `translateX(${fromLeft ? "-160%" : "160%"})`,
    opacity: visible ? 1 : 0,
    transition: `transform 560ms ${delay}ms cubic-bezier(0.34,1.2,0.64,1), opacity 350ms ${delay}ms ease`,
  };
}

export function BuilderAnimation() {
  const [phase, setPhase] = useState<Phase>("prompt");
  const [promptIdx, setPromptIdx] = useState(0);
  const [typedText, setTypedText] = useState("");

  // Phase state machine
  useEffect(() => {
    const timer = setTimeout(() => {
      const idx = PHASES.indexOf(phase);
      const next = PHASES[(idx + 1) % PHASES.length];
      if (next === "prompt") {
        setTypedText("");
        setPromptIdx((p) => (p + 1) % PROMPTS.length);
      }
      setPhase(next);
    }, DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  // Typewriter effect — only active during prompt phase
  useEffect(() => {
    if (phase !== "prompt") return;
    const target = PROMPTS[promptIdx];
    if (typedText.length >= target.length) return;
    const timer = setTimeout(() => {
      setTypedText(target.slice(0, typedText.length + 1));
    }, 72);
    return () => clearTimeout(timer);
  }, [phase, typedText, promptIdx]);

  const promptVisible = ["prompt", "cursor-to-arrow", "arrow-click"].includes(phase);
  const promptActive = promptVisible || phase === "prompt-exit";
  const arrowClicked = phase === "arrow-click";

  const themeVisible = ["theme-enter", "cursor-to-square", "square-click"].includes(phase);
  const themeActive = themeVisible || phase === "theme-exit";
  const squareClicked = phase === "square-click";

  const webpageVisible = ["webpage-enter", "cursor-to-webpage", "webpage-click"].includes(phase);
  const webpageActive = webpageVisible || phase === "webpage-exit";
  const blocksIn = ["webpage-enter", "cursor-to-webpage", "webpage-click", "webpage-exit"].includes(phase);

  const cursorVisible = phase !== "prompt";
  const clicking = arrowClicked || squareClicked || phase === "webpage-click";
  const row2RightHovered  = ["cursor-to-webpage", "webpage-click"].includes(phase);
  const row2RightClicking = phase === "webpage-click";

  const pos = CURSOR_POS[phase];

  // vertically centered — translateY(-50%) keeps bar at mid-height, scaleX handles squish
  const promptPanelStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    transformOrigin: "center center",
    transform: promptVisible
      ? "translateY(-50%) scaleX(1)"
      : "translateY(-50%) scaleX(0)",
    opacity: promptActive ? 1 : 0,
    transition: "transform 420ms ease-in-out, opacity 300ms ease",
    pointerEvents: "none",
  };

  const themePanelStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    bottom: "auto",
    transformOrigin: "center center",
    transform: themeVisible ? "scale(1)" : "scale(0)",
    opacity: themeActive ? 1 : 0,
    transition: themeVisible
      ? "transform 500ms cubic-bezier(0.34,1.56,0.64,1), opacity 300ms ease"
      : "transform 420ms ease-in-out, opacity 300ms ease",
    pointerEvents: "none",
  };

  const webpagePanelStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    bottom: "auto",
    transformOrigin: "center center",
    transform: webpageVisible ? "scale(1)" : "scale(0)",
    opacity: webpageActive ? 1 : 0,
    transition: webpageVisible
      ? "transform 500ms cubic-bezier(0.34,1.56,0.64,1), opacity 300ms ease"
      : "transform 420ms ease-in-out, opacity 300ms ease",
    pointerEvents: "none",
  };

  return (
    <div className="relative h-[330px] w-full select-none">

      {/* ── Prompt bar ── */}
      <div style={promptPanelStyle}>
        <div className="w-full rounded-full border border-[#dcd2c5] bg-white p-2 shadow-sm">
          <div className="flex items-center justify-between gap-3 pl-1">
            <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[24px] bg-coral-500 text-white">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904zM18 5.25L17.25 8l-.75-2.75L13.75 4.5l2.75-.75L17.25 1l.75 2.75 2.75.75-2.75.75z" />
                </svg>
              </div>
              <div className="min-w-0 font-figtree text-base leading-normal">
                <span className="text-[#9c9089]">Build me a website for </span>
                <span className="font-medium text-[#2e0d05]">{typedText}</span>
                <span className="font-semibold text-coral-500 animate-pulse">|</span>
              </div>
            </div>
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-[24px] border border-[#2e0d05] bg-white text-[#2e0d05]"
              style={{
                transform: arrowClicked ? "scale(0.82)" : "scale(1)",
                transition: "transform 120ms ease",
                background: arrowClicked ? "#fef8f6" : "white",
              }}
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Theme picker window ── */}
      <div style={themePanelStyle}>
        <div className="w-full overflow-hidden rounded-[20px] bg-white shadow-lg">
          <div className="flex items-center justify-between bg-[#e8490f] px-4 py-3">
            <span className="font-figtree text-sm font-bold text-white">Theme Color</span>
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-white/80" />
              <div className="size-2.5 rounded-full bg-white/80" />
              <div className="size-2.5 rounded-full bg-white/80" />
            </div>
          </div>
          <div className="p-6">
            <p className="mb-5 font-figtree text-[13px] font-semibold text-[#2e0d05]">Pick a theme:</p>
            <div className="flex gap-4">
              {/* Swatch 1 – solid orange (clicked) */}
              <div className="flex flex-1 flex-col gap-3">
                <div
                  className="aspect-square w-full rounded-2xl"
                  style={{
                    background: "#e8490f",
                    outline: squareClicked ? "3px solid #e8490f" : "none",
                    outlineOffset: "3px",
                    transform: squareClicked ? "scale(0.86)" : "scale(1)",
                    transition: "transform 120ms ease",
                  }}
                />
                <div className="space-y-1.5">
                  <div className="h-2 rounded-full bg-[#dcd2c5]" />
                  <div className="h-2 w-3/4 rounded-full bg-[#dcd2c5]" />
                  <div className="h-2 w-1/2 rounded-full bg-[#dcd2c5]" />
                </div>
              </div>
              {/* Swatch 2 */}
              <div className="flex flex-1 flex-col gap-3">
                <div className="aspect-square w-full overflow-hidden rounded-2xl">
                  <div className="grid h-full grid-cols-2 gap-px bg-white">
                    <div className="bg-[#e8490f]" />
                    <div className="bg-[#f08560]" />
                    <div className="bg-[#f08560]" />
                    <div className="bg-[#fad5c5]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 rounded-full bg-[#dcd2c5]" />
                  <div className="h-2 w-3/4 rounded-full bg-[#dcd2c5]" />
                  <div className="h-2 w-1/2 rounded-full bg-[#dcd2c5]" />
                </div>
              </div>
              {/* Swatch 3 */}
              <div className="flex flex-1 flex-col gap-3">
                <div className="aspect-square w-full overflow-hidden rounded-2xl">
                  <div className="grid h-full grid-cols-2 gap-px bg-white">
                    <div className="bg-[#b83a0c]" />
                    <div className="bg-[#e8490f]" />
                    <div className="bg-[#f08560]" />
                    <div className="bg-[#fad5c5]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 rounded-full bg-[#dcd2c5]" />
                  <div className="h-2 w-3/4 rounded-full bg-[#dcd2c5]" />
                  <div className="h-2 w-1/2 rounded-full bg-[#dcd2c5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Webpage structure mockup ── */}
      <div style={webpagePanelStyle}>
        <div className="w-full overflow-hidden rounded-[20px] bg-white shadow-lg">
          {/* Nav */}
          <div style={blockStyle(true, 0, blocksIn)}>
            <div className="flex items-center justify-between bg-[#e8490f] px-4 py-2.5">
              <div className="flex size-6 items-center justify-center rounded-full bg-white">
                <div className="size-2.5 rounded-full bg-[#e8490f]" />
              </div>
              <div className="flex gap-3">
                {["Home", "Service", "Contact", "About h"].map((t) => (
                  <span key={t} className="font-figtree text-[10px] text-white">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 rounded-full border border-white px-2.5 py-0.5 font-figtree text-[10px] text-white">
                Sepuion
                <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-3 space-y-2">
            {/* Row 1: hero card (h-full to fill row) + right column */}
            <div className="flex items-stretch gap-2">
              <div className="flex flex-1" style={blockStyle(true, 60, blocksIn)}>
                <div className="flex w-full flex-col justify-between rounded-xl bg-[#e8490f] p-3">
                  <div>
                    <p className="font-figtree text-xs font-bold text-white mb-1">Coffee Shop</p>
                    <div className="mb-0.5 h-1.5 w-full rounded-full bg-white/50" />
                    <div className="h-1.5 w-3/4 rounded-full bg-white/50" />
                  </div>
                  <div className="mt-3 inline-block rounded-full bg-white px-3 py-1 font-figtree text-[9px] font-semibold text-[#e8490f]">
                    Learn more
                  </div>
                </div>
              </div>
              <div className="flex w-[38%] flex-col gap-2">
                <div style={blockStyle(false, 100, blocksIn)}>
                  <div className="flex aspect-video items-center justify-center rounded-xl bg-[#e8490f]/15">
                    <svg className="size-6 text-[#e8490f]/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                  </div>
                </div>
                <div style={blockStyle(false, 140, blocksIn)}>
                  <div className="rounded-xl border border-[#dcd2c5] bg-white p-2.5">
                    <div className="mb-1.5 h-1.5 w-12 rounded-full bg-[#2e0d05]" />
                    <div className="mb-1.5 h-7 w-7 rounded-lg bg-[#e8490f]/20" />
                    <div className="h-1.5 w-10 rounded-full bg-[#dcd2c5]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: cards */}
            <div className="flex gap-2">
              <div className="flex-1" style={blockStyle(true, 190, blocksIn)}>
                <div className="rounded-xl border border-[#dcd2c5] bg-white p-2.5">
                  <div className="mb-1.5 rounded-lg bg-[#e8490f] py-1 text-center font-figtree text-[9px] font-bold text-white">Web</div>
                  <div className="mb-1 h-1.5 w-full rounded-full bg-[#dcd2c5]" />
                  <div className="mb-1 h-1.5 w-3/4 rounded-full bg-[#dcd2c5]" />
                  <div className="h-1.5 w-1/2 rounded-full bg-[#dcd2c5]" />
                </div>
              </div>
              <div className="flex-1" style={blockStyle(false, 230, blocksIn)}>
                <div className="rounded-xl border border-[#dcd2c5] bg-white p-2.5">
                  <div className="mb-1.5 rounded-lg bg-[#e8490f] py-1 text-center font-figtree text-[9px] font-bold text-white">Web</div>
                  <div className="mb-1 h-1.5 w-full rounded-full bg-[#dcd2c5]" />
                  <div className="mb-1 h-1.5 w-3/4 rounded-full bg-[#dcd2c5]" />
                  <div className="h-1.5 w-1/2 rounded-full bg-[#dcd2c5]" />
                </div>
              </div>
              <div className="flex-1" style={blockStyle(true, 270, blocksIn)}>
                <div
                  className="rounded-xl p-2.5"
                  style={{
                    background: row2RightHovered ? "#d43e0a" : "#e8490f",
                    transition: "background 200ms ease",
                  }}
                >
                  <div className="mb-1 h-1.5 w-10 rounded-full bg-white/60" />
                  <div className="mb-1 h-1.5 w-full rounded-full bg-white/40" />
                  <div className="mb-2 h-1.5 w-3/4 rounded-full bg-white/40" />
                  <div
                    className="rounded-full border border-white px-2 py-0.5 text-center font-figtree text-[8px] text-white"
                    style={{
                      background: row2RightClicking ? "rgba(255,255,255,0.35)" : row2RightHovered ? "rgba(255,255,255,0.15)" : "transparent",
                      transform: row2RightClicking ? "scale(0.88)" : "scale(1)",
                      transition: "background 150ms ease, transform 100ms ease",
                      display: "inline-block",
                      width: "100%",
                    }}
                  >
                    Learn more
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: footer */}
            <div className="flex gap-2">
              <div style={blockStyle(true, 310, blocksIn)}>
                <div className="flex items-center gap-2 rounded-xl bg-[#e8490f]/10 px-2.5 py-2">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#dcd2c5]">
                    <svg className="size-3.5 text-[#9c9089]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-1 h-1.5 w-16 rounded-full bg-[#dcd2c5]" />
                    <div className="h-1.5 w-20 rounded-full bg-[#dcd2c5]" />
                  </div>
                </div>
              </div>
              <div className="flex-1" style={blockStyle(false, 350, blocksIn)}>
                <div className="flex h-full items-center justify-center rounded-xl bg-[#e8490f] px-3 py-2">
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 rounded-full bg-white/60" />
                    <div className="h-1.5 w-12 rounded-full bg-white/50" />
                    <div className="h-1.5 w-10 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Animated cursor ── */}
      <div
        className="pointer-events-none absolute z-50"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: cursorVisible ? 1 : 0,
          transition:
            "left 700ms cubic-bezier(0.4,0,0.2,1), top 700ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease",
        }}
      >
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          style={{
            transform: clicking ? "scale(0.72)" : "scale(1)",
            transition: "transform 100ms ease",
            filter: "drop-shadow(1px 2px 4px rgba(0,0,0,0.35))",
          }}
        >
          <path
            d="M2 2L2 20L6.5 15.5L9.5 23.5L12.5 22L9.5 14H17.5L2 2Z"
            fill="white"
            stroke="#1a1a1a"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
