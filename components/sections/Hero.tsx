"use client";

import React from "react";
import { ArrowDown, Phone, MapPin, CheckCircle2, Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
});

const services = [
  "Meta Ads & Lead Generation",
  "Social Media Management",
  "Content Strategy & Reels",
  "Brand Growth for Clinics & Local Businesses",
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="mesh-gradient w-[700px] h-[700px] -top-40 -right-40 opacity-50"
          style={{ background: "radial-gradient(circle, #FF7A00 0%, transparent 65%)" }}
        />
        <div
          className="mesh-gradient w-[500px] h-[500px] bottom-0 -left-40 opacity-30"
          style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,122,0,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Location + availability */}
            <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#FF7A00] border border-[#FF7A00]/25 bg-[#FF7A00]/[0.06] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
                <MapPin size={10} />
                Al Ain, UAE
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-400 border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 rounded-full">
                <Globe size={10} />
                Available Worldwide
              </span>
            </motion.div>

            {/* Name + role */}
            <motion.div {...fadeUp(0.08)} className="mb-4 sm:mb-5">
              <p className="text-sm sm:text-base font-semibold text-fg-muted mb-1">
                Hi, I&apos;m
              </p>
              <h1 className="heading text-4xl sm:text-5xl md:text-6xl text-fg leading-[1.1] tracking-tight">
                Kosala{" "}
                <span className="gradient-text">Dananjaya</span>
              </h1>
            </motion.div>

            {/* Role tag */}
            <motion.div {...fadeUp(0.15)} className="mb-5 sm:mb-6">
              <p className="text-base sm:text-xl font-semibold text-fg-muted leading-snug">
                Meta Ads Strategist &{" "}
                <span className="text-fg">Social Media Manager</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.22)} className="text-sm sm:text-base text-fg-subtle leading-relaxed mb-8 max-w-lg">
              I help clinics, local businesses, and service brands in{" "}
              <span className="text-fg font-medium">UAE & Sri Lanka</span> grow their
              online presence and generate real customer inquiries — through
              strategic Meta advertising and data-driven social media.
            </motion.p>

            {/* Service tags */}
            <motion.div {...fadeUp(0.28)} className="flex flex-col gap-2 mb-8 sm:mb-10">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#FF7A00] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-fg-muted">{s}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-6 sm:px-8 text-sm font-bold rounded-2xl bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-xl shadow-[#FF7A00]/30 hover:shadow-[#FF7A00]/50 transition-all duration-300 active:scale-95 w-full sm:w-auto"
              >
                <Phone size={15} />
                Let&apos;s Work Together
              </a>
              <button
                onClick={() => scrollTo("#case-studies")}
                className="group inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-6 sm:px-8 text-sm font-bold rounded-2xl border border-card-border text-fg-muted hover:text-fg hover:bg-card-bg-hover transition-all duration-300 active:scale-95 w-full sm:w-auto"
              >
                View My Work
                <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div {...fadeIn(0.4)} className="hidden lg:flex items-center justify-center">
            <div className="relative w-[360px] h-[480px]">

              {/* Background decorative ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-[#FF7A00]/15 scale-105" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-[#FF7A00]/8 scale-110" />

              {/* Dot grid pattern top-right */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20"
                style={{ backgroundImage: "radial-gradient(circle, #FF7A00 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }} />
              {/* Dot grid pattern bottom-left */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-15"
                style={{ backgroundImage: "radial-gradient(circle, #FF7A00 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }} />

              {/* Big soft glow */}
              <div className="absolute inset-6 rounded-3xl bg-[#FF7A00]/25 blur-3xl pointer-events-none" />

              {/* Orange accent line — left edge */}
              <div className="absolute left-0 top-16 bottom-16 w-[3px] rounded-full bg-linear-to-b from-transparent via-[#FF7A00] to-transparent" />

              {/* Photo frame */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-2 border-[#FF7A00]/30 shadow-2xl shadow-[#FF7A00]/20">
                <img src="/photo.jpg" alt="Kosala Dananjaya" className="w-full h-full object-cover object-top" />
                {/* Subtle bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Hiring pill — top right */}
              <div className="absolute -top-3 right-6 flex items-center gap-1.5 bg-[#FF7A00]/10 border border-[#FF7A00]/30 backdrop-blur-sm text-[#FF9230] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
                Hiring Me? Let&apos;s Talk
              </div>

              {/* Stats badge — top left floating */}
              <div className="absolute -left-10 top-16 bg-card-bg/90 backdrop-blur-sm border border-card-border rounded-2xl px-4 py-3 shadow-xl shadow-black/20 flex flex-col items-center">
                <span className="text-xl font-black text-[#FF7A00] leading-none">50+</span>
                <span className="text-[9px] text-fg-subtle font-semibold mt-0.5 whitespace-nowrap">Happy Clients</span>
              </div>

              {/* Experience badge — bottom left floating */}
              <div className="absolute -left-10 bottom-20 bg-card-bg/90 backdrop-blur-sm border border-card-border rounded-2xl px-4 py-3 shadow-xl shadow-black/20 flex flex-col items-center">
                <span className="text-xl font-black text-[#FF7A00] leading-none">5+</span>
                <span className="text-[9px] text-fg-subtle font-semibold mt-0.5 whitespace-nowrap">Yrs Experience</span>
              </div>

              {/* Name card — bottom overlay inside frame */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold text-white tracking-tight leading-none">Kosala Dananjaya</p>
                  <p className="text-[10px] text-[#FF9230] font-semibold mt-0.5">Meta Ads Strategist</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold">
                  <span className="text-amber-400">★</span> 5.0
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={() => scrollTo("#pain-points")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-fg-subtle hover:text-[#FF7A00] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
