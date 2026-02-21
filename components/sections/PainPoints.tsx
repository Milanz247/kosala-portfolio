"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Ban,
  TrendingDown,
  CircleDollarSign,
  Target,
} from "lucide-react";

const pains = [
  {
    icon: Ban,
    title: "Boosting Posts and Hoping for the Best?",
    desc: "Random boosts with no strategy just burn through your budget with nothing to show for it.",
  },
  {
    icon: TrendingDown,
    title: "Leads Coming In But Never Converting?",
    desc: "Unqualified inquiries waste your team's time. The ad strategy needs to filter before the click.",
  },
  {
    icon: CircleDollarSign,
    title: "Spending on Ads With Zero ROI Clarity?",
    desc: "If you can't see exactly what each dirham is returning, you're flying blind.",
  },
  {
    icon: Target,
    title: "Tried Agencies That Don't Understand Your Niche?",
    desc: "Big agencies treat you like a number. You need a specialist who lives and breathes your industry.",
  },
];

export default function PainPoints() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pain-points"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg-secondary to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-4 py-1.5 rounded-full mb-5">
            Sound Familiar?
          </span>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl text-fg mb-4">
            These Problems Are{" "}
            <span className="gradient-text">Costing You Money</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            If any of these sound like your business, you&apos;re not alone — and
            there&apos;s a better way.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 hover:border-[#FF7A00]/30 hover:bg-[#FF7A00]/[0.03] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30 transition-colors duration-500">
                  <Icon
                    size={22}
                    className="text-red-400 group-hover:text-[#FF7A00] transition-colors duration-500"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-fg mb-2 tracking-tight">
                  {pain.title}
                </h3>
                <p className="text-sm text-fg-subtle leading-relaxed">
                  {pain.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
