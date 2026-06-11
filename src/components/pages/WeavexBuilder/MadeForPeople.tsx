import Image from "next/image";

const FEATURES = [
  {
    id: "allinone",
    title: "All in one place",
    description: "Website, name, email and security from one account — no juggling.",
    active: true,
  },
  {
    id: "free",
    title: "Free to start",
    description: "",
    active: false,
  },
  {
    id: "name",
    title: "Your name, everywhere",
    description: "",
    active: false,
  },
  {
    id: "support",
    title: "Real support",
    description: "",
    active: false,
  },
];

function HotSaleIcon({ active }: { active: boolean }) {
  return (
    <div className={`flex size-[76px] shrink-0 items-center justify-center rounded-2xl ${active ? "bg-white/20" : "bg-coral-50"}`}>
      <svg viewBox="0 0 50 50" fill="none" className="size-[50px]">
        {/* Flame icon */}
        <path
          d="M25 3C25 3 32 12 32 20C32 24.4 29.8 27.4 27 29C27.2 27.4 26.8 25.8 26 24.4C25 22.8 23.6 21.6 22 21C22.8 22.8 22.6 24.8 21.8 26.4C21 28 19.6 29.2 18 30C17 28.6 16.4 27 16 25.2C15.4 22.4 16 19.4 17.6 17C18.4 21 20.4 22.2 22 22.2C20.6 20.6 19.8 18.6 20 16.4C20.2 13.8 21.6 11.4 23.4 9.8C22.8 12 22.6 14.4 23.4 16.6C24.2 18.6 25.8 20.2 27.8 20.8C28.2 15.4 26.2 9.4 25 3Z"
          fill={active ? "white" : "#F24E29"}
        />
        <path
          d="M25 47C19.5 47 15 42.5 15 37C15 33 17.5 29.6 21 28.2C20.8 29.2 20.8 30.2 21.2 31.2C21.6 32.4 22.6 33.4 24 34C23.6 32.8 23.8 31.4 24.6 30.4C25.4 31.4 26 32.6 26 34C28.4 32.8 30 30.4 30 27.8C30 27.6 30 27.4 30 27.2C32 29.4 35 32.8 35 37C35 42.5 30.5 47 25 47Z"
          fill={active ? "white" : "#F24E29"}
        />
        {/* Percentage text */}
        <text x="25" y="43" textAnchor="middle" fontSize="10" fontWeight="700" fill={active ? "#F24E29" : "white"}>%</text>
      </svg>
    </div>
  );
}

export function MadeForPeople() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="inline-flex items-center rounded-full bg-coral-100 px-4 py-1.5 font-figtree text-sm font-semibold text-coral-600">
            Why Cortexgrip
          </span>
          <h2 className="font-fraunces text-4xl font-bold leading-tight text-[#2e0d05] sm:text-5xl">
            Made for people,{" "}
            <span className="text-coral-500">not techies</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
          {/* Left — Woman barista photo */}
          <div className="relative w-full overflow-hidden rounded-2xl lg:h-auto lg:w-[571px] lg:shrink-0">
            <Image
              src="/images/weavex/woman-barista.jpg"
              alt="Business owner smiling in her shop"
              width={571}
              height={645}
              className="h-full min-h-[400px] w-full object-cover lg:min-h-0"
            />
          </div>

          {/* Right — Feature cards */}
          <div className="flex flex-1 flex-col gap-0">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className={`flex items-center justify-between gap-6 rounded-2xl px-8 py-6 ${
                  feature.active
                    ? "bg-coral-500 text-white"
                    : "border-b border-[#f1eeea] bg-[#fef8f6] text-[#2e0d05]"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className={`font-fraunces text-2xl font-bold leading-tight ${
                      feature.active ? "text-white" : "text-[#2e0d05]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className={`font-figtree text-[17px] leading-relaxed ${feature.active ? "text-white/90" : "text-[#6b5f57]"}`}>
                      {feature.description}
                    </p>
                  )}
                </div>
                <HotSaleIcon active={feature.active} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
