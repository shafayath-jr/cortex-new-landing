"use client";

import { useState } from "react";

const DOMAIN_RESULTS = [
  { domain: "rosiesbakery.com", available: true },
  { domain: "rosiesbakery.co.uk", available: true },
  { domain: "rosiesbakery.shop", available: true },
  { domain: "rosiesbakery.co.uk", available: false },
];

const SOCIAL_HANDLES = [
  {
    name: "Instagram",
    handle: "@rosiesbakery",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[15px]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    iconBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    iconText: "text-white",
  },
  {
    name: "X",
    handle: "@rosiesbakery",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[15px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
    iconBg: "bg-black",
    iconText: "text-white",
  },
  {
    name: "Facebook",
    handle: "@rosiesbakery",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[15px]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    iconBg: "bg-[#1877F2]",
    iconText: "text-white",
  },
  {
    name: "TikTok",
    handle: "@rosiesbakery",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[15px]">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
      </svg>
    ),
    iconBg: "bg-black",
    iconText: "text-white",
  },
];

export function DomainSearch() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Left — copy + search */}
          <div className="flex flex-1 flex-col items-start gap-6">
            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-coral-100 px-4 py-1.5 font-figtree text-sm font-semibold text-coral-600">
              Name Check
            </span>

            {/* Heading */}
            <h2 className="font-fraunces text-4xl font-bold leading-tight text-[#2e0d05] sm:text-5xl lg:text-[52px]">
              Get a{" "}
              <span className="text-coral-500">name</span>{" "}
              that works everywhere
            </h2>

            {/* Body */}
            <p className="max-w-lg font-figtree text-lg leading-relaxed text-[#6b5f57]">
              Before you fall in love with a name, check it&apos;s free where it counts. One search shows your web address and the matching Instagram, TikTok, X, Facebook and YouTube handles together.
            </p>

            {/* Search input */}
            <div className="flex w-full max-w-lg items-center overflow-hidden rounded-full border border-[#dcd2c5] bg-white pr-1.5 shadow-sm">
              <input
                type="text"
                placeholder="Try 'rosies bakery'...."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 bg-transparent px-5 py-4 font-figtree text-base text-[#2e0d05] placeholder-[#9c9089] outline-none"
              />
              <button className="flex h-12 items-center justify-center rounded-full bg-coral-500 px-6 font-figtree text-base font-semibold text-white transition-colors hover:bg-coral-600 active:scale-95">
                Check
              </button>
            </div>
          </div>

          {/* Right — Domain results card */}
          <div className="w-full max-w-lg flex-shrink-0 lg:max-w-[477px]">
            <div className="rounded-2xl border border-[#f1eeea] bg-[#fef8f6] p-8 shadow-sm">
              {/* Domain section */}
              <div className="mb-6">
                <p className="mb-3 font-figtree text-base font-semibold text-[#2e0d05]">Domain</p>
                <div className="flex flex-col gap-0">
                  {DOMAIN_RESULTS.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between border-b border-[#f1eeea] py-3.5 ${
                        item.available ? "" : "opacity-50"
                      }`}
                    >
                      <span className={`font-figtree text-[15px] ${item.available ? "font-medium text-[#2e0d05]" : "text-[#9c9089]"}`}>
                        {item.domain}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 font-figtree text-xs font-semibold ${
                          item.available
                            ? "bg-[#e8f5ef] text-[#1a8a50]"
                            : "bg-[#fdf0ec] text-[#9c9089]"
                        }`}
                      >
                        {item.available ? "available" : "taken"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social handles section */}
              <div>
                <p className="mb-3 font-figtree text-base font-semibold text-[#2e0d05]">Social Handles</p>
                <div className="grid grid-cols-2 gap-2">
                  {SOCIAL_HANDLES.map((s) => (
                    <div key={s.name} className="flex items-center gap-2.5 rounded-xl border border-[#f1eeea] bg-white px-3 py-2.5">
                      <div className={`flex size-[39px] shrink-0 items-center justify-center rounded-lg ${s.iconBg} ${s.iconText}`}>
                        {s.icon}
                      </div>
                      <div>
                        <p className="font-figtree text-xs font-medium text-[#2e0d05]">{s.handle}</p>
                        <p className="font-figtree text-[11px] font-semibold text-coral-500">free</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
