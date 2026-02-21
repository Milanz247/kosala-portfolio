"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, MessageCircle, BookOpen, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

/* ── Typewriter hook ─────────────────────────────────────────────── */
const WORDS = [
  "Real Revenue.",
  "Qualified Leads.",
  "Loyal Customers.",
  "Sustainable Growth.",
];

function useTypewriter(words: string[], speed = 80, deleteSpeed = 45, pause = 2400) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wi];
    if (typing) {
      if (display.length < word.length) {
        const t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), pause);
      return () => clearTimeout(t);
    } else {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      }
      setWi((i) => (i + 1) % words.length);
      setTyping(true);
    }
  }, [display, typing, wi, words, speed, deleteSpeed, pause]);

  return display;
}

/* ── Framer variants ─────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  },
} as const;

export default function Hero() {
  const typed = useTypewriter(WORDS);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg)] mesh-gradient-hero"
    >
      {/* ── Background decorative elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[120px] opacity-30"
          style={{ background: "radial-gradient(circle, #FF7A0030 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{ background: "radial-gradient(circle, #FF450020 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--fg) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-8 sm:pt-32 sm:pb-24 flex flex-col items-center text-center"
      >
        {/* ── Main headline ── */}
        <motion.h1
          variants={itemVariants}
          className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[var(--fg)] leading-[1.08] tracking-tight mb-5 sm:mb-6"
        >
          Your Business, Scaled With
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Meta Ads That Deliver{" "}
          <span className="relative inline-block">
            <span className="gradient-text">
              {typed || "\u00A0"}
            </span>
            <span className="cursor-blink text-[#FF7A00] ml-[1px]">|</span>
          </span>
        </motion.h1>

        {/* ── Personal intro line ── */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-[#FF7A00] font-semibold mb-4"
        >
          I&apos;m Kosala Dananjaya — Your Meta Ads Strategist.
        </motion.p>

        {/* ── Sub-headline ── */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-lg md:text-xl text-[var(--fg-muted)] leading-relaxed mb-3 max-w-2xl"
        >
          I don&apos;t just run ads. I understand{" "}
          <span className="text-[var(--fg)] font-semibold">your business goals</span>,
          find your ideal customers, and turn your ad spend into maximum returns{" "}
          — as <span className="text-[var(--fg)] font-semibold">your dedicated partner</span>,
          not another agency.
        </motion.p>

        {/* ── Supporting line ── */}
        <motion.p
          variants={itemVariants}
          className="hidden sm:block text-sm text-[var(--fg-muted)] opacity-75 leading-relaxed mb-12 max-w-lg"
        >
          Working with service-based businesses — clinics, local brands, and professionals
          across Sri Lanka and the UAE.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row gap-3 mb-8 sm:mb-12"
        >
          <Button
            size="sm"
            className="sm:h-12 sm:px-7 sm:text-sm shadow-lg shadow-[#FF7A00]/20 rounded-2xl"
            onClick={() => scrollTo("#contact")}
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">Book a Strategy Call</span>
            <span className="sm:hidden">Strategy Call</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="sm:h-12 sm:px-7 sm:text-sm rounded-2xl"
            onClick={() => scrollTo("#case-studies")}
          >
            <BookOpen size={15} />
            <span className="hidden sm:inline">View Results</span>
            <span className="sm:hidden">Results</span>
          </Button>
        </motion.div>

        {/* ── Location note ── */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1.5 text-[11px] text-[var(--fg-muted)] mb-10"
        >
          <MapPin size={11} />
          Based in Al Ain, UAE · Available for projects in Sri Lanka & UAE
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("#problem")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[var(--fg-muted)] hover:text-[#FF7A00] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
