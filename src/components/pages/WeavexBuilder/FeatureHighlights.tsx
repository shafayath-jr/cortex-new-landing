const FEATURES = [
  {
    id: "ai",
    title: "Built for you, by AI",
    description:
      "No blank page. Weavex writes the first version so you're editing, not starting from scratch.",
  },
  {
    id: "edit",
    title: "Click to edit",
    description:
      "If you can use a phone, you can edit your site. No code, nothing to break.",
  },
  {
    id: "responsive",
    title: "Looks great on every screen",
    description:
      "Your site works beautifully on phones, tablets and computers automatically.",
  },
  {
    id: "grows",
    title: "Grows with you",
    description:
      "Start simple, add pages, booking, shop or blog as your business grows.",
  },
  {
    id: "ownership",
    title: "Yours to keep",
    description:
      "You own your site and everything in it. No lock-in, cancel anytime.",
  },
  {
    id: "free",
    title: "Free to start",
    description:
      "Build and publish for free. Upgrade only when you're ready.",
  },
];

function SparkleIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z"
        fill="#f24e29"
        opacity="0.2"
      />
      <path
        d="M12 4.5L13.1 10.9L19.5 12L13.1 13.1L12 19.5L10.9 13.1L4.5 12L10.9 10.9L12 4.5Z"
        fill="#f24e29"
      />
    </svg>
  );
}

export function FeatureHighlights() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6] py-16 md:py-20 lg:py-[80px]">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[325px] rounded-full bg-coral-500/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 -top-20 size-[326px] rounded-full bg-coral-500/10 blur-[100px]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 sm:px-8 lg:gap-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-[18px] bg-linear-to-l from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
            Feature Highlights
          </span>
          <h2 className="font-fraunces text-4xl font-bold leading-normal text-[#221c19] sm:text-5xl lg:text-[48px]">
            Everything you need,{" "}
            <span className="text-coral-500">nothing you don&apos;t</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start gap-[45px] rounded-2xl bg-white px-6 py-6 pr-4"
            >
              {/* Icon */}
              <div className="flex size-[68px] shrink-0 items-center justify-center rounded-[34px] bg-coral-50 p-[22px]">
                <SparkleIcon />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4">
                <h3 className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]">
                  {feature.title}
                </h3>
                <p className="font-figtree text-[17px] leading-[1.6] text-[#6b5f57]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
