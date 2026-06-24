"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import RightArrowIcon from "@/components/ui/icons/RightArrowIcon";
import { checkDomains } from "@/lib/domain";
import type { DomainEnding } from "@/lib/domain-endings";
import { useState } from "react";

const RELATED: Record<string, string[]> = {
  "co.uk": [".com", ".uk"],
  com: [".co.uk", ".net"],
  io: [".com", ".dev"],
  dev: [".com", ".io"],
  ai: [".com", ".io"],
  app: [".com", ".dev"],
  shop: [".com", ".store"],
  store: [".com", ".shop"],
  studio: [".com", ".design"],
  design: [".com", ".studio"],
};

function getRelated(slug: string): string[] {
  return RELATED[slug] ?? [".com", ".net"];
}

function toSlug(raw: string) {
  return raw.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isAvailableSim(slug: string, tld: string): boolean {
  const sum = [...(slug + tld)].reduce((a, c) => a + c.charCodeAt(0), 0);
  return sum % 100 >= 25;
}

interface ResultItem {
  name: string;
  available: boolean;
}

function CheckIcon() {
  return (
    <svg
      className="size-[14.5px] text-jade-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "size-4 text-[#6b5f57]"}
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
  );
}

function ResultCard({ item }: { item: ResultItem }) {
  if (item.available) {
    return (
      <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-[38px] border border-jade-500 bg-[rgba(227,243,236,0.3)] px-[7px] py-2">
        <span className="flex w-[29px] shrink-0 items-center justify-center rounded-full bg-jade-100 py-[7.25px]">
          <CheckIcon />
        </span>
        <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
          <span className="truncate font-figtree text-[12px] font-medium text-[#221c19]">
            {item.name}
          </span>
          <button
            type="button"
            className="flex shrink-0 items-center gap-[3px] rounded-[18px] bg-coral-500 px-[19px] py-2 font-figtree text-[11px] font-medium text-[#fef8f6] transition-colors hover:bg-coral-600"
          >
            Add
            <RightArrowIcon className="size-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-[38px] border border-[#efe7da] bg-[#fef8f6] px-[7px] py-2">
      <span className="flex w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,210,197,0.5)] px-[9px] py-2">
        <XIcon />
      </span>
      <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
        <span className="truncate font-figtree text-[12px] font-medium text-[#9c9089]">
          {item.name}
        </span>
        <span className="flex w-[82px] shrink-0 items-center justify-center gap-[3px] rounded-[34px] bg-[rgba(220,210,197,0.5)] px-[9px] py-2 font-figtree text-[11px] font-medium text-[#6b5f57]">
          <XIcon className="size-4" />
          Taken
        </span>
      </div>
    </div>
  );
}

export function EndingDetailHero({ ending }: { ending: DomainEnding }) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ResultItem[] | null>(null);
  const [searchedFor, setSearchedFor] = useState("");

  const tagline =
    ending.tagline.charAt(0).toLowerCase() + ending.tagline.slice(1);

  const handleSearch = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const slug = toSlug(query);
    if (!slug) return;

    setIsLoading(true);
    setSearchedFor(slug + ending.ext);
    setResults(null);

    const relatedExts = getRelated(ending.slug);
    const allExts = [ending.ext, ...relatedExts];

    try {
      const apiResults = await checkDomains(slug, allExts);
      setResults(
        allExts.map((ext) => {
          const fullName = slug + ext;
          const found = apiResults.find(
            (r) => r.domain.toLowerCase() === fullName.toLowerCase(),
          );
          return {
            name: fullName,
            available: found ? found.available : isAvailableSim(slug, ext),
          };
        }),
      );
    } catch {
      setResults(
        allExts.map((ext) => ({
          name: slug + ext,
          available: isAvailableSim(slug, ext),
        })),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6]">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-[18%] size-[400px] translate-x-1/2 rounded-full bg-coral-500/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-52 top-[30%] size-[381px] rounded-full bg-coral-500/8 blur-[100px]"
      />

      <Bounded
        as="div"
        className="relative flex flex-col items-center gap-[42px] py-[90px]"
      >
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <Badge text="Domains" className="w-fit" />

          <h1 className="font-fraunces font-bold  text-[#2E0D05] leading-10 md:leading-19 tracking-normal text-4xl sm:text-5xl md:text-6xl lg:text-[66px]">
            Register your{" "}
            <span className="text-coral-500">{ending.ext} domain</span>
          </h1>

          <p className="font-figtree text-[17px] leading-[1.5] text-[#6b5f57] sm:text-[19px]">
            {ending.ext} — {tagline}
          </p>
        </div>

        <div className="w-full rounded-[24px] bg-white pb-[18px] pl-[21px] pr-[22px] pt-[22px] shadow-[0px_8px_16px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-2.5">
            <form onSubmit={handleSearch}>
              <div className="flex h-16 items-center justify-between gap-2 rounded-[32px] border border-[#dcd2c5] bg-[rgba(244,238,228,0.3)] py-2 pl-4 pr-2.5">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${ending.ext} domains…`}
                  className="flex-1 bg-transparent font-figtree text-base text-[#221c19] placeholder-[#9c9089] outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="inline-flex shrink-0 items-center justify-center rounded-[28px] bg-coral-500 px-5 py-[9.5px] font-figtree text-[19px] font-normal text-white transition-colors hover:bg-coral-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <svg
                      className="size-5 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    "Check"
                  )}
                </button>
              </div>
            </form>

            {results && (
              <div className="flex flex-col gap-[17px]">
                <p className="font-fraunces text-[18px] font-bold leading-[1.08] text-[#221c19]">
                  Results for : {searchedFor}
                </p>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-2">
                  {results.map((item) => (
                    <ResultCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Bounded>
    </section>
  );
}
