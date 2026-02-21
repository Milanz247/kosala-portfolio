"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  Layout,
  Palette,
  Video,
  CalendarDays,
  Map,
} from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    name: "Meta Ads Manager",
    proficiency: "Advanced",
    desc: "Full campaign lifecycle — setup, A/B testing, optimization, scaling, and performance reporting.",
  },
  {
    icon: Layout,
    name: "Meta Business Suite",
    proficiency: "Advanced",
    desc: "Page management, content scheduling, unified inbox management, and analytics insights.",
  },
  {
    icon: Palette,
    name: "Canva",
    proficiency: "Expert",
    desc: "Custom brand templates, ad creatives, stories, and polished social media post designs.",
  },
  {
    icon: Video,
    name: "CapCut",
    proficiency: "Proficient",
    desc: "Reels editing with trending transitions, captions, audio sync, and visual effects.",
  },
  {
    icon: CalendarDays,
    name: "Content Calendar Planning",
    proficiency: "Advanced",
    desc: "Monthly structured content plans for consistent posting and strategic audience growth.",
  },
  {
    icon: Map,
    name: "Social Media Strategy",
    proficiency: "Advanced",
    desc: "Audience research, funnel-based content mapping, and sustainable growth strategy.",
  },
];

const proficiencyColors: Record<string, string> = {
  Expert: "text-[#FF7A00] bg-[#FF7A00]/[0.06] border-[#FF7A00]/20",
  Advanced: "text-emerald-400 bg-emerald-400/[0.06] border-emerald-400/20",
  Proficient: "text-sky-400 bg-sky-400/[0.06] border-sky-400/20",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-4 py-1.5 rounded-full mb-5">
            My Toolbox
          </span>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl text-fg mb-4">
            Tools & <span className="gradient-text">Skills</span> I Use Daily
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The platforms and skills behind every successful campaign I run
            for service-based businesses.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
                className="group rounded-3xl border border-card-border bg-card-bg p-5 sm:p-6 hover:border-[#FF7A00]/20 hover:bg-[#FF7A00]/[0.02] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-icon-bg border border-icon-border flex items-center justify-center group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/20 transition-all duration-500">
                    <Icon
                      size={22}
                      className="text-fg-muted group-hover:text-[#FF7A00] transition-colors duration-500"
                    />
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border ${
                      proficiencyColors[skill.proficiency] || "text-fg-muted"
                    }`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                <h4 className="font-bold text-fg text-base mb-2 tracking-tight">
                  {skill.name}
                </h4>
                <p className="text-sm text-fg-subtle leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
