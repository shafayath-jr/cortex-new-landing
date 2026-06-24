import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { SSLAnimation } from "@/components/shared/SSLAnimation";
import RightArrowIcon from "@/components/ui/icons/RightArrowIcon";
import Link from "next/link";

export function SSLHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6]">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-36 size-[369px] rounded-full bg-[#12A97E14] blur-[57px] lg:-right-20"
      />
      <Bounded
        as="div"
        className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
      >
        {/* Left — copy + CTAs */}
        <div className="flex w-full flex-col items-start gap-8 lg:max-w-[740px]">
          <div className="flex flex-col gap-4">
            {/* Badge */}
            <Badge text="SSL Security" className="w-fit" />

            <h1 className="font-fraunces font-bold  text-[#2E0D05] leading-10 md:leading-19 tracking-normal text-4xl sm:text-5xl md:text-6xl lg:text-[66px]">
              The padlock that{" "}
              <span className="text-coral-500">earns trust</span>
            </h1>

            <p className="max-w-[660px] font-figtree text-[17px] leading-normal text-[#6b5f57] sm:text-[19px]">
              SSL keeps your visitors&apos; information safe and shows the
              little padlock that tells people your site is secure. It&apos;s
              free on every site you build with us.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Link
              href="#build"
              className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Build a secure website</span>
              <RightArrowIcon className="size-6 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right — animated builder loop */}
        <div className="relative w-full max-w-[594px]">
          <SSLAnimation />
        </div>
      </Bounded>
    </section>
  );
}
