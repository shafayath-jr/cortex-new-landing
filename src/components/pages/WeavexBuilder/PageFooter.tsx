import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Our Feature", href: "#" },
  { label: "About us", href: "#" },
  { label: "AI website builder", href: "#" },
  { label: "Contact us", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribble", href: "#" },
  { label: "Behance", href: "#" },
];

export function PageFooter() {
  return (
    <footer className="w-full">
      {/* Main footer area */}
      <div className="bg-[#fef8f6] px-6 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:gap-0">
          {/* Left — Logo + description + socials */}
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <Image
                src="/logo/logo.svg"
                alt="CortexGrip"
                width={177}
                height={33}
                className="h-[33px] w-auto"
              />

              {/* Description */}
              <p className="max-w-[489px] font-figtree text-[17px] leading-relaxed text-[#6b5f57]">
                CortexGrip gives you your domain and your website — without the complexity. Search, register, build, and publish, all from one place. Your corner of the internet starts here.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-6">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-figtree text-base text-[#2e0d05] transition-colors hover:text-coral-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Nav links + contact */}
          <div className="flex flex-col gap-10 lg:items-end lg:text-right">
            {/* Nav links */}
            <div className="flex flex-wrap gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-figtree text-base text-[#2e0d05] transition-colors hover:text-coral-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Email contact */}
            <div className="flex flex-col gap-2">
              <p className="font-figtree text-base text-[#6b5f57]">You can also email us at:</p>
              <a
                href="mailto:Contact@cortexgrip.com"
                className="font-fraunces text-3xl font-bold text-[#2e0d05] transition-colors hover:text-coral-500 sm:text-[38px]"
              >
                Contact@cortexgrip.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-coral-500 px-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
          <p className="font-figtree text-sm text-white">
            @2026 Cortexgrip, All Rights Reserved
          </p>
          <div className="flex gap-4">
            <Link href="#" className="font-figtree text-sm text-white hover:underline">
              Privacy Policy
            </Link>
            <span className="text-white/60">|</span>
            <Link href="#" className="font-figtree text-sm text-white hover:underline">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
