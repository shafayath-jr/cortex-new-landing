function BrowserLoadAnimation() {
  return (
    <div className="relative w-[229px] h-[170px]">
      <style>{`
        @keyframes progress-fill {
          0%   { width: 0%; }
          60%  { width: 85%; }
          80%  { width: 85%; }
          100% { width: 0%; }
        }
        @keyframes rocket-fly {
          0%   { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
          55%  { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
          80%  { transform: translate(18px, -60px) rotate(-30deg); opacity: 1; }
          90%  { transform: translate(22px, -80px) rotate(-30deg); opacity: 0; }
          91%  { transform: translate(0px, 0px) rotate(-10deg); opacity: 0; }
          100% { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
        }
        @keyframes flame-flicker {
          0%,100% { transform: scaleY(1) scaleX(1); }
          50%      { transform: scaleY(1.3) scaleX(0.85); }
        }
        @keyframes content-fade {
          0%,15% { opacity: 0.3; }
          50%    { opacity: 1; }
          100%   { opacity: 0.3; }
        }
        @keyframes dot-pulse {
          0%,100% { opacity: 0.4; }
          50%     { opacity: 1; }
        }
      `}</style>

      {/* Browser chrome */}
      <div className="absolute inset-0 overflow-hidden rounded-xl border border-[#e8e0d8] bg-white shadow-sm">
        {/* Title bar */}
        <div className="flex h-[28px] items-center gap-[5px] border-b border-[#f0ebe6] bg-[#4285f4] px-3">
          <span className="size-[7px] rounded-full bg-[#ff5f57]" />
          <span className="size-[7px] rounded-full bg-[#febc2e]" />
          <span className="size-[7px] rounded-full bg-[#28c840]" />
          {/* URL bar */}
          <div className="ml-2 flex h-[14px] flex-1 items-center rounded-full bg-white/20 px-2">
            <span className="h-[4px] w-[60px] rounded-full bg-white/40" />
          </div>
          {/* Hamburger */}
          <div className="ml-1 flex flex-col gap-[2.5px]">
            <span className="h-[1.5px] w-[10px] rounded-full bg-white/60" />
            <span className="h-[1.5px] w-[10px] rounded-full bg-white/60" />
            <span className="h-[1.5px] w-[10px] rounded-full bg-white/60" />
          </div>
        </div>

        {/* Page content */}
        <div className="relative flex flex-col gap-3 overflow-hidden p-4">
          {/* Hero placeholder bar (URL/search bar in design) */}
          <div className="h-[14px] w-full overflow-hidden rounded-full bg-[#f0e8d8]">
            <div
              className="h-full rounded-full bg-[#e8c89a]"
              style={{ animation: "progress-fill 2.8s ease-in-out infinite" }}
            />
          </div>

          {/* Content blocks row */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-[28px] flex-1 rounded-md bg-[#f0e8d8]"
                style={{
                  animation: `content-fade 2.8s ease-in-out ${i * 0.18}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Bottom progress bar outline */}
          <div className="h-[10px] w-[80px] rounded-full border border-[#e8e0d8]" />

          {/* Rocket */}
          <div
            className="absolute bottom-[10px] right-[12px]"
            style={{ animation: "rocket-fly 2.8s ease-in-out infinite" }}
          >
            <svg width="38" height="50" viewBox="0 0 38 50" fill="none">
              {/* Body */}
              <path
                d="M19 4C19 4 10 12 10 26h18C28 12 19 4 19 4Z"
                fill="#ff4136"
              />
              {/* Nose */}
              <path
                d="M19 2C16 6 14 10 13 14h12C24 10 22 6 19 2Z"
                fill="#cc2222"
              />
              {/* Window */}
              <circle cx="19" cy="20" r="4" fill="white" fillOpacity="0.9" />
              <circle cx="19" cy="20" r="2.2" fill="#4285f4" />
              {/* Fins */}
              <path d="M10 26L6 34l6-4" fill="#cc2222" />
              <path d="M28 26l4 8-6-4" fill="#cc2222" />
              {/* Exhaust */}
              <rect x="15" y="26" width="8" height="5" rx="1" fill="#888" />
              {/* Flame */}
              <ellipse
                cx="19"
                cy="34"
                rx="5"
                ry="7"
                fill="#ff9500"
                style={{
                  transformOrigin: "19px 28px",
                  animation: "flame-flicker 0.25s ease-in-out infinite",
                }}
              />
              <ellipse
                cx="19"
                cy="35"
                rx="3"
                ry="4.5"
                fill="#ffcc00"
                style={{
                  transformOrigin: "19px 28px",
                  animation: "flame-flicker 0.25s ease-in-out 0.1s infinite",
                }}
              />
              <ellipse
                cx="19"
                cy="35.5"
                rx="1.5"
                ry="2.5"
                fill="white"
                fillOpacity="0.7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import QuickLoadIcon from "@/components/ui/icons/QuickLoadIcon";
import ShieldIcon from "@/components/ui/icons/ShieldIcon";
import StarIcon from "@/components/ui/icons/StarIcon";

export function HostingWhyItMatters() {
  return (
    <section className="w-full bg-[#fef8f6] relative overflow-hidden">
      <Bounded as="div" className="">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <Badge text="Why it matters" className="w-fit" />
          <h2
            className="text-center font-fraunces text-[40px] font-bold leading-normal text-[#221c19] sm:text-[48px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Built to be fast,{" "}
            <span className="text-coral-500">secure and always on</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left column */}
          <div className="flex flex-col gap-6 justify-between lg:flex-1">
            {/* Quick to load — wide card */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-6">
              <div className="flex gap-7">
                <div className="flex flex-col gap-7">
                  <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                    <QuickLoadIcon className="size-8" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                      style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                    >
                      Quick to load
                    </h3>
                    <p className="max-w-[439px] font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                      Fast hosting keeps visitors happy and helps you show up in
                      search results.
                    </p>
                  </div>
                </div>
                {/* Browser + rocket loading animation */}
                <div className="ml-auto hidden shrink-0 lg:block" aria-hidden>
                  <BrowserLoadAnimation />
                </div>
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Secure by default */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6">
                <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                  <ShieldIcon className="size-8" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    Secure by default
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    Free SSL and automatic backups included with every plan.
                  </p>
                </div>
              </div>

              {/* Simple to manage */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6">
                <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                  <StarIcon className="size-8" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    Simple to manage
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    One friendly dashboard — no server knowledge needed. Ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Always on tall card */}
          <div className="flex flex-col gap-6 overflow-hidden rounded-2xl bg-white p-6 lg:w-[508px] lg:shrink-0">
            <div className="flex flex-col gap-7">
              <div className="flex size-17 shrink-0 items-center justify-center rounded-full bg-coral-50">
                <StarIcon className="size-8" />
              </div>
              <div className="flex flex-col gap-4">
                <h3
                  className="font-fraunces text-[32px] font-bold leading-normal text-[#221c19]"
                  style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  Always on
                </h3>
                <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                  99.9% uptime, so your site is there whenever someone looks for
                  you.
                </p>
              </div>
            </div>
            {/* Decorative globe visual */}
            <div className="mt-auto flex items-end justify-center" aria-hidden>
              <div className="flex size-[260px] items-center justify-center rounded-2xl bg-[#fef8f6]">
                <svg viewBox="0 0 100 100" fill="none" width="120" height="120">
                  <rect
                    x="10"
                    y="25"
                    width="80"
                    height="55"
                    rx="6"
                    fill="#2e0d05"
                  />
                  <rect
                    x="16"
                    y="31"
                    width="68"
                    height="40"
                    rx="3"
                    fill="#f7c948"
                  />
                  <circle cx="50" cy="51" r="14" fill="#1877f2" />
                  <ellipse cx="50" cy="51" rx="6" ry="14" fill="#1559b8" />
                  <path d="M36 51h28" stroke="white" strokeWidth="1.2" />
                  <path
                    d="M38 43h24M38 59h24"
                    stroke="white"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="38"
                    y="80"
                    width="24"
                    height="6"
                    rx="2"
                    fill="#6b5f57"
                  />
                  <rect
                    x="30"
                    y="86"
                    width="40"
                    height="4"
                    rx="2"
                    fill="#dcd2c5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
