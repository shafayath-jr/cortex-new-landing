import Bounded from "@/components/shared/Bounded";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#FEF8F6]">
      {/* Main Footer Content */}
      <Bounded
        as="div"
        className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8"
      >
        {/* Left Column (Brand info & Socials) */}
        <div className="flex flex-col max-w-122 gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-all duration-300 hover:opacity-85 hover:scale-[1.01] origin-left w-fit"
          >
            <Image
              src="/logo/logo.svg"
              alt="Cortex Grip Logo"
              width={177}
              height={33}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <p className="font-figtree text-[16px] leading-6 text-[#6B5F57] font-normal">
            CortexGrip gives you your domain and your website &mdash; without
            the complexity. Search, register, build, and publish, all from one
            place. Your corner of the internet starts here.
          </p>

          {/* Social Links */}
          <div className="font-fraunces flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Facebook", href: "https://facebook.com" },
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Dribble", href: "https://dribbble.com" },
              { label: "Behance", href: "https://behance.net" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] font-normal text-[#2E0D05] hover:text-coral-500 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-coral-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column (Navigation & Contact) */}
        <div className="flex flex-col lg:items-start justify-between gap-12 lg:gap-16">
          {/* Navigation Links */}
          <div className="font-fraunces flex flex-wrap gap-x-8 gap-y-2 md:gap-x-10">
            {[
              { label: "Our Feature", href: "#features" },
              { label: "About us", href: "#about" },
              { label: "AI website builder", href: "#builder" },
              { label: "Contact us", href: "#contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[18px] font-normal text-[#2E0D05] hover:text-coral-500 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-coral-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Email Block */}
          <div className="flex flex-col gap-2">
            <span className="font-figtree text-[15px] text-[#8C7E77] font-normal leading-none">
              You can also email us at:
            </span>
            <a
              href="mailto:Contact@cortexgrip.com"
              className="font-fraunces text-3xl md:text-[34px] font-bold text-[#2E0D05] hover:text-coral-500 transition-all duration-300 tracking-tight hover:scale-[1.01] inline-block origin-left lg:origin-right"
            >
              Contact@cortexgrip.com
            </a>
          </div>
        </div>
      </Bounded>

      {/* Bottom Orange Bar */}
      <div className="w-full bg-coral-500 text-[#F6F6FE] font-figtree">
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4 md:px-6 lg:px-20 w-full max-w-480">
          <p className="text-[#F6F6FE] font-figtree text-[16px] leading-6 tracking-normal">
            &copy;{new Date().getFullYear()} Cortexgrip, All Rights Reserved
          </p>
          <div className="flex items-center gap-2 font-figtree text-[16px] leading-6 tracking-normal text-[#F6F6FE]">
            <Link
              href="#privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="px-1 text-[#F6F6FE]">|</span>
            <Link
              href="#terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
