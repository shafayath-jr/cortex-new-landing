"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { ProductCard } from "@/components/shared/ProductCard";
import { motion, type Variants } from "motion/react";

const MotionProductCard = motion(ProductCard);

const PRODUCTS = [
  {
    title: "Weavex builder",
    description: "Describe your idea, get a real website in minutes.",
    href: "/websites",
  },
  {
    title: "Domains",
    description: "Find and register the perfect name from 500+ endings.",
    href: "/domains",
  },
  {
    title: "Hosting",
    description: "Fast, reliable hosting that grows with you.",
    href: "/hosting",
  },
  {
    title: "Professional Email",
    description: "A mailbox at your own domain name.",
    href: "#",
  },
  {
    title: "SSL Security",
    description: "Free security that keeps visitors safe and trusted.",
    href: "#",
  },
  {
    title: "Domain Protection",
    description: "Keep your name private and protected.",
    href: "#",
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
              <MotionProductCard
                key={idx}
                variants={fadeUp}
                title={product.title}
                description={product.description}
                showLink={true}
                href={product.href}
                className="transition-all duration-300 hover:shadow-md hover:-translate-y-1.5"
              />
            ))}
          </motion.div>
        </motion.div>
      </Bounded>
    </section>
  );
}
