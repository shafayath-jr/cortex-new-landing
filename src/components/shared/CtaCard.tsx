import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Bounded from "./Bounded";

interface CtaCardProps {
  heading?: string;
  headingHighlight?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function CtaCard({
  heading = "Your website is",
  headingHighlight = "one sentence away",
  subtext = "No credit card, No code, No catch.",
  ctaLabel = "Build my website free",
  ctaHref = "#",
  className = "",
}: CtaCardProps) {
  return (
    <section className={cn("w-full bg-white", className)}>
      <Bounded as="div">
        <div className="max-w-265 mx-auto flex flex-col items-center gap-6 rounded-3xl bg-[#fef0ec] px-8 py-16 text-center shadow-sm">
          <h2 className="font-fraunces text-4xl font-bold leading-tight text-[#2e0d05] sm:text-5xl lg:text-[46px]">
            {heading} <span className="text-coral-500">{headingHighlight}</span>
          </h2>
          <p className="max-w-192.5 mx-auto font-figtree text-center text-lg leading-relaxed text-[#6b5f57]">
            {subtext}
          </p>
          <Link
            href={ctaHref}
            className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white shadow-md shadow-coral-500/20 transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{ctaLabel}</span>
            <FaArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Bounded>
    </section>
  );
}
