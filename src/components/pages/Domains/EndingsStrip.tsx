const ENDINGS = [
  ".com", ".co.uk", ".shop", ".studio", ".io", ".net", ".org", ".app",
  ".store", ".online", ".info", ".biz", ".design", ".tech", ".digital",
  ".co", ".me", ".ai", ".dev", ".agency", ".media", ".photography",
  ".services", ".solutions", ".consulting", ".events", ".club", ".space",
  ".life", ".world", ".today", ".health", ".fitness", ".beauty", ".art",
  ".music", ".food", ".kitchen", ".cafe", ".bar", ".pizza", ".salon",
  ".plumbing", ".repairs", ".cleaning", ".legal", ".accountant", ".estate",
];

function Pill({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-[40px] border border-coral-200 bg-[#fef8f6] px-7 py-5">
      <span className="font-figtree text-[26px] font-semibold leading-[1.1] text-coral-500 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export function EndingsStrip() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6] py-[80px]">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-163px] top-[-105px] size-[326px] rounded-full bg-coral-500/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-105px] right-[-163px] size-[325px] rounded-full bg-coral-500/10 blur-[120px]"
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center rounded-[18px] bg-linear-to-l from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
            Endings strip
          </span>

          <h2
            className="text-center font-fraunces text-[40px] font-bold leading-[1.08] sm:text-[48px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            <span className="text-coral-500">500+ endings</span>
            <span className="text-[#221c19]"> to make it yours</span>
          </h2>
        </div>

        {/* Marquee strip */}
        <div className="w-full overflow-hidden py-10">
          <div className="flex w-max animate-marquee gap-6">
            {/* Two copies for seamless loop */}
            {[...ENDINGS, ...ENDINGS].map((ending, i) => (
              <Pill key={i} label={ending} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
