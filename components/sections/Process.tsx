"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free Audit & Discovery Call",
    desc: "We hop on a free 30-minute call. I look at your current ads, your social media pages, your competitors, and tell you honestly — what's working, what's wasting money, and where the biggest opportunities are.",
    duration: "30 mins",
    tag: "No cost. No commitment.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Roadmap",
    desc: "I build a custom strategy for your business. Who we target, what content we create, how we structure the ads, and what budget makes sense. You get a clear roadmap — not guesswork.",
    duration: "3–5 days",
    tag: "Before a single rupee is spent.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Execution",
    desc: "I set up everything — ad campaigns, creatives, audience targeting, content calendar. Then I actively manage and monitor it daily. No set-it-and-forget-it. Real hands-on management.",
    duration: "Ongoing",
    tag: "Daily monitoring.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize & Report",
    desc: "Every week I dig into the data, kill what isn't working, and double down on what is. You get a clear, plain-English report showing exactly what your money did — leads generated, cost per result, ROAS.",
    duration: "Weekly",
    tag: "You always know what's happening.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Subtle accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #FF7A00 40%, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">How I Work</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          From Zero to Results —{" "}
          <span className="gradient-text">Here&apos;s My Process</span>
        </h2>
        <p className="text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-16 leading-relaxed">
          No agency fluff. No vague promises. This is exactly how I work with every client,
          step by step.
        </p>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connector line (desktop) */}
          <div className="absolute left-[27px] sm:left-[31px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#FF7A00]/60 via-[#FF7A00]/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-6 sm:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative flex gap-4 sm:gap-6 group"
                >
                  {/* Step number circle */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#FF7A00] flex items-center justify-center shadow-lg shadow-[#FF7A00]/25 group-hover:scale-105 transition-transform duration-300 z-10 relative">
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 hover:border-[#FF7A00]/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF7A00]/5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#FF7A00] tracking-widest">
                          STEP {step.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-[var(--fg)] leading-snug">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-medium bg-[var(--accent-muted)] text-[#FF7A00] border border-[#FF7A00]/20 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#FF7A00] font-semibold">
                      <span className="w-1 h-1 rounded-full bg-[#FF7A00]" />
                      {step.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
