"use client";

import Bounded from "@/components/shared/Bounded";
import { animate, motion, useInView, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

function Counter({
  from,
  to,
  duration = 1.6,
  decimals = 0,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Expo-out easing curve
      onUpdate: (value) => {
        setCount(value);
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Stats() {
  return (
    <section className="w-full bg-[#FAF6EF]">
      <Bounded as="div" className="py-[70px]!">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#FDECE6]"
        >
          {/* Stat 1: Domain Name Endings */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center pb-2 md:pb-0"
          >
            <h3 className="font-fraunces font-bold text-[#F24E29] text-[40px]">
              <Counter from={0} to={500} suffix="+" />
            </h3>
            <p className="font-figtree text-[#998C85] text-[15px] font-normal">
              Domain name endings
            </p>
          </motion.div>

          {/* Stat 2: Uptime Guarantee */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center pb-2 md:pb-0"
          >
            <h3 className="font-fraunces font-bold text-[#F24E29] text-[40px]">
              <Counter from={0} to={99.9} decimals={1} suffix="%" />
            </h3>
            <p className="font-figtree text-[#998C85] text-[15px] font-normal">
              Uptime guarantee
            </p>
          </motion.div>

          {/* Stat 3: Free SSL */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center pb-2 md:pb-0"
          >
            <h3 className="font-fraunces font-bold text-[#F24E29] text-[40px]">
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.45,
                }}
                className="inline-block"
              >
                Free
              </motion.span>
            </h3>
            <p className="font-figtree text-[#998C85] text-[15px] font-normal">
              SSL on every site
            </p>
          </motion.div>
        </motion.div>
      </Bounded>
    </section>
  );
}
