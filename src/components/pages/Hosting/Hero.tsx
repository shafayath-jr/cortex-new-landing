import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import RightArrowIcon from "@/components/ui/icons/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";

export function HostingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Green ellipse glow — top right */}
      <div
        className="pointer-events-none absolute right-0 -bottom-20 lg:top-41.5 size-134.75"
        aria-hidden
      >
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          overflow="visible"
          viewBox="0 0 767 767"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#ellipse-bg-filter)">
            <circle
              cx="383.5"
              cy="383.5"
              r="269.5"
              fill="#12A97E"
              fillOpacity="0.08"
            />
          </g>
          <defs>
            <filter
              id="ellipse-bg-filter"
              x="0"
              y="0"
              width="767"
              height="767"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="57"
                result="effect1_foregroundBlur"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <Bounded className="relative flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left: copy */}
        <div className="flex flex-col gap-8 lg:max-w-180 flex-1">
          {/* Badge */}
          <Badge text="Web Hosting" className="w-fit" />

          {/* Heading */}
          <h1
            className="font-fraunces text-[56px] font-bold leading-[1.06] text-[#2e0d05] sm:text-[58px] lg:text-[60px] xl:text-[72px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Hosting that keeps you{" "}
            <span className="relative text-coral-500">
              Fast and Online {/* Underline ellipse */}
              <span
                className="pointer-events-none absolute -bottom-3 left-0 h-11.75 w-full rotate-[-1.48deg]"
                aria-hidden
              >
                <svg
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                  overflow="visible"
                  viewBox="0 0 482 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <g filter="url(#underline-filter)">
                    <ellipse cx="241" cy="46.5" rx="218" ry="23.5" fill="#B58E81" />
                  </g> */}
                  <defs>
                    <filter
                      id="underline-filter"
                      x="0"
                      y="0"
                      width="482"
                      height="93"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-157.5 font-figtree text-[19px] leading-relaxed text-[#6b5f57]">
            The behind-the-scenes power that keeps your website quick, secure
            and always available — without you having to think about it.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white shadow-md shadow-coral-500/20 transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              See Hosting Plans
              <RightArrowIcon className="size-5" />
            </Link>

            <Link
              href="#"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-[#dcd2c5] bg-white px-8 font-figtree text-base font-medium text-[#2e0d05] transition-all duration-200 hover:border-[#c5b8ac] hover:scale-[1.02] active:scale-[0.98]"
            >
              Build a website
              <RightArrowIcon className="size-5" />
            </Link>
          </div>
        </div>

        {/* Right: illustration */}
        <div
          className="relative shrink-0 hidden sm:block lg:flex-1"
          style={{ width: 501, height: 508 }}
        >
          <Image
            src="/images/hosting/hero-illustration.png"
            alt="Hosting illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Bounded>
    </section>
  );
}
