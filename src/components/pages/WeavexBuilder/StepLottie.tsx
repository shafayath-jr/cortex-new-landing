"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

interface StepLottieProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StepLottie({ src, className, style }: StepLottieProps) {
  return (
    <div className={className} style={style}>
      <DotLottieReact src={src} loop autoplay />
    </div>
  );
}
