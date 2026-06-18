"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFoundPage() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    import("../../../public/lottie/404NotFound.json").then((mod) => {
      setAnimationData(mod.default);
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#FEF8F6]">
      <div className="max-w-[400px] min-h-[300px] mx-auto flex items-center justify-center">
        {animationData ? (
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        ) : (
          <div className="size-full" />
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-6 mb-20">
        <h2 className="text-[#2E0D05] text-4xl font-extrabold font-fraunces">
          Something went wrong!
        </h2>
        <p className="text-[#6B5F57] text-lg font-medium font-figtree">
          Sorry, We {`can’t find the page you’re`} looking for.
        </p>
        <Link
          href="/"
          className="bg-[#F24E29] group font-figtree text-white text-lg font-semibold px-6 py-4 rounded-full hover:bg-coral-600 transition-colors disabled:opacity-50 flex items-center gap-2 disabled:pointer-events-none"
        >
          <FaArrowLeft className="size-5 group-hover:mr-2 transition-all duration-300" />
          <span className="tracking-wide">Go Back</span>
        </Link>
      </div>
      {/* Glowing circles */}
      <div className="size-115 rounded-full bg-[#F26B45] opacity-60 blur-[197px] absolute bottom-0 right-0" />
      <div className="size-102 rounded-full bg-[#F4B53F] opacity-30 blur-[197px] absolute bottom-0 left-0" />
    </div>
  );
}
