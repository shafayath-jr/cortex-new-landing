"use client";

import { motion } from "motion/react";
import Bounded from "@/components/shared/Bounded";
import QuickLoadIcon from "@/components/ui/icons/QuickLoadIcon";

const FEATURE_CARDS = [
  {
    title: "No lock-in",
    description: "Cancel anytime.",
    icon: <QuickLoadIcon className="size-8" />,
  },
  {
    title: "Clear renewals",
    description: "We always show you the renewal price up front.",
    icon: <QuickLoadIcon className="size-8" />,
  },
  {
    title: "Free to try",
    description: "Build before you pay a penny.",
    icon: <QuickLoadIcon className="size-8" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

export function PricingFeatures() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Bounded as="div">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURE_CARDS.length > 0 &&
            FEATURE_CARDS.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -16,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="border border-coral-50/40 last:col-span-full lg:last:col-span-1 flex flex-col items-center gap-4 px-9 py-8 rounded-[16px] bg-[#FDFCF9] text-center"
              >
                <div className="flex items-center justify-center size-16 rounded-full bg-[#FDECE6]">
                  {card.icon}
                </div>
                <h3 className="font-fraunces text-[21px] font-bold text-[#221C19]">
                  {card.title}
                </h3>
                <p className="text-[18px] font-figtree text-[#6B5F57] leading-6.5">
                  {card.description}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </Bounded>
    </section>
  );
}
