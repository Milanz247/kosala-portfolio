"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, MessageCircle, BookOpen, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const fade = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg)]"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF7A0025 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF450015 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #FF7A00 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8 sm:pt-28 sm:pb-20 flex flex-col items-center text-center">
        {/* Location pill */}
        <div
          style={fade(0)}
          className="inline-flex items-center gap-1.5 bg-[var(--accent-muted)] border border-[#FF7A00]/30 text-[#FF7A00] text-[11px] sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-8"
        >
          <MapPin size={12} />
          Based in Al Ain, UAE · Available for Projects
        </div>

        {/* Headline */}
        <h1
          style={fade(100)}
          className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--fg)] leading-[1.1] tracking-tight mb-3 sm:mb-6"
        >
          Social Media Manager
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> &amp; </span>
          <span className="gradient-text sm:hidden">Meta Ads Specialist</span>
          <span className="hidden sm:inline gradient-text">&amp; Meta Ads Specialist</span>
        </h1>

        {/* Sub-headline */}
        <p
          style={fade(210)}
          className="text-sm sm:text-lg md:text-xl text-[var(--fg-muted)] leading-relaxed mb-4 sm:mb-4 max-w-xl"
        >
          Helping service-based businesses generate inquiries and customers
          through social media and performance marketing.
        </p>

        {/* Intro copy — hidden on mobile */}
        <p
          style={fade(310)}
          className="hidden sm:block text-sm sm:text-base text-[var(--fg-muted)] opacity-70 leading-relaxed mb-10 max-w-lg"
        >
          Working with businesses in Sri Lanka and UAE — brand awareness,
          customer inquiries, and structured content + Meta advertising.
        </p>

        {/* CTA buttons */}
        <div
          style={fade(400)}
          className="flex flex-row gap-2.5"
        >
          <Button
            size="sm"
            className="sm:h-11 sm:px-6 sm:text-sm"
            onClick={() => scrollTo("#case-studies")}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">View Case Studies</span>
            <span className="sm:hidden">Case Studies</span>
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            className="sm:h-11 sm:px-6 sm:text-sm"
            onClick={() =>
              window.open(
                "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.",
                "_blank"
              )
            }
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline">Contact on WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </Button>
        </div>

        {/* Stats row */}
        <div
          style={fade(500)}
          className="mt-8 sm:mt-20 grid grid-cols-3 gap-3 sm:gap-8 w-full max-w-xs sm:max-w-md border-t border-[var(--border)] pt-6 sm:pt-8"
        >
          {[
            { value: "2+", label: "Case Studies" },
            { value: "Meta", label: "Ads" },
            { value: "UAE/LK", label: "Markets" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-[#FF7A00] mb-1">
                {s.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[var(--fg-muted)] font-medium leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[var(--fg-muted)] hover:text-[#FF7A00] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
