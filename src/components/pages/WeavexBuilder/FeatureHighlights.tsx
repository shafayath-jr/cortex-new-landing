"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { ProductCard } from "@/components/shared/ProductCard";

const FEATURES = [
  {
    id: "ai",
    title: "Built for you, by AI",
    description:
      "No blank page. Weavex writes the first version so you're editing, not starting from scratch.",
  },
  {
    id: "edit",
    title: "Click to edit",
    description:
      "If you can use a phone, you can edit your site. No code, nothing to break.",
  },
  {
    id: "responsive",
    title: "Looks great on every screen",
    description:
      "Your site works beautifully on phones, tablets and computers automatically.",
  },
  {
    id: "grows",
    title: "Grows with you",
    description:
      "Start simple, add pages, booking, shop or blog as your business grows.",
  },
  {
    id: "ownership",
    title: "Yours to keep",
    description:
      "You own your site and everything in it. No lock-in, cancel anytime.",
  },
  {
    id: "free",
    title: "Free to start",
    description: "Build and publish for free. Upgrade only when you're ready.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const MotionProductCard = motion(ProductCard);

export function FeatureHighlights() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef8f6]">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[325px] rounded-full bg-coral-500/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 -top-20 size-[326px] rounded-full bg-coral-500/10 blur-[100px]"
      />

      <Bounded className="relative flex-col items-center">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUpVariants}>
            <Badge text="Feature Highlights" className="w-fit" />
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-fraunces font-bold text-[#221C19] text-4xl sm:text-5xl mt-4 mb-6"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Everything you need,{" "}
            <span className="text-coral-500">nothing you don&apos;t</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8"
        >
          {FEATURES.map((feature) => (
            <MotionProductCard
              key={feature.id}
              variants={fadeUpVariants}
              title={feature.title}
              description={feature.description}
              showLink={false}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ))}
        </motion.div>
      </Bounded>
    </section>
  );
}
