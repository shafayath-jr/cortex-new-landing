"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { ProductCard } from "@/components/shared/ProductCard";
import { motion } from "motion/react";

const SOLUTIONS = [
  {
    title: "Small Business",
    description: "Get your shop, studio or service online in an afternoon.",
    href: "#",
  },
  {
    title: "Online Store",
    description: "Sell products online with a professional shop front.",
    href: "#",
  },
  {
    title: "Photographers",
    description: "Show your work with a beautiful, fast portfolio.",
    href: "#",
  },
  {
    title: "Restaurants & Cafés",
    description: "Share your menu, hours and reservations online.",
    href: "#",
  },
  {
    title: "Freelancers",
    description: "Win more clients with a site that shows what you're worth.",
    href: "#",
  },
  {
    title: "Portfolios",
    description: "Display your creative work to the right audience.",
    href: "#",
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

export function SolutionsSection() {
  return (
    <section className="w-full bg-[#FEF8F6] relative overflow-hidden select-none">
      <Bounded as="div" className="flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUpVariants}>
            <Badge text="Solutions" className="w-fit" />
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-fraunces font-bold text-[#221C19] text-4xl sm:text-5xl mt-4 mb-6"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Built for whatever{" "}
            <span className="text-coral-500">you're starting</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="font-figtree text-[19px] leading-relaxed text-[#6b5f57] max-w-xl"
          >
            Pick what sounds like you and see exactly how to get online.
          </motion.p>
        </motion.div>

        {/* Staggered Grid of Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch mt-13"
        >
          {SOLUTIONS.map((solution, index) => (
            <MotionProductCard
              key={solution.title}
              variants={fadeUpVariants}
              title={solution.title}
              description={solution.description}
              showLink={true}
              showArrow={true}
              linkText="See how"
              href={solution.href}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.06)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ))}
        </motion.div>
      </Bounded>
    </section>
  );
}
