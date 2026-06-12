import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const STEPS = [
  {
    number: "01",
    badge: "1st Step",
    title: "Describe your business in a sentence.",
    description:
      "Just type what you do — \"a bakery\", \"a yoga studio\". That's your starting point.",
    lottie: "/lottie/weavex/website-builder/lottie.json",
    cardAlign: "items-center",
  },
  {
    number: "02",
    badge: "2nd Step",
    title: "Weavex builds a complete first draft.",
    description: "Pages, words, layout and images — ready in minutes. No blank page.",
    lottie: "/lottie/weavex/website-builder/lottie-2.json",
    cardAlign: "items-center",
  },
  {
    number: "03",
    badge: "3rd Step",
    title: "Edit anything by clicking it.",
    description: "Swap photos, change words, add pages. No code, nothing to break.",
    lottie: "/lottie/weavex/website-builder/lottie-3.json",
    cardAlign: "items-start",
  },
  {
    number: "04",
    badge: "4th Step",
    title: "Publish. You're live with security built in.",
    description: "Your site goes live instantly, free, with SSL included automatically.",
    lottie: "/lottie/weavex/website-builder/lottie-4.json",
    cardAlign: "items-center",
  },
] as const;

function StepBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[18px] bg-linear-to-l from-coral-500/0 from-42% to-coral-500/15 to-88% px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
      {children}
    </span>
  );
}

function StepNumber({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="bg-linear-to-b from-coral-500 from-63% to-white to-125% bg-clip-text font-fraunces text-[72px] font-bold leading-none text-transparent sm:text-[88px] lg:text-[102px]"
      style={{ WebkitTextFillColor: "transparent" }}
    >
      {children}
    </p>
  );
}

export function  HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 sm:px-8 lg:gap-[60px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <StepBadge>How it works</StepBadge>
          <h2 className="font-fraunces text-4xl font-semibold leading-normal text-[#221c19] sm:text-5xl lg:text-[48px]">
            From idea to website{" "}
            <span className="text-coral-500">in minutes</span>
          </h2>
        </div>

        {/* Steps timeline */}
        <div className="relative w-full max-w-[806px]">
          {/* Connector arrows — desktop only */}
          <Image
            src="/images/weavex/how-it-works/arrow-entry.svg"
            alt=""
            width={155}
            height={305}
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 hidden w-[120px] lg:block xl:-left-48 xl:w-[155px]"
          />
          <Image
            src="/images/weavex/how-it-works/arrow-right.svg"
            alt=""
            width={155}
            height={363}
            aria-hidden
            className="pointer-events-none absolute -right-20 top-[18%] hidden w-[150px] lg:block xl:-right-48 xl:w-[212px] rotate-180"
          />
            <Image
            src="/images/weavex/how-it-works/arrow-entry.svg"
            alt=""
            width={155}
            height={305}
            aria-hidden
            className="pointer-events-none absolute -left-24 top-[44%] hidden w-[120px] lg:block xl:-left-48 xl:w-[155px]"
          />
          <Image
            src="/images/weavex/how-it-works/arrow-right.svg"
            alt=""
            width={212}
            height={363}
            aria-hidden
            className="pointer-events-none absolute -right-20 top-[68%] hidden w-[150px] lg:block xl:-right-48 xl:w-[212px] rotate-180"
          />

          <div className="flex flex-col gap-14 lg:gap-[70px]">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-6 z-20">
                <StepNumber>{step.number}</StepNumber>

                <div className="rounded-2xl bg-[#faf6ef] p-6 sm:p-8">
                  <div className={`flex flex-col gap-8 lg:flex-row lg:gap-2.5 ${step.cardAlign}`}>
                    <div className="flex min-w-0 flex-1 flex-col gap-6">
                      <StepBadge>{step.badge}</StepBadge>

                      <div className="flex flex-col gap-4">
                        <h3 className="max-w-[426px] font-fraunces text-[28px] font-bold leading-normal text-[#221c19] sm:text-[32px] lg:text-[36px]">
                          {step.title}
                        </h3>
                        <p className="max-w-[426px] font-figtree text-[17px] leading-[1.6] text-[#6b5f57]">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="mx-auto shrink-0 lg:mx-0">
                      <DotLottieReact
                        src={step.lottie}
                        loop
                        autoplay
                        className="w-full max-w-68 lg:max-w-85"
                        style={{ background: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
