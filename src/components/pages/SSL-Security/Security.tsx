import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import QuickLoadIcon from "@/components/ui/icons/QuickLoadIcon";

const SECURITY_CARDS = [
  {
    title: "Keeps visitors safe",
    description: "Their details stay private and protected at all times.",
    icon: <QuickLoadIcon className="size-8" />,
  },
  {
    title: "Builds trust",
    description: "The padlock reassures people it's safe to browse and buy.",
    icon: <QuickLoadIcon className="size-8" />,
  },
  {
    title: "Helps you show up",
    description: "Search engines prefer secure sites.",
    icon: <QuickLoadIcon className="size-8" />,
  },
  {
    title: "Free and automatic",
    description: "Included and renewed for you — nothing to set up.",
    icon: <QuickLoadIcon className="size-8" />,
  },
];

export function Security() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FEF8F6]">
      <Bounded
        as="div"
        className="relative flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          {/* Badge */}
          <Badge text="Why it matters" className="w-fit" />

          <h1 className="font-fraunces text-4xl font-bold leading-[1.06] text-[#2e0d05] sm:text-5xl md:text-6xl lg:text-[66px]">
            Built-in security,{" "}
            <span className="text-coral-500">on every site</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {SECURITY_CARDS.length > 0 &&
            SECURITY_CARDS.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 px-9 py-8 rounded-[16px] bg-white text-center"
              >
                <div className="flex items-center justify-center size-16 rounded-full bg-[#FDECE6]">
                  {card.icon}
                </div>
                <h3 className="font-fraunces text-[21px] font-bold text-[#221C19]">
                  {card.title}
                </h3>
                <p className="text-[18px] font-figtree text-[#6B5F57] leading-6.5">
                  {card.description}
                </p>
              </div>
            ))}
        </div>
      </Bounded>
    </section>
  );
}
