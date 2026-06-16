import Image from "next/image";
import Link from "next/link";

export function HostingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-[90px] sm:px-10 lg:px-20">

      {/* Green ellipse glow — top right */}
      <div
        className="pointer-events-none absolute right-0 top-[166px] size-[539px]"
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
            <circle cx="383.5" cy="383.5" r="269.5" fill="#12A97E" fillOpacity="0.08" />
          </g>
          <defs>
            <filter id="ellipse-bg-filter" x="0" y="0" width="767" height="767" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="57" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-1">

        {/* Left: copy */}
        <div className="flex flex-col gap-8 lg:max-w-[720px]">

          {/* Badge */}
          <span className="inline-flex w-fit items-center rounded-[28px] bg-gradient-to-r from-coral-500/15 to-coral-500/0 px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
            Web Hosting
          </span>

          {/* Heading */}
          <h1
            className="font-fraunces text-[56px] font-bold leading-[1.06] text-[#2e0d05] sm:text-[64px] lg:text-[72px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Hosting that keeps you{" "}
            <span className="relative text-coral-500">
              Fast and Online{" "}
              {/* Underline ellipse */}
              <span className="pointer-events-none absolute -bottom-3 left-0 h-[47px] w-full -rotate-[1.48deg]" aria-hidden>
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
                    <filter id="underline-filter" x="0" y="0" width="482" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="11.5" result="effect1_foregroundBlur" />
                    </filter>
                  </defs>
                </svg>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-[630px] font-figtree text-[19px] leading-relaxed text-[#6b5f57]">
            The behind-the-scenes power that keeps your website quick, secure and always available — without you having to think about it.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex h-[56px] items-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white shadow-md shadow-coral-500/20 transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              See Hosting Plans
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="#"
              className="inline-flex h-[56px] items-center gap-2 rounded-full border border-[#dcd2c5] bg-white px-8 font-figtree text-base font-medium text-[#2e0d05] transition-all duration-200 hover:border-[#c5b8ac] hover:scale-[1.02] active:scale-[0.98]"
            >
              Build a website
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="relative hidden shrink-0 lg:block" style={{ width: 501, height: 508 }}>
          <Image
            src="/images/hosting/hero-illustration.png"
            alt="Hosting illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
