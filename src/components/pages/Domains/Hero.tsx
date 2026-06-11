"use client";

import { useState } from "react";
import Link from "next/link";

// ── Static demo data ────────────────────────────────────────────────────
const DEMO_DOMAINS = [
  { name: "rosiesbakery.com",    available: true,  price: "from £12/yr" },
  { name: "rosiesbakery.co.uk",  available: true,  price: "from £8/yr"  },
  { name: "rosiesbakery.shop",   available: true,  price: "from £12/yr" },
  { name: "rosiesbakery.studio", available: false, price: "from £18/yr" },
];

const DEMO_HANDLES = [
  {
    platform: "Instagram",
    handle: "@rosiesbakery",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    iconBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    iconColor: "text-white",
  },
  {
    platform: "X",
    handle: "@rosiesbakery",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
    iconBg: "bg-[#221c19]",
    iconColor: "text-white",
  },
  {
    platform: "Facebook",
    handle: "@rosiesbakery",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    iconBg: "bg-[#1877F2]",
    iconColor: "text-white",
  },
  {
    platform: "TikTok",
    handle: "@rosiesbakery",
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
      </svg>
    ),
    iconBg: "bg-[#221c19]/10",
    iconColor: "text-[#221c19]",
  },
];

// ── Sub-components ───────────────────────────────────────────────────────
function AvailableBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-jade-50 px-2.5 py-1.5 font-figtree text-[11px] font-medium text-jade-700">
      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      Available
    </span>
  );
}

function TakenBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#dcd2c5]/50 px-2.5 py-1.5 font-figtree text-[11px] font-medium text-[#6b5f57]">
      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      Taken
    </span>
  );
}

// ── Main component ───────────────────────────────────────────────────────
export function DomainsHero() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) setSearched(true);
  };

  // Use demo data when no search yet, or simulate results
  const domains   = DEMO_DOMAINS;
  const handles   = DEMO_HANDLES;
  const showCard  = true; // always show the card (Figma shows it pre-filled)

  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6] py-[90px]">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-[18%] size-[459px] translate-x-1/2 rounded-full bg-coral-500/10 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-[30%] size-[408px] rounded-full bg-coral-500/8 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-[42px] px-6 sm:px-8">

        {/* ── Hero copy ─────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center rounded-[28px] bg-linear-to-r from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
              Domains
            </span>

            <h1 className="max-w-[802px] font-fraunces text-5xl font-bold leading-[1.06] text-[#2e0d05] md:text-6xl lg:text-[72px]">
              Find a name that&apos;s{" "}
              <span className="text-coral-500">yours everywhere</span>
            </h1>

            <p className="max-w-[660px] font-figtree text-[17px] leading-normal text-[#6b5f57] sm:text-[19px]">
              Search your domain and the matching social handles together — so
              your brand lines up across the web, Instagram, TikTok and more.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2.5 sm:flex-row">
            <Link
              href="#search"
              className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Build for free</span>
              <svg className="size-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#templates"
              className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-full border border-[#dcd2c5] bg-white px-6 font-figtree text-base font-medium text-[#2e0d05] transition-all duration-200 hover:bg-[#fef8f6] active:scale-[0.98]"
            >
              <span>See Templates</span>
              <svg className="size-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Search card ───────────────────────────────────── */}
        {showCard && (
          <div id="search" className="w-full rounded-[24px] bg-white p-[18px_22px_18px_21px] shadow-[0px_8px_16px_rgba(0,0,0,0.08)]">
            {/* Search bar */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex h-16 items-center justify-between gap-2 rounded-full border border-[#dcd2c5] bg-[rgba(244,238,228,0.3)] pl-4 pr-2.5 py-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try 'rosies bakery'...."
                  className="flex-1 bg-transparent font-figtree text-base text-[#221c19] placeholder-[#9c9089] outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-coral-500 px-5 font-figtree text-base font-normal text-white transition-colors hover:bg-coral-600 active:scale-95"
                >
                  Check
                </button>
              </div>
            </form>

            <div className="flex flex-col gap-4">
              {/* Domain results */}
              <div className="flex flex-col gap-[17px]">
                <p className="font-fraunces text-[18px] font-bold leading-[1.08] text-[#221c19]">Domain</p>
                <div className="flex flex-col gap-2">
                  {domains.map((d) => (
                    <div
                      key={d.name}
                      className="flex items-center justify-between rounded-full border border-[#f4eee4] bg-[rgba(250,246,239,0.6)] px-4 py-2.5"
                    >
                      <div className="flex flex-1 items-center gap-4 sm:gap-8">
                        <span className="min-w-[160px] font-figtree text-[13px] font-medium text-[#221c19]">
                          {d.name}
                        </span>
                        {d.available ? <AvailableBadge /> : <TakenBadge />}
                        <span className="font-figtree text-[13px] font-medium text-[#221c19]">
                          {d.price}
                        </span>
                      </div>
                      <button
                        className={`inline-flex items-center gap-1 rounded-[14px] px-4 py-2 font-figtree text-[11px] font-medium transition-colors ${
                          d.available
                            ? "bg-coral-500 text-white hover:bg-coral-600"
                            : "bg-coral-500/60 text-white cursor-not-allowed"
                        }`}
                        disabled={!d.available}
                      >
                        Add
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social handles */}
              <div className="flex flex-col gap-[17px]">
                <p className="font-fraunces text-[18px] font-bold leading-[1.08] text-[#221c19]">Social Handles</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {handles.map((h) => (
                    <div
                      key={h.platform}
                      className="flex items-center justify-between gap-2 rounded-full border border-[#f1eeea] bg-white py-1.5 pl-1.5 pr-3"
                    >
                      <div className={`flex size-[39px] shrink-0 items-center justify-center rounded-full ${h.iconBg} ${h.iconColor}`}>
                        {h.icon}
                      </div>
                      <span className="flex-1 truncate font-figtree text-[12px] text-[#221c19]">
                        {h.handle}
                      </span>
                      <AvailableBadge />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
