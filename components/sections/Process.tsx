"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    desc: "Deep-dive into your current ads, social presence, and funnels. I identify what's leaking money and where the quick wins are.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy",
    desc: "A custom game plan — audience targeting, creative angles, budget allocation, and a content roadmap built around your goals.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch",
    desc: "Campaigns go live with A/B tested creatives, precise targeting, and WhatsApp-ready funnels to capture inquiries from day one.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimize",
    desc: "Continuous monitoring, weekly reports, and relentless optimization. Lowering CPR, raising ROAS, scaling what works.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-16 sm:py-32 lg:min-h-screen lg:flex lg:items-center overflow-hidden"
    >
      {/* Bg */}
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg-secondary to-bg pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <span className="inline-block text-[11px] sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            My Process
          </span>
          <h2 className="heading text-2xl sm:text-4xl md:text-5xl text-fg mb-3 sm:mb-4">
            From Chaos to{" "}
            <span className="gradient-text">Consistent Growth</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            A proven four-step framework that turns ad spend into measurable
            revenue.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#FF7A00]/20 to-transparent pointer-events-none" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="group relative rounded-2xl sm:rounded-3xl border border-card-border bg-card-bg p-4 sm:p-8 text-center hover:border-[#FF7A00]/30 hover:bg-[#FF7A00]/[0.03] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Step number */}
                <div className="relative mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-icon-bg border border-icon-border flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30 transition-all duration-500">
                  <Icon
                    size={20}
                    className="text-fg-muted group-hover:text-[#FF7A00] transition-colors duration-500 sm:w-6 sm:h-6"
                  />
                  <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 text-[9px] sm:text-[10px] font-bold text-[#FF7A00] bg-[#FF7A00]/10 border border-[#FF7A00]/20 px-1.5 sm:px-2 py-0.5 rounded-full">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-fg mb-1.5 sm:mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-fg-subtle leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
