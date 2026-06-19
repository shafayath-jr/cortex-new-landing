"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import CircleCheckBox from "@/components/ui/icons/CircleCheckBox";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const plans = [
  {
    name: "Starter",
    badgeText: "Starter",
    priceMonthly: 0,
    priceAnnually: 0,
    description: "Build and publish your website at no cost.",
    buttonText: "Get started free",
    buttonHref: "#",
    includedHeader: "WHAT'S INCLUDED",
    included: [
      "Weavex website builder",
      "Free CortexGrip address",
      "Free SSL security",
      "Community support",
      "Unlimited edits",
    ],
  },
  {
    name: "Grow",
    badgeText: "Grow",
    isPopular: true,
    priceMonthly: 10,
    priceAnnually: 8,
    description: "Build and publish your website at no cost.",
    buttonText: "Choose Grow",
    buttonHref: "#",
    includedHeader: "WHAT'S INCLUDED",
    included: [
      "Custom domain included",
      "Professional email",
      "Priority support",
      "Community support",
      "Everything in Starter",
    ],
  },
  {
    name: "Business",
    badgeText: "Business",
    priceMonthly: 20,
    priceAnnually: 16,
    description: "Everything in Grow, plus advanced features.",
    buttonText: "Choose Business",
    buttonHref: "#",
    includedHeader: "WHAT'S INCLUDED",
    included: [
      "Everything in Grow",
      "Domain protection",
      "Advanced hosting",
      "Dedicated support",
    ],
  },
];

// Variants for header fade-up animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full bg-[#FDFCF9] relative overflow-hidden select-none font-figtree">
      <Bounded as="div">
        {/* Header Animation Group */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge text="Pricing" className="w-fit" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-fraunces font-bold  text-[#2E0D05] leading-10 md:leading-19 tracking-normal text-4xl sm:text-5xl md:text-6xl lg:text-[66px] mt-4 mb-6"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Start free. Add{" "}
            <span className="text-coral-500">what you need.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-figtree text-[19px] leading-7 text-[#6B5F57] dark:text-zinc-400 lg:max-w-165"
          >
            No surprises and no jargon — just clear prices for getting online
            and growing.
          </motion.p>

          {/* Toggle Switches */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center bg-white border border-[#5C1909]/30 rounded-full p-1.5 mt-6 mb-13"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className="relative px-5 py-2.5 rounded-full font-figtree text-base leading-6 tracking-normal z-10 transition-colors duration-300"
              style={{
                color: !isAnnual ? "#ffffff" : "#221C19",
              }}
            >
              {!isAnnual && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-coral-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Monthly
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              className="relative px-5 py-2.5 rounded-full font-figtree text-base leading-6 tracking-normal flex items-center gap-2 z-10 transition-colors duration-300"
              style={{
                color: isAnnual ? "#ffffff" : "#221C19",
              }}
            >
              {isAnnual && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-coral-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Annually
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-semibold border transition-all duration-300 ${
                  isAnnual
                    ? "bg-white/20 text-white border-white/20"
                    : "text-[#028B6D] bg-[#028B6D1F] border-[#028B6D]"
                }`}
              >
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;

            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: plan.isPopular
                    ? "0 20px 40px rgba(216,73,32,0.15)"
                    : "0 20px 40px rgba(0,0,0,0.04)",
                }}
                className={`relative rounded-[16px] p-10 last:col-span-full xl:last:col-span-1 flex flex-col justify-between h-full transition-shadow duration-300 ${
                  plan.isPopular
                    ? "bg-[linear-gradient(24deg,_#631B0C_3.17%,_#F24E29_113.13%)] text-[#FEF8F6] shadow-xl"
                    : "bg-white text-[#2e0d05] border border-coral-500/5 shadow-md shadow-coral-500/5"
                }`}
              >
                {/* Grow Card Floating Most Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 border-[3px] border-[#FEF8F6] bg-[linear-gradient(262deg,_#F24E29_28.84%,_#F4B53F_105.47%)] text-[#F6F6FE] text-[14px] font-fraunces font-semibold uppercase leading-4.5 tracking-normal px-7 py-3 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Plan Header Info */}
                <div>
                  <div
                    className={`text-[14px] bg-[#FDECE6] text-coral-500 font-semibold rounded-full w-fit py-1.5 ${
                      plan.isPopular ? "px-6" : "px-3.5"
                    }`}
                  >
                    {plan.badgeText}
                  </div>

                  <h3
                    className="font-fraunces text-[36px] font-semibold my-3.5"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    {plan.priceMonthly === 0 ? (
                      <span className="text-[#221C19]">Free forever</span>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={price}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.15 }}
                            className="text-4xl font-fraunces font-semibold"
                          >
                            £{price}
                          </motion.span>
                        </AnimatePresence>
                        <span
                          className={`text-[36px] font-fraunces font-semibold ${
                            plan.isPopular ? "text-[#FEF8F6]" : "text-[#221C19]"
                          }`}
                        >
                          / month
                        </span>
                      </div>
                    )}
                  </h3>

                  <p
                    className={`font-figtree text-base leading-6 ${
                      plan.isPopular ? "text-white" : "text-[#6B5F57]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`border-t my-6 ${
                      plan.isPopular ? "border-[#FBD6C9]" : "border-[#DCD2C5]"
                    }`}
                  />

                  {/* Included features list */}
                  <div>
                    <p
                      className={`font-figtree text-[14px] font-semibold tracking-normal leading-4.5 uppercase mb-3 opacity-60 ${
                        plan.isPopular ? "text-[#FEF8F6]" : "text-[#221C19]"
                      }`}
                    >
                      {plan.includedHeader}
                    </p>
                    <ul className="space-y-2.5">
                      {plan.included.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CircleCheckBox
                            className={`size-4.5 mt-0.5 shrink-0 ${
                              plan.isPopular ? "text-white" : "text-[#12A97E]"
                            }`}
                          />
                          <span
                            className={`font-figtree text-[16px] leading-6 ${
                              plan.isPopular ? "text-white" : "text-[#6B5F57]"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action */}
                <Link
                  href={plan.buttonHref}
                  className="group mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-6 font-figtree text-base font-semibold text-white transition-all duration-200 hover:bg-coral-600 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>{plan.buttonText}</span>
                  <FaArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Bounded>
    </section>
  );
}
