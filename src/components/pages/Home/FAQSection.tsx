"use client";

import Bounded from "@/components/shared/Bounded";
import QuestionMarkIcon from "@/components/ui/icons/QuestionMarkIcon";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Badge } from "@/components/shared/Badge";

const FAQS = [
  {
    question: "Can I transfer a domain I already own to CortexGrip?",
    answer:
      "Not at all. Weavex handles the tech. You describe what you do, and it writes the copy, builds the layout, and sets up the security — automatically.",
  },
  {
    question: "Is it really free to start?",
    answer:
      "Yes. You can build, customize, and preview your website for free. You only pay when you choose to connect a custom domain and take your business live.",
  },
  {
    question: "Can I use my own name and domain?",
    answer:
      "Absolutely. You can search for and purchase new domains directly in CortexGrip, or easily point a domain you already own to your new website.",
  },
  {
    question: "What if I get stuck?",
    answer:
      "We provide 24/7 dedicated email and chat support to help you get your site up, your email configured, and your questions answered anytime.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <Bounded as="div">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 justify-between xl:justify-evenly"
        >
          {/* Left Side: Badge, Headline & Contact Card */}
          <div className="w-full lg:max-w-[440px] flex flex-col items-start shrink-0">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              <Badge text="FAQ's" />

              {/* Heading */}
              <h2 className="font-fraunces font-bold text-[#221C19] leading-13 text-4xl sm:text-5xl lg:text-[42px] tracking-normal my-4">
                Questions, <span className="text-coral-500">answered</span>
              </h2>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[24px] bg-[#FEF8F6] p-8 border border-[#F4EEE4] shadow-xs w-full max-w-[440px] sm:mx-auto lg:mx-0 mt-6"
            >
              {/* Background Faded Question Mark */}
              <div className="absolute bottom-1 right-4 h-36 w-auto pointer-events-none z-0 opacity-70">
                <QuestionMarkIcon className="h-full w-auto" />
              </div>

              <div className="relative z-10 flex flex-col items-start gap-4">
                <h3 className="font-fraunces text-[26px] md:text-[30px] font-bold leading-10 tracking-tight text-[#221C19]">
                  Still have Questions?
                </h3>
                <p className="font-figtree text-[#6B5F57] text-[16px] leading-6 font-normal max-w-[320px]">
                  Can't find the answer to your Question? Send us an email we'll
                  back to you soon as possible!
                </p>
                <Link
                  href="#contact"
                  className="mt-8 py-3.5 px-8 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-figtree text-[16px] font-medium leading-5 transition-all duration-200 shadow-sm active:scale-[0.97] hover:scale-[1.01]"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion list */}
          <div className="lg:max-w-[530px] flex-1 flex flex-col divide-y divide-[#F4EEE4]">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="first:pt-0 py-6 last:pb-0"
                >
                  {/* Header / Question button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-6 group text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[#221C19] font-fraunces text-[18px] lg:text-[20px] font-bold leading-7 group-hover:text-coral-500 transition-colors duration-200">
                      {faq.question}
                    </span>

                    {/* Plus / Minus Icon Container */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-10 h-10 shrink-0 flex items-center justify-center rounded-[10px] bg-[#FDECE6] text-[#F24E29] hover:bg-[#FCDFD3] transition-colors duration-200"
                    >
                      {isOpen ? (
                        <LuMinus className="size-5" />
                      ) : (
                        <LuPlus className="size-5" />
                      )}
                    </motion.span>
                  </button>

                  {/* Smooth Height Expand Answer Container */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pr-6">
                      <p className="text-[#6B5F57] font-figtree text-[16px] leading-7 font-normal select-text">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Bounded>
    </section>
  );
}
