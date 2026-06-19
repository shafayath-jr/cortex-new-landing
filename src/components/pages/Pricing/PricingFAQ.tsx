"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQS = [
  {
    id: 1,
    question: "Can I really start for free?",
    answer:
      "Yes. Build and publish a website for free. Upgrade only when you want your own domain or extras.",
  },
  {
    id: 2,
    question: "Will the price jump when I renew?",
    answer:
      "No. The price you pay when you upgrade is the price you pay when you renew.",
  },
];

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      className="size-5"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Horizontal Line */}
      <line x1="4" y1="10" x2="16" y2="10" strokeLinecap="round" />
      {/* Vertical Line - scales down or disappears when open */}
      <motion.line
        x1="10"
        y1="4"
        x2="10"
        y2="16"
        strokeLinecap="round"
        animate={{ scaleY: isOpen ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        style={{ originY: "50%" }}
      />
    </motion.svg>
  );
}

// Fade-up variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

export function PricingFAQ() {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className="w-full bg-[#fef8f6] relative overflow-hidden">
      <Bounded className="flex flex-col items-center">
        {/* Header (with fade-up animation) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.div variants={fadeUpVariants}>
            <Badge text="FAQ's" className="w-fit" />
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-fraunces text-[38px] font-bold leading-normal text-[#221c19] sm:text-[42px]"
          >
            Questions, <span className="text-coral-500">answered</span>
          </motion.h2>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-200 mx-auto mt-10"
        >
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div key={faq.id} variants={fadeUpVariants}>
                <div className="flex flex-col my-3.5">
                  <button
                    onClick={() => setOpenId(isOpen ? 0 : faq.id)}
                    className="flex w-full items-center justify-between gap-4 text-left outline-none group"
                  >
                    <span className="font-fraunces text-[17px] font-bold leading-normal text-[#221c19] group-hover:text-coral-500 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-[6px] transition-all duration-300 bg-[#FDECE6] text-coral-500 group-hover:bg-coral-500 group-hover:text-white">
                      <PlusMinusIcon isOpen={isOpen} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3.5 pb-2">
                          <p className="font-figtree text-base leading-6 text-[#6B5F57]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="h-px w-full bg-[#ebe4da]" />
              </motion.div>
            );
          })}
        </motion.div>
      </Bounded>
    </section>
  );
}
