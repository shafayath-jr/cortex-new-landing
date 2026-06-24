"use client";

import { Badge } from "@/components/shared/Badge";
import { useState } from "react";

const FAQS = [
  {
    id: 1,
    question: "Is Weavex really free?",
    answer:
      "Yes — build and publish for free on a CortexGrip address. Add your own domain and extras when you're ready.",
  },
  {
    id: 2,
    question: "Can I change what Weavex makes?",
    answer:
      "Absolutely. Everything Weavex builds is yours to edit. Swap any text, photo, colour or layout with a click — no code needed.",
  },
  {
    id: 3,
    question: "Will it work on phones?",
    answer:
      "Yes. Every site Weavex builds is fully responsive and looks great on phones, tablets and desktops automatically.",
  },
  {
    id: 4,
    question: "Do I need to know how to code?",
    answer:
      "Not at all. Weavex handles the tech. You describe what you do, and it writes the copy, builds the layout, and sets up the security — automatically.",
  },
  {
    id: 5,
    question: "Can I use my own domain?",
    answer:
      "Yes. Connect a domain you already own or register a new one through CortexGrip. Your name, your brand.",
  },
];

function PlusIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 4v12M4 10h12" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12" />
    </svg>
  );
}

export function FaqSection() {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className="w-full bg-[#fef8f6] py-[54px] md:py-[80px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-[42px] px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge text="FAQ's" className="w-fit" />
          <h2 className="font-fraunces font-bold text-[#221C19] leading-12 md:leading-13 text-4xl sm:text-5xl lg:text-[48px] tracking-normal">
            Questions, <span className="text-coral-500">answered</span>
          </h2>
        </div>

        {/* Accordion list */}
        <div className="w-full max-w-7xl">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                <div className="flex flex-col gap-[14px] py-4">
                  <button
                    onClick={() => setOpenId(isOpen ? 0 : faq.id)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-fraunces text-[17px] font-bold leading-normal text-[#221c19]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-[6px] transition-colors ${
                        isOpen
                          ? "bg-coral-50 text-coral-500"
                          : "bg-[#fef8f6] text-coral-500"
                      }`}
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-figtree text-base leading-[24px] text-[#6b5f57]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {idx < FAQS.length - 1 && (
                  <div className="h-px w-full bg-[#ebe4da]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
