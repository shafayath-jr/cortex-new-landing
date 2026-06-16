import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ text, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "font-figtree inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(90deg,#F24E29_-87.66%,rgba(242,78,41,0)_41.77%)] px-3.5 py-2",
          className
        )}
        {...props}
      >
        <span className="text-[#F24E29] font-figtree text-[16px] sm:text-[18px] font-semibold">
          {text}
        </span>
      </div>
    );
  }
);

Badge.displayName = "Badge";
