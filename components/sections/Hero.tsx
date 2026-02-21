"use client";

import React from "react";
import { ArrowDown, Phone, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="mesh-gradient w-[700px] h-[700px] -top-40 -right-40"
          style={{ background: "radial-gradient(circle, #FF7A00 0%, transparent 70%)" }}
        />
        <div
          className="mesh-gradient w-[500px] h-[500px] bottom-10 -left-40"
          style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)" }}
        />
        <div
          className="mesh-gradient w-[300px] h-[300px] top-1/3 left-1/2"
          style={{ background: "radial-gradient(circle, #FF7A00 0%, transparent 70%)", opacity: 0.06 }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,122,0,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 sm:pt-36 sm:pb-24">
        <div className="max-w-4xl">
          {/* Location pill */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin size={13} />
              Based in Al Ain, UAE · Available Worldwide
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-fg mb-6 sm:mb-8"
          >
            Your Business,{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">Scaled With</span>
            <br />
            Meta Ads That Deliver{" "}
            <br className="hidden md:block" />
            <span className="text-[#FF7A00]">Loyal Customers.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed mb-4 max-w-2xl"
          >
            I&apos;m <span className="text-fg font-semibold">Kosala</span> — Your Meta Ads Strategist.{" "}
            <span className="text-fg-subtle">Partner, not an agency.</span>
          </motion.p>

          <motion.p
            {...fadeUp(0.25)}
            className="text-sm sm:text-base text-fg-subtle leading-relaxed mb-10 max-w-xl"
          >
            Helping service-based businesses generate qualified inquiries
            and loyal customers through data-driven Meta advertising and
            strategic social media.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-3 mb-16 sm:mb-24">
            <a
              href="https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to book a free 15-min audit."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 h-12 sm:h-14 px-7 sm:px-8 text-sm sm:text-base font-semibold rounded-3xl bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-xl shadow-[#FF7A00]/25 hover:shadow-[#FF7A00]/40 transition-all duration-300 active:scale-95"
            >
              <Phone size={16} />
              Book a Free 15-Min Audit
              <Sparkles size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            <button
              onClick={() => scrollTo("#case-studies")}
              className="inline-flex items-center gap-2 h-12 sm:h-14 px-7 sm:px-8 text-sm sm:text-base font-semibold rounded-3xl border border-card-border text-fg-muted hover:text-fg hover:border-card-border hover:bg-card-bg-hover transition-all duration-300 active:scale-95"
            >
              View My Work
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.5)}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md border-t border-card-border pt-8"
          >
            {[
              { value: "2+", label: "Successful Campaigns" },
              { value: "Meta", label: "Ads Partner" },
              { value: "UAE/LK", label: "Markets Served" },
            ].map((s) => (
              <div key={s.label} className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF7A00] tracking-tight mb-1">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs text-fg-subtle font-medium leading-snug uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("#pain-points")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-subtle hover:text-[#FF7A00] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  );
}
