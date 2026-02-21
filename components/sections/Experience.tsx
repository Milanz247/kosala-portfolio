"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experience = [
  {
    title: "Freelance Meta Ads Strategist",
    period: "2024 – Present",
    sector: "Service-Based Businesses · UAE & Sri Lanka",
    points: [
      "Managing social media accounts and Meta ad campaigns for clinics and local brands",
      "Building content strategies and Reels concepts aligned with business ROI goals",
      "Running lead generation campaigns focused on WhatsApp inquiries and bookings",
      "Supporting businesses in improving online presence, reach, and customer acquisition",
      "Delivering monthly performance reports with actionable optimization insights",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-16 sm:py-32 lg:min-h-screen lg:flex lg:items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-secondary to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <span className="inline-block text-[11px] sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            Experience
          </span>
          <h2 className="heading text-2xl sm:text-4xl md:text-5xl text-fg mb-3 sm:mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Building real-world results through direct client work
            across industries.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl sm:rounded-3xl border border-card-border bg-card-bg p-5 sm:p-8 hover:border-[#FF7A00]/20 transition-all duration-500"
            >
              {/* Top accent line */}
              <div className="absolute -top-px left-6 right-6 sm:left-8 sm:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />

              <div className="flex items-start gap-3 sm:gap-5">
                <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#CC5500] flex items-center justify-center shadow-lg shadow-[#FF7A00]/20">
                  <Briefcase size={18} className="text-white sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1">
                    <h3 className="text-base sm:text-xl font-extrabold text-fg tracking-tight">
                      {exp.title}
                    </h3>
                    <span className="text-[10px] sm:text-sm font-semibold text-[#FF7A00] bg-[#FF7A00]/[0.06] border border-[#FF7A00]/15 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-fg-subtle text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    {exp.sector}
                  </p>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                        <CheckCircle2
                          size={14}
                          className="text-[#FF7A00] mt-0.5 flex-shrink-0 sm:w-4 sm:h-4"
                        />
                        <span className="text-fg-muted text-xs sm:text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
