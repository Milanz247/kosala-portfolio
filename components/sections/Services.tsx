"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Megaphone,
  LayoutGrid,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads (Lead Generation)",
    description:
      "I build campaigns around one outcome: your phone ringing with people who actually want to book. Not reach numbers. Not likes. Bookings. I've run this for wellness centres, dental clinics, and skincare brands — and I keep optimizing until the cost per conversation makes the spend feel obvious.",
    outcome: "You wake up to WhatsApp messages, not silence.",
    features: [
      "Campaign setup, A/B testing & optimization",
      "Local audience targeting (UAE & Sri Lanka)",
      "WhatsApp & inquiry-focused funnels",
      "Ad creative strategy & copywriting",
    ],
    featured: true,
  },
  {
    icon: LayoutGrid,
    title: "Social Media Management",
    description:
      "Your clinic needs to look alive online — even on the days you're fully booked. I handle the content plan, calendar, editing, and scheduling so your Instagram and Facebook stay professional and active without you having to think about it.",
    outcome: "Your brand looks active and professional — even when you're busy with clients.",
    features: [
      "Content planning & monthly calendar",
      "Reel strategy and execution",
      "Consistent posting structure",
      "Community & engagement management",
    ],
    featured: false,
  },
  {
    icon: BarChart3,
    title: "ROI Reporting & Strategy",
    description:
      "Most clients get a PDF at month-end and have no idea what they're looking at. Every month you get a real breakdown — what we spent, what it generated, what I'm changing and why. You'll never wonder if your money was wasted. You'll know.",
    outcome: "You'll always know which AED is working and which to cut.",
    features: [
      "Monthly performance dashboards",
      "ROAS & CPR tracking",
      "Strategy optimization cycles",
      "Funnel-based content roadmap",
    ],
    featured: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-16 sm:py-32 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <span className="inline-block text-[11px] sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            Services
          </span>
          <h2 className="heading text-2xl sm:text-4xl md:text-5xl text-fg mb-3 sm:mb-4">
            Three things. <span className="gradient-text">One goal.</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            Everything I do is built around a single question: did your phone ring because of this?
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className={`group relative rounded-2xl sm:rounded-3xl border p-5 sm:p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 ${
                  service.featured
                    ? "border-[#FF7A00]/30 bg-[#FF7A00]/[0.04] shadow-xl shadow-[#FF7A00]/5 glow-orange"
                    : "border-card-border bg-card-bg hover:border-[#FF7A00]/20 hover:bg-card-bg-hover"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-px left-6 right-6 sm:left-8 sm:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />
                )}

                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-500 ${
                    service.featured
                      ? "bg-[#FF7A00]/20 border border-[#FF7A00]/30"
                      : "bg-icon-bg border border-icon-border group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/20"
                  }`}
                >
                  <Icon
                    size={24}
                    className={`transition-colors ${
                      service.featured ? "text-[#FF7A00]" : "text-fg-muted group-hover:text-[#FF7A00]"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold text-fg mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-fg-subtle leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className={`text-xs font-semibold italic mb-6 px-3 py-2 rounded-xl border ${
                  service.featured
                    ? "text-[#FF7A00] bg-[#FF7A00]/[0.06] border-[#FF7A00]/15"
                    : "text-fg-muted bg-icon-bg border-card-border"
                }`}>
                  💬 &ldquo;{service.outcome}&rdquo;
                </div>

                <ul className="space-y-3 mt-auto">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="text-[#FF7A00] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-fg-muted">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
