import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { DomainFeatureAnimation } from "@/components/shared/DomainFeatureAnimation";
import RightArrowIcon from "@/components/ui/icons/RightArrowIcon";
import Link from "next/link";

export function DomainProtectionHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDFCF9]">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-36 size-92.25 rounded-full bg-[#12A97E14] blur-[57px] lg:-right-20"
      />
      <Bounded
        as="div"
        className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
      >
        {/* Left — copy + CTAs */}
        <div className="flex w-full flex-col items-start gap-8 lg:max-w-170">
          <div className="flex flex-col gap-4">
            {/* Badge */}
            <Badge text="Domain Protection" className="w-fit" />

            <h1 className="font-fraunces text-4xl font-bold leading-[1.06] text-[#2e0d05] sm:text-5xl md:text-6xl lg:text-[66px]">
              Your name, <span className="text-coral-500">kept safe</span>
            </h1>

            <p className="max-w-165 font-figtree text-[17px] leading-normal text-[#6b5f57] sm:text-[19px]">
              Your domain is your front door. Domain protection keeps it
              private, locked against tampering, and safe from accidental loss.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Link
              href="#build"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Protect my domain</span>
              <RightArrowIcon className="size-6 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right — animated builder loop */}
        <div className="relative w-full max-w-148.5">
          <DomainFeatureAnimation />
        </div>
      </Bounded>
    </section>
  );
}
