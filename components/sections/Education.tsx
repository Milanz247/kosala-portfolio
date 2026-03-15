"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  CalendarDays,
  Building2,
  ExternalLink,
} from "lucide-react";

const education = [
  {
    title: "Diploma in Digital Marketing",
    period: "2023 – 2024",
    institution: "Luxway Campus, Sri Lanka",
    description:
      "Comprehensive program covering SEO, paid advertising, content strategy, social media marketing, and performance analytics.",
  },
];

const certifications = [
  {
    name: "Meta Certified Digital Marketing Associate",
    issuer: "Meta",
    year: "2025",
    color: "#1877F2",
    badge: "Meta",
  },
  {
    name: "Social Media Marketing Certification",
    issuer: "HubSpot Academy",
    year: "2025",
    color: "#FF7A59",
    badge: "HubSpot",
  },
  {
    name: "Digital Marketing Certification",
    issuer: "HubSpot Academy",
    year: "2025",
    color: "#FF7A59",
    badge: "HubSpot",
  },
  {
    name: "Meta Blueprint Certification",
    issuer: "Meta Blueprint",
    year: "2025",
    color: "#1877F2",
    badge: "Meta",
  },
];

const badgeGradients: Record<string, string> = {
  Meta: "from-[#1877F2] to-[#0a5dc2]",
  HubSpot: "from-[#FF7A59] to-[#c94a2b]",
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-16 sm:py-32 lg:min-h-screen lg:flex lg:items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-secondary to-bg pointer-events-none" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF7A00]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 w-full">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <span className="inline-block text-[11px] sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            Credentials
          </span>
          <h2 className="heading text-2xl sm:text-4xl md:text-5xl text-fg mb-3 sm:mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            Formal training and industry-recognised credentials that back every
            strategy I build.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {/* ── LEFT: Education ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            {/* Section label */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#CC5500] flex items-center justify-center shadow-md shadow-[#FF7A00]/20 flex-shrink-0">
                <GraduationCap size={15} className="text-white" />
              </div>
              <span className="text-sm font-bold text-fg tracking-wide uppercase">
                Education
              </span>
            </div>

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="group relative rounded-2xl sm:rounded-3xl border border-card-border bg-card-bg p-5 sm:p-7 hover:border-[#FF7A00]/25 transition-all duration-500 overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />

                {/* Diploma decoration */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#FF7A00]/[0.03] border border-[#FF7A00]/[0.08] group-hover:scale-110 transition-transform duration-700 delay-75" />

                <div className="relative">
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-fg tracking-tight mb-4 leading-snug">
                    {edu.title}
                  </h3>

                  {/* Meta rows */}
                  <div className="space-y-2.5 mb-4">
                    <div className="flex items-center gap-2 text-fg-subtle text-[11px] sm:text-xs">
                      <Building2
                        size={12}
                        className="text-[#FF7A00] flex-shrink-0"
                      />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-fg-subtle text-[11px] sm:text-xs">
                      <CalendarDays
                        size={12}
                        className="text-[#FF7A00] flex-shrink-0"
                      />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-fg-muted text-xs sm:text-sm leading-relaxed border-t border-card-border pt-4">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── RIGHT: Certifications ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {/* Section label */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#CC5500] flex items-center justify-center shadow-md shadow-[#FF7A00]/20 flex-shrink-0">
                <Award size={15} className="text-white" />
              </div>
              <span className="text-sm font-bold text-fg tracking-wide uppercase">
                Certifications
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                  className="group relative rounded-2xl border border-card-border bg-card-bg hover:border-[#FF7A00]/25 hover:bg-[#FF7A00]/[0.015] transition-all duration-400 overflow-hidden"
                >
                  {/* Side accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: `linear-gradient(to bottom, ${cert.color}, ${cert.color}88)`,
                    }}
                  />

                  <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 pl-5 sm:pl-6">
                    {/* Badge icon */}
                    <div
                      className={`flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${
                        badgeGradients[cert.badge] ||
                        "from-[#FF7A00] to-[#CC5500]"
                      } flex items-center justify-center shadow-lg`}
                      style={{
                        boxShadow: `0 4px 16px ${cert.color}30`,
                      }}
                    >
                      <BadgeCheck
                        size={16}
                        className="text-white sm:w-5 sm:h-5"
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-fg leading-snug mb-0.5 group-hover:text-[#FF7A00] transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-fg-subtle font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Year badge */}
                    <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
                      <span className="text-[10px] sm:text-xs font-bold text-[#FF7A00] bg-[#FF7A00]/[0.08] border border-[#FF7A00]/15 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                        {cert.year}
                      </span>
                      <ExternalLink
                        size={12}
                        className="text-fg-muted opacity-0 group-hover:opacity-60 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
