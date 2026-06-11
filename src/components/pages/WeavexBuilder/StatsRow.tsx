const STATS = [
  { value: "500+", label: "Domain name endings" },
  { value: "99.9%", label: "Uptime guarantee" },
  { value: "Free", label: "SSL on every site" },
];

export function StatsRow() {
  return (
    <section className="w-full bg-[#fef8f6] py-14">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0">
          {STATS.map((stat, idx) => (
            <div key={stat.value} className="flex flex-1 items-center">
              {/* Vertical divider before item (not first) */}
              {idx > 0 && (
                <div className="mr-12 hidden h-[67px] w-px shrink-0 bg-[#dcd2c5] sm:block" />
              )}
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-fraunces text-[49px] font-bold leading-none text-[#2e0d05]">
                  {stat.value}
                </span>
                <span className="font-figtree text-[17px] text-[#6b5f57]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
