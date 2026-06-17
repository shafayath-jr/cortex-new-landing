"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import RightArrowIcon from "@/components/ui/icons/RightArrowIcon";
import Link from "next/link";
import { useState } from "react";

// ── Domain generation ────────────────────────────────────────────────────
const TLDS = [
  { ext: ".com", price: "from £12/yr" },
  { ext: ".co.uk", price: "from £8/yr" },
  { ext: ".shop", price: "from £12/yr" },
  { ext: ".studio", price: "from £18/yr" },
  { ext: ".io", price: "from £35/yr" },
  { ext: ".net", price: "from £14/yr" },
];

// Deterministic availability sim — consistent per slug+tld pair
const TAKEN_WEIGHT: Record<string, number> = {
  ".com": 18,
  ".co.uk": 28,
  ".shop": 12,
  ".studio": 24,
  ".io": 42,
  ".net": 33,
};

function isAvailable(slug: string, tld: string): boolean {
  const sum = [...(slug + tld)].reduce((a, c) => a + c.charCodeAt(0), 0);
  return sum % 100 >= (TAKEN_WEIGHT[tld] ?? 25);
}

/** Slugify: lowercase, strip non-alphanumeric */
function toSlug(raw: string) {
  return raw.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function generateDomains(slug: string) {
  return TLDS.map(({ ext, price }) => ({
    name: slug + ext,
    available: isAvailable(slug, ext),
    price,
  }));
}

const PLATFORM_META = [
  {
    platform: "Instagram",
    icon: "/logo/instagram.svg",
  },
  {
    platform: "X",
    icon: "/logo/twitter.svg",
  },
  {
    platform: "Facebook",
    icon: "/logo/facebook.svg",
  },
  {
    platform: "TikTok",
    icon: "/logo/tiktok.svg",
  },
];

function generateHandles(slug: string) {
  return PLATFORM_META.map((p) => ({
    ...p,
    handle: `@${slug}`,
    available: isAvailable(slug, p.platform),
  }));
}

const DEMO_DOMAINS = generateDomains("rosiesbakery");
const DEMO_HANDLES = generateHandles("rosiesbakery");

// ── Sub-components ───────────────────────────────────────────────────────
function AvailableBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-jade-50 px-2.5 py-2 font-figtree text-[11px] font-medium text-jade-700">
      <svg
        className="size-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      Available
    </span>
  );
}

function TakenBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#dcd2c5]/50 px-2.5 py-1.5 font-figtree text-[11px] font-medium text-[#6b5f57]">
      <svg
        className="size-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      Taken
    </span>
  );
}

// ── Main component ───────────────────────────────────────────────────────
export function DomainsHero() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [activeSlug, setActiveSlug] = useState("rosiesbakery");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = toSlug(query);
    if (!slug) return;
    setActiveSlug(slug);
    setSearched(true);
  };

  const domains = searched ? generateDomains(activeSlug) : DEMO_DOMAINS;
  const handles = searched ? generateHandles(activeSlug) : DEMO_HANDLES;
  const showCard = true;

  return (
    <section className="relative w-full overflow-hidden bg-[#FEF8F6]">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-[18%] size-[459px] translate-x-1/2 rounded-full bg-coral-500/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[30%] size-[408px] rounded-full bg-coral-500/8 blur-[100px]"
      />

      <Bounded className="relative flex flex-col items-center gap-[42px]">
        {/* ── Hero copy ─────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <Badge text="Domains" className="w-fit" />

            <h1 className="max-w-[802px] font-fraunces text-5xl font-bold lg:leading-19 text-[#2e0d05] md:text-6xl lg:text-[66px]">
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
              <RightArrowIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#templates"
              className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-full border border-[#dcd2c5] bg-white px-6 font-figtree text-base font-medium text-[#2e0d05] transition-all duration-200 hover:bg-[#fef8f6] active:scale-[0.98]"
            >
              <span>See Templates</span>
              <RightArrowIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Search card ───────────────────────────────────── */}
        {showCard && (
          <div
            id="search"
            className="w-full rounded-[24px] bg-white p-[18px_22px_18px_21px] shadow-[0px_8px_16px_rgba(0,0,0,0.08)]"
          >
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
              {searched && (
                <p className="font-figtree text-[13px] text-[#9c9089]">
                  Showing results for{" "}
                  <span className="font-semibold text-[#221c19]">
                    {activeSlug}
                  </span>
                </p>
              )}
              {/* Domain results */}
              <div className="flex flex-col gap-[17px]">
                <p className="font-fraunces text-[18px] font-bold leading-[1.08] text-[#221c19]">
                  Domain
                </p>
                <div className="flex flex-col gap-2">
                  {domains.map((d) => (
                    <div
                      key={d.name}
                      className="flex items-center justify-between rounded-full border border-[#f4eee4] bg-[rgba(250,246,239,0.6)] px-4 py-2.5"
                    >
                      <div className="flex flex-1 items-center gap-4">
                        <span className="w-[180px] shrink-0 font-figtree text-[13px] font-medium text-[#221c19]">
                          {d.name}
                        </span>
                        <div className="w-[90px] shrink-0">
                          {d.available ? <AvailableBadge /> : <TakenBadge />}
                        </div>
                        <span className="w-[90px] shrink-0 font-figtree text-[13px] font-medium text-[#221c19]">
                          {d.price}
                        </span>
                      </div>
                      <button
                        className={`flex items-center gap-1 rounded-[14px] px-4.5 py-2 font-figtree text-[12px] transition-colors ${
                          d.available
                            ? "bg-coral-500 text-white hover:bg-coral-600"
                            : "bg-coral-500/60 text-white cursor-not-allowed"
                        }`}
                        disabled={!d.available}
                      >
                        <span>Add</span>
                        <RightArrowIcon className="size-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social handles */}
              <div className="flex flex-col gap-4.25">
                <p className="font-fraunces text-[18px] font-bold leading-[1.08] text-[#221c19]">
                  Social Handles
                </p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
                  {handles.map((h) => (
                    <div
                      key={h.platform}
                      className="flex items-center justify-between gap-2 rounded-full border border-[#f1eeea] bg-white py-0.75 pl-0.75 pr-1.75"
                    >
                      <img
                        src={h.icon}
                        alt={h.platform}
                        className="size-10 object-cover rounded-full shrink-0"
                      />
                      <span className="flex-1 truncate font-figtree text-[12px] text-[#221c19]">
                        {h.handle}
                      </span>
                      {h.available ? <AvailableBadge /> : <TakenBadge />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Bounded>
    </section>
  );
}
