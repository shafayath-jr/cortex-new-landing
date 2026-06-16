"use client";

import Bounded from "@/components/shared/Bounded";
import { useEffect, useRef, useState } from "react";
import { LuCheck, LuLoader } from "react-icons/lu";
import { Badge } from "@/components/shared/Badge";

// Domain extensions to check
const DOMAIN_EXTENSIONS = [
  { ext: ".com", type: "com" },
  { ext: ".co.uk", type: "co.uk" },
  { ext: ".shop", type: "shop" },
  { ext: ".co", type: "co" },
];

// Social platforms to check
const SOCIAL_PLATFORMS = [
  {
    name: "Instagram",
    id: "instagram",
    icon: "/logo/instagram.svg",
  },
  { name: "X", id: "x", icon: "/logo/twitter.svg" },
  { name: "Facebook", id: "facebook", icon: "/logo/facebook.svg" },
  { name: "TikTok", id: "tiktok", icon: "/logo/tiktok.svg" },
];

/**
 * Deterministically decides availability of a domain/social based on a name string hash.
 * This guarantees the same query always returns the same results (feels like a real checker).
 */
function getDeterministicStatus(
  name: string,
  key: string,
): "available" | "taken" {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!cleanName || cleanName === "rosiesbakery") {
    // Exact match to screenshot mock data for default query
    if (key === "co") return "taken";
    return "available"; // All others are available/free
  }

  let hash = 0;
  for (let i = 0; i < cleanName.length; i++) {
    hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const val = Math.abs(hash);

  // Distribute availability rates realistically
  switch (key) {
    case "com":
      // .com is taken ~65% of the time, especially for short strings
      if (cleanName.length < 6) return "taken";
      return val % 10 < 3.5 ? "available" : "taken";
    case "co.uk":
      return val % 10 < 6 ? "available" : "taken";
    case "shop":
      return val % 10 < 8.5 ? "available" : "taken";
    case "co":
      return val % 10 < 5 ? "available" : "taken";
    case "instagram":
      return val % 10 < 5.5 ? "available" : "taken";
    case "x":
      return val % 10 < 4 ? "available" : "taken";
    case "facebook":
      return val % 10 < 7 ? "available" : "taken";
    case "tiktok":
      return val % 10 < 5 ? "available" : "taken";
    default:
      return "available";
  }
}

export function NameChecker() {
  const [inputValue, setInputValue] = useState("");
  const [currentQuery, setCurrentQuery] = useState("rosiesbakery");
  const [isSearching, setIsSearching] = useState(false);
  const [revealResults, setRevealResults] = useState(true);
  const [staggerCount, setStaggerCount] = useState(8);
  const staggerTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Format clean query for display: remove spaces and special characters, keep lowercase
  const formatHandle = (text: string) => {
    const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean || "rosiesbakery";
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryToSearch = inputValue.trim();
    if (!queryToSearch) return;

    setIsSearching(true);
    setRevealResults(false);
    setStaggerCount(0);

    // Simulate network delay for checking
    setTimeout(() => {
      setCurrentQuery(formatHandle(queryToSearch));
      setIsSearching(false);
      setRevealResults(true);
    }, 1200);
  };

  // Run a staggered visual check animation when search completes
  useEffect(() => {
    if (revealResults) {
      if (staggerTimerRef.current) clearInterval(staggerTimerRef.current);

      let current = 0;
      staggerTimerRef.current = setInterval(() => {
        current += 1;
        setStaggerCount(current);
        if (current >= 8) {
          if (staggerTimerRef.current) clearInterval(staggerTimerRef.current);
        }
      }, 80);
    }

    return () => {
      if (staggerTimerRef.current) clearInterval(staggerTimerRef.current);
    };
  }, [revealResults]);

  const queryName = currentQuery;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Bounded
        as="div"
        className="flex flex-col lg:flex-row items-center justify-between 2xl:justify-evenly gap-12 lg:gap-16"
      >
        {/* Left Column (Content & Search Input) */}
        <div className="flex flex-col flex-1 items-start text-left max-w-167 w-full">
          <Badge text="Name Check" />

          {/* Heading */}
          <h2 className="font-fraunces font-bold text-[#221C19] leading-13 text-4xl sm:text-5xl lg:text-[48px] tracking-normal my-4">
            <span className="text-coral-500">Get a name</span> that works
            everywhere
          </h2>

          {/* Subtitle / Description */}
          <p className="font-figtree text-[19px] leading-7 text-[#6B5F57]">
            Before you fall in love with a name, check it's free where it
            counts. One search shows your web address and the matching
            Instagram, TikTok, X, Facebook and YouTube handles together.
          </p>

          {/* Search Input Box */}
          <form
            onSubmit={handleSearchSubmit}
            className="font-figtree mt-6 w-full relative"
          >
            <div className="flex w-full items-center justify-between gap-3 rounded-full border border-[#DCD2C5] bg-white p-2  focus-within:ring-1 focus-within:ring-coral-500 transition-all shadow-2xs">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Try 'rosies bakery'...."
                className="w-full bg-transparent border-none outline-none pl-4 text-[#2E0D05] placeholder-[#9C9089] text-[16px] font-normal"
              />

              <button
                type="submit"
                disabled={isSearching}
                className="inline-flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 disabled:bg-coral-400 active:scale-[0.98] text-white rounded-full px-5 py-2.5 text-[19px] font-normal transition-all duration-200  cursor-pointer min-w-fit"
              >
                {isSearching ? (
                  <LuLoader className="size-5 animate-spin" />
                ) : (
                  <span>Check</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column (Results Peach Card) */}
        <div className="flex-1 w-full max-w-119.25 xl:max-w-lg">
          <div className="bg-[#FEF8F6] rounded-[30px] p-8 border border-[#F4EEE4] shadow-[0_2px_20px_0_rgba(232,232,232,0.60)] flex flex-col gap-6 relative transition-all duration-300">
            {/* Domain Section */}
            <div>
              <h3 className="font-fraunces text-[18px] font-bold text-[#221C19] leading-5 mb-5">
                Domain
              </h3>

              <div className="flex flex-col gap-3">
                {DOMAIN_EXTENSIONS.map((item, idx) => {
                  const domainName = `${queryName}${item.ext}`;
                  const isVisible = revealResults && staggerCount > idx;
                  const isChecking = isSearching || !isVisible;

                  // Compute deterministic availability
                  const status = getDeterministicStatus(queryName, item.type);

                  return (
                    <div
                      key={item.ext}
                      className="bg-white rounded-full pl-4 pr-2.5 py-2.75 flex items-center justify-between border border-[#F1EEEA] shadow-[0_2px_8px_rgba(46,13,5,0.01)] hover:shadow-md hover:-translate-y-px transition-all duration-300"
                    >
                      {status === "available" ? (
                        <span className="font-figtree text-[#221C19] font-semibold text-[14px] select-all truncate max-w-55">
                          {domainName}
                        </span>
                      ) : (
                        <span className="font-figtree text-[#9C9089] font-semibold text-[14px] select-all truncate max-w-55">
                          {domainName}
                        </span>
                      )}

                      {isChecking ? (
                        <div className="bg-zinc-100/80 text-zinc-400 text-[13px] font-fraunces font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 animate-pulse">
                          <LuLoader className="size-3 animate-spin text-zinc-400" />
                          <span>checking</span>
                        </div>
                      ) : status === "available" ? (
                        <div className="bg-[#E3F3EC] text-[#0A6E53] text-[13px] px-3.5 py-2 rounded-full flex items-center justify-center gap-1 hover:scale-[1.03] transition-transform select-none font-fraunces min-w-25">
                          <LuCheck className="size-3.5 text-[#0A6E53] stroke-3" />
                          <span>available</span>
                        </div>
                      ) : (
                        <div className="bg-[#F4EEE4] text-[#6B5F57] text-[13px] font-semibold px-3.5 py-2 rounded-full select-none font-fraunces min-w-25 flex items-center gap-1 justify-center">
                          <span>taken</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Handles Section */}
            <div>
              <h3 className="font-fraunces text-[18px] font-bold text-[#221C19] leading-5 mb-5">
                Social Handles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_PLATFORMS.map((platform, idx) => {
                  const displayIndex = idx + 4; // Stagger after the domains
                  const isVisible =
                    revealResults && staggerCount > displayIndex;
                  const isChecking = isSearching || !isVisible;

                  // Compute deterministic availability
                  const status = getDeterministicStatus(queryName, platform.id);
                  const Icon = platform.icon;

                  return (
                    <div
                      key={platform.id}
                      className="bg-white rounded-full py-0.75 pl-0.75 pr-3 flex items-center justify-between border border-[#F1EEEA] shadow-[0_2px_8px_rgba(46,13,5,0.01)] hover:shadow-md transition-all duration-300 gap-2"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Icon Badge */}
                        <img
                          src={Icon}
                          alt={platform.name}
                          className="size-9 object-cover rounded-full shrink-0"
                        />

                        {/* Handle */}
                        <span className="font-figtree text-[#221C19] font-medium text-[13px] truncate select-all">
                          @{queryName}
                        </span>
                      </div>

                      {isChecking ? (
                        <div className="size-2 rounded-full bg-zinc-200 animate-pulse shrink-0 mr-2" />
                      ) : status === "available" ? (
                        <span className="font-figtree text-[#0A6E53] font-medium text-[13px] select-none">
                          free
                        </span>
                      ) : (
                        <span className="font-figtree text-[#6B5F57] font-medium text-[13px] select-none">
                          taken
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
