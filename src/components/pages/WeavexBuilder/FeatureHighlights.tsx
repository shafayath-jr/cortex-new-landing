import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { ProductCard } from "@/components/shared/ProductCard";

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
    description: "Build and publish for free. Upgrade only when you're ready.",
  },
];

export function FeatureHighlights() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6]">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[325px] rounded-full bg-coral-500/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 -top-20 size-[326px] rounded-full bg-coral-500/10 blur-[100px]"
      />

      <Bounded className="relative flex-col items-center gap-8 lg:gap-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge text="Feature Highlights" className="w-fit" />
          <h2 className="font-fraunces text-4xl font-semibold leading-normal text-[#221c19] sm:text-5xl lg:text-[48px]">
            Everything you need,{" "}
            <span className="text-coral-500">nothing you don&apos;t</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {FEATURES.map((feature) => (
            <ProductCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              showLink={false}
            />
          ))}
        </div>
      </Bounded>
    </section>
  );
}
