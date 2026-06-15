"use client";
import { useMotionValueEvent, MotionValue } from "motion/react";
import { useState } from "react";

export function Debugger({ val }: { val: MotionValue<number> }) {
  const [v, setV] = useState(0);
  useMotionValueEvent(val, "change", (latest) => setV(latest));
  return (
    <div className="fixed top-0 left-0 z-50 bg-black text-white p-4 font-mono text-xl">
      Progress: {v.toFixed(3)}
    </div>
  );
}
