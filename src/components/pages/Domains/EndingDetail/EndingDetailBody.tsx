"use client";

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import { CtaCard } from "@/components/shared/CtaCard";
import type { DomainEnding } from "@/lib/domain-endings";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

interface FAQ {
  q: string;
  a: string;
}

function buildFaqs(ending: DomainEnding): FAQ[] {
  const ext = ending.ext;
  return [
    {
      q: `Who can register a ${ext}?`,
      a:
        ext === ".co.uk"
          ? "Anyone can register a .co.uk domain — there are no geographic or eligibility restrictions. It's open to individuals, businesses, and organisations worldwide."
          : ext === ".io"
          ? ".io is open to anyone globally. There are no residency or business requirements. It's particularly popular with tech startups, SaaS products, and developer tools."
          : ext === ".ai"
          ? ".ai is open to any individual or organisation globally, with no eligibility requirements. It's the go-to TLD for artificial intelligence companies and products."
          : ext === ".dev" || ext === ".app"
          ? `${ext} is a Google-backed TLD open to anyone. There are no eligibility restrictions. Note that HTTPS is mandatory — all ${ext} sites must have a valid SSL certificate.`
          : `${ext} is open to any individual or organisation worldwide. There are no special eligibility requirements to register a ${ext} domain.`,
    },
    {
      q: `How long does it take?`,
      a: `Registration is instant. Once you complete your order, your ${ext} domain is active within minutes. DNS propagation across the global internet typically takes between a few minutes and 48 hours, though most visitors will see your site within the first hour.`,
    },
    {
      q: `Can I move it later?`,
      a: `Yes. You can transfer your ${ext} domain to any accredited registrar at any time after the initial 60-day lock period that follows a new registration or a recent transfer. Your website and email will keep working throughout the transfer.`,
    },
    {
      q: `Does it include WHOIS privacy?`,
      a: `Yes — WHOIS privacy (also called domain privacy or ID protection) is included free with every ${ext} registration. Your personal contact details are replaced with our proxy details in the public WHOIS database.`,
    },
    {
      q: `Can I use it with any website builder?`,
      a: `Absolutely. Your ${ext} domain works with any website builder, hosting provider, or CMS — including CortexGrip's own website builder, WordPress, Shopify, Wix, Squarespace, and more. You simply point your domain's DNS to your chosen platform.`,
    },
  ];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

export function EndingDetailBody({ ending }: { ending: DomainEnding }) {
  const faqs = buildFaqs(ending);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* FAQ section — matches PricingFAQ style */}
      <section className="w-full bg-[#fef8f6] relative overflow-hidden">
        <Bounded className="flex flex-col items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <motion.div variants={fadeUpVariants}>
              <Badge text="FAQ's" className="w-fit" />
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="font-fraunces text-[38px] font-bold leading-normal text-[#221c19] sm:text-[42px]"
            >
              Questions{" "}
              <span className="text-coral-500">about {ending.ext}</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-200 mx-auto mt-10"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div key={faq.q} variants={fadeUpVariants}>
                  <div className="flex flex-col my-3.5">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left outline-none group"
                    >
                      <span className="font-fraunces text-[17px] font-bold leading-normal text-[#221c19] group-hover:text-coral-500 transition-colors duration-200">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="flex size-9 shrink-0 items-center justify-center rounded-[6px] transition-colors duration-300 bg-[#FDECE6] text-coral-500 group-hover:bg-coral-500 group-hover:text-white"
                      >
                        {isOpen ? <LuMinus className="size-5" /> : <LuPlus className="size-5" />}
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3.5 pb-2">
                            <p className="font-figtree text-base leading-6 text-[#6b5f57]">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="h-px w-full bg-[#ebe4da]" />
                </motion.div>
              );
            })}
          </motion.div>
        </Bounded>
      </section>

      {/* CTA — reuse the shared CtaCard exactly like other pages */}
      <CtaCard
        heading="Register your"
        headingHighlight={`${ending.ext} domain today`}
        subtext={`${ending.tagline}. ${ending.price} — includes free WHOIS privacy.`}
        ctaLabel={`Get my ${ending.ext}`}
      />
    </>
  );
}
