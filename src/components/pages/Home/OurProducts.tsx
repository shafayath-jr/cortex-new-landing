"use client";

import Bounded from "@/components/shared/Bounded";
import { motion, type Variants } from "motion/react";
import { LuSparkle } from "react-icons/lu";
import { Badge } from "@/components/shared/Badge";

const PRODUCTS = [
  {
    title: "Weavex builder",
    description: "Describe your idea, get a real website in minutes.",
  },
  {
    title: "Domains",
    description: "Find and register the perfect name from 500+ endings.",
  },
  {
    title: "Hosting",
    description: "Fast, reliable hosting that grows with you.",
  },
  {
    title: "Professional Email",
    description: "A mailbox at your own domain name.",
  },
  {
    title: "SSL Security",
    description: "Free security that keeps visitors safe and trusted.",
  },
  {
    title: "Domain Protection",
    description: "Keep your name private and protected.",
  },
];

// Children inherit "hidden"/"visible" from the parent, so the header and each
// card only declare fadeUp — the containers control the timing/stagger
const sectionVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function OurProducts() {
  return (
    <section className="bg-[#FAF6EF] relative w-full overflow-hidden">
      <Bounded as="div">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <Badge text="Our Products" />
            <h2 className="mt-4 font-fraunces text-4xl sm:text-5xl font-bold tracking-tight text-[#2E0D05]">
              Everything you need,{" "}
              <span className="text-coral-500">in one place</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={gridVariants}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
          >
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col rounded-[16px] bg-white p-6 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex size-14 bg-[#FDECE6] items-center justify-center rounded-full text-coral-500">
                  <LuSparkle className="size-6" />
                </div>

                <h3 className="font-fraunces text-[28px] font-bold text-[#221C19] mt-10">
                  {product.title}
                </h3>
                <p className="flex-1 font-figtree text-[17px] text-[#6B5F57] leading-7 mt-4 mb-10">
                  {product.description}
                </p>

                <button
                  type="button"
                  className="w-full rounded-full border border-[#221C19] bg-transparent py-3 font-figtree text-[17px] font-normal text-[#221C19] leading-7 transition-colors hover:bg-zinc-50 active:scale-[0.98] cursor-pointer"
                >
                  Explore
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Bounded>
    </section>
  );
}
