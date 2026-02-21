"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, TrendingUp, Check, X as XIcon, Play } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Performance-Focused",
    desc: "Every campaign is designed to generate measurable inquiries, not just likes and impressions.",
  },
  {
    icon: Users,
    title: "Service Business Specialist",
    desc: "Deep experience with clinics, local businesses, and service providers in UAE and Sri Lanka.",
  },
  {
    icon: TrendingUp,
    title: "Integrated Approach",
    desc: "Combining organic social media strategy with paid Meta advertising for compounded results.",
  },
];

const comparison = [
  { feature: "Direct access to the person running your ads", me: true, agency: false },
  { feature: "Custom strategy for your specific niche", me: true, agency: false },
  { feature: "Same-day response time", me: true, agency: false },
  { feature: "Transparent reporting with zero fluff", me: true, agency: false },
  { feature: "You're not account #247 in a queue", me: true, agency: false },
  { feature: "Service-based business expertise", me: true, agency: false },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-4 py-1.5 rounded-full mb-5">
            About Me
          </span>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl text-fg mb-4">
            Meet <span className="gradient-text">Kosala Dananjaya</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Your Meta Ads Strategist — partner, not an agency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left — Profile + photo placeholder + video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 mb-6">
              {/* Photo placeholder */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#FF7A00] to-[#CC5500] flex items-center justify-center text-white text-4xl font-extrabold mb-6 shadow-xl shadow-[#FF7A00]/20">
                K
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-fg mb-1 tracking-tight">
                Kosala Dananjaya
              </h3>
              <p className="text-[#FF7A00] text-sm font-semibold mb-5">
                Meta Ads Strategist & Social Media Manager
              </p>
              <p className="text-fg-muted text-sm leading-relaxed mb-4">
                I focus on combining content strategy with performance marketing
                to help businesses increase visibility and generate inquiries
                through social media platforms.
              </p>
              <p className="text-fg-subtle text-sm leading-relaxed mb-6">
                Experience working with{" "}
                <span className="text-fg font-medium">dental and skincare clinics</span>{" "}
                and local businesses — improving engagement, awareness, and customer
                inquiries through structured advertising strategies.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Meta Ads", "Social Media", "Content Strategy", "Al Ain, UAE", "Sri Lanka"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#FF7A00] border border-[#FF7A00]/15 bg-[#FF7A00]/[0.06] px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Available badge */}
              <div className="absolute -top-3 -right-3 text-[10px] font-bold text-white bg-[#FF7A00] px-3 py-1.5 rounded-full shadow-lg shadow-[#FF7A00]/30 hidden sm:block">
                Available for Projects
              </div>
            </div>

            {/* 30-second intro video placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-3xl border border-card-border bg-card-bg overflow-hidden aspect-video flex items-center justify-center cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-transparent" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00]/30 flex items-center justify-center group-hover:bg-[#FF7A00]/30 group-hover:scale-110 transition-all duration-300">
                  <Play size={24} className="text-[#FF7A00] ml-1" />
                </div>
                <span className="text-xs font-semibold text-fg-muted">
                  Watch 30-Second Intro
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Highlights + Comparison table */}
          <div className="space-y-6">
            {/* Highlights */}
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="group flex gap-4 rounded-3xl border border-card-border bg-card-bg p-5 sm:p-6 hover:border-[#FF7A00]/20 hover:bg-[#FF7A00]/[0.02] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-icon-bg border border-icon-border flex items-center justify-center group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/20 transition-all duration-500">
                    <Icon
                      size={20}
                      className="text-fg-muted group-hover:text-[#FF7A00] transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-fg mb-1">{item.title}</h4>
                    <p className="text-sm text-fg-subtle leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Agency vs Me comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-3xl border border-card-border bg-card-bg p-5 sm:p-6 overflow-hidden"
            >
              <h4 className="font-bold text-fg mb-5 text-lg tracking-tight">
                Agency vs <span className="text-[#FF7A00]">Me</span>
              </h4>
              <div className="space-y-3">
                <div className="grid grid-cols-[1fr_50px_50px] sm:grid-cols-[1fr_80px_80px] gap-2 text-xs font-semibold text-fg-subtle uppercase tracking-wider pb-2 border-b border-card-border">
                  <span></span>
                  <span className="text-center text-[#FF7A00]">Me</span>
                  <span className="text-center">Agency</span>
                </div>
                {comparison.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_50px_50px] sm:grid-cols-[1fr_80px_80px] gap-2 items-center py-1.5"
                  >
                    <span className="text-sm text-fg-muted">{row.feature}</span>
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#FF7A00]/10 flex items-center justify-center">
                        <Check size={14} className="text-[#FF7A00]" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                        <XIcon size={14} className="text-red-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
