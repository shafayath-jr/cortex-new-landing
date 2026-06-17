import Image from "next/image";
import Link from "next/link";

export function EmailHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-[90px] sm:px-10 lg:px-20">

      {/* Green ellipse glow — top right */}
      <div className="pointer-events-none absolute right-0 top-[166px] size-[539px]" aria-hidden>
        <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 767 767" fill="none">
          <g filter="url(#email-hero-ellipse)">
            <circle cx="383.5" cy="383.5" r="269.5" fill="#12A97E" fillOpacity="0.08" />
          </g>
          <defs>
            <filter id="email-hero-ellipse" x="0" y="0" width="767" height="767" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

          <span className="inline-flex w-fit items-center rounded-[28px] bg-gradient-to-r from-coral-500/15 to-coral-500/0 px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
            Professional Email
          </span>

          <h1
            className="font-fraunces text-[56px] font-bold leading-[1.06] text-[#2e0d05] sm:text-[64px] lg:text-[72px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Email that says{" "}
            <span className="text-coral-500">you mean business</span>
          </h1>

          <p className="max-w-[630px] font-figtree text-[19px] leading-[1.5] text-[#6b5f57]">
            A mailbox at your own name — like{" "}
            <strong className="font-bold text-[#2e0d05]">hello@yourbakery.com</strong>
            {" "}— looks professional and builds trust from the first message.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex h-[56px] items-center gap-2 rounded-full bg-coral-500 px-8 font-figtree text-base font-semibold text-white shadow-md shadow-coral-500/20 transition-all duration-200 hover:bg-coral-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Professional Email
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="relative hidden shrink-0 lg:block" style={{ width: 501, height: 490 }}>
          <Image
            src="/images/email/hero-illustration.png"
            alt="Professional email illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
