import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { forwardRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuSparkle } from "react-icons/lu";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  showLink?: boolean;
  linkText?: string;
  href?: string;
  showArrow?: boolean;
}

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      title,
      description,
      icon,
      showLink = true,
      linkText = "Explore",
      href = "#",
      showArrow = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full flex-col rounded-[16px] bg-white p-6",
          className,
        )}
        {...props}
      >
        {/* Icon Container */}
        <div className="flex size-14 bg-[#FDECE6] items-center justify-center rounded-full text-coral-500 shrink-0">
          {icon || <LuSparkle className="size-6" />}
        </div>

        {/* Title */}
        <h3 className="font-fraunces text-[24px] xl:text-[26px] font-bold text-[#221C19] mt-10">
          {title}
        </h3>

        {/* Description */}
        <p className="flex-1 font-figtree text-[17px] text-[#6B5F57] leading-7 mt-4 mb-10">
          {description}
        </p>

        {/* Optional Action Button */}
        {showLink && (
          <Link
            href={href}
            className="group relative flex h-12 items-center justify-center overflow-hidden bg-white text-[#221C19] hover:text-[#F24E29] tracking-wider border border-[#221C19] font-figtree w-full hover:border-[#F24E29] hover:bg-[#FDECE6] cursor-pointer rounded-full transition-all duration-300 active:scale-[0.98] text-center"
          >
            {/* Text Wrapper */}
            <span className="relative flex h-full w-full items-center justify-center overflow-hidden font-normal">
              {/* Default State */}
              <span className="flex items-center gap-2 transition-all duration-500 group-hover:-translate-y-14 group-hover:rotate-6">
                {linkText}
                {showArrow && <FaArrowRight className="size-4" />}
              </span>
              {/* Hover State */}
              <span className="flex items-center gap-2 absolute translate-y-14 transition-all duration-500 group-hover:translate-y-0">
                {linkText}
                {showArrow && <FaArrowRight className="size-4" />}
              </span>
            </span>
          </Link>
        )}
      </div>
    );
  },
);

ProductCard.displayName = "ProductCard";
