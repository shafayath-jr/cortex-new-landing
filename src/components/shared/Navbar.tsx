"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Bounded from "./Bounded";

const NAV_ITEMS = [
  { label: "Websites", href: "#websites" },
  { label: "Domains", href: "#domains" },
  { label: "Hosting", href: "#hosting" },
  { label: "Email", href: "#email" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 font-figtree backdrop-blur-md dark:border-zinc-800/50 dark:bg-black/80">
      <Bounded className="flex h-20 items-center justify-between py-0!">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo/logo.svg"
            alt="Cortex Grip Logo"
            width={177}
            height={33}
            priority
            className="h-[40px] w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-[19px] font-normal text-[#2E0D05] transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-coral-600 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#build"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral-600 px-6 py-4 text-[16px] font-normal text-[#FEF8F6] shadow-md shadow-coral-600/10 transition-all duration-200 hover:bg-coral-500 hover:shadow-lg hover:shadow-coral-500/20 active:scale-[0.98]"
          >
            <span className="font-semibold">Build for free</span>
            <FaArrowRight className="size-4 text-white " />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-zinc-200/60 bg-zinc-50/50 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? (
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </Bounded>
      {/* Mobile Drawer (Accordion) */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out lg:hidden border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black",
          isOpen
            ? "grid-rows-[1fr] opacity-100 py-6"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden px-6">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-1.5 text-base font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-2 border-zinc-100 dark:border-zinc-900" />
            <Link
              href="#build"
              onClick={() => setIsOpen(false)}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-coral-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-coral-500"
            >
              <span>Build for free</span>
              <svg
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
