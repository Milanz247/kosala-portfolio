"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Honestly, we’d tried boosting posts before and got nothing. Kosala completely changed how we were doing it. Two weeks in, we actually had to ask him to slow down the ads — we couldn’t keep up with the inquiries. The cost per conversation was nothing like what we’d been spending before.",
    name: "Layan Wellness Team",
    role: "Wellness Brand",
    location: "UAE 🇦🇪",
    result: "40+ WhatsApp conversations · AED 8–10 avg. CPR",
    initials: "LW",
    color: "#FF7A00",
  },
  {
    quote:
      "Before we started, our Instagram was basically empty. Kosala put together a content plan, handled the posting, and set up the ads. That first month, we had more WhatsApp inquiries from local people than the previous three months combined.",
    name: "Clear Skin Panadura",
    role: "Skincare Clinic",
    location: "Sri Lanka 🇱🇰",
    result: "Consistent inbound inquiries · Organic reach growth",
    initials: "CS",
    color: "#10b981",
  },
  {
    quote:
      "I’d worked with an agency before. They sent me a report every month, I had no idea what it meant, and I just kept paying. Kosala actually walks you through the numbers. When something wasn’t working, he told me first and explained exactly what he was changing. That kind of honesty is rare.",
    name: "Amani Home Services",
    role: "Home Maintenance Brand",
    location: "Dubai, UAE 🇦🇪",
    result: "Lower CPR through weekly optimization",
    initials: "AH",
    color: "#6366f1",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-16 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg-secondary to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-[11px] sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            What Clients Say
          </span>
          <h2 className="heading text-2xl sm:text-4xl md:text-5xl text-fg mb-3 sm:mb-4">
            Don&apos;t Just Take{" "}
            <span className="gradient-text">My Word For It</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            Real feedback from real businesses that trusted the process.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="relative rounded-2xl sm:rounded-3xl border border-card-border bg-card-bg p-5 sm:p-7 flex flex-col hover:border-[#FF7A00]/20 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Top accent */}
              <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A00]/40 to-transparent rounded-full" />

              {/* Quote icon */}
              <div className="w-9 h-9 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center mb-4 flex-shrink-0">
                <Quote size={16} className="text-[#FF7A00]" />
              </div>

              {/* Quote text */}
              <p className="text-fg-muted text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div className="text-[10px] sm:text-xs font-semibold text-[#FF7A00] bg-[#FF7A00]/[0.06] border border-[#FF7A00]/15 px-3 py-1.5 rounded-full mb-4 w-fit">
                ✅ {t.result}
              </div>

              {/* Divider */}
              <div className="border-t border-card-border pt-4 flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-black shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-fg text-sm leading-tight">{t.name}</p>
                  <p className="text-fg-subtle text-xs mt-0.5">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
