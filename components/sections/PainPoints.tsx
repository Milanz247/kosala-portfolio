"use client";

import React from "react";
import { AlertCircle, TrendingDown, HelpCircle, DollarSign } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const pains = [
  {
    icon: DollarSign,
    title: "You're spending money on ads — but getting nothing back.",
    desc: "Every month the budget disappears into Facebook and Instagram. But the phone isn't ringing, and the messages aren't coming. It just feels like burning cash.",
  },
  {
    icon: TrendingDown,
    title: "Likes and followers are up. Sales are still flat.",
    desc: "Your page looks somewhat active, but followers don't pay bills. The gap between 'social media engagement' and actual customer inquiries feels impossible to close.",
  },
  {
    icon: HelpCircle,
    title: "You boosted posts — but had no idea what you were doing.",
    desc: "Meta's 'Boost Post' button is confusing and vague. You're not sure who's seeing your ads, whether it's working, or if you're just throwing money at the algorithm.",
  },
  {
    icon: AlertCircle,
    title: "Your competitor is everywhere online. You're not.",
    desc: "You see the same clinics, shops, and service businesses showing up in your customers' feeds every day. You know you need to do the same — but don't know how.",
  },
];

export default function PainPoints() {
  return (
    <section
      id="problem"
      className="py-24 sm:py-32 bg-[var(--bg-secondary)] relative overflow-hidden mesh-gradient-section"
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-5">
              <AlertCircle size={12} />
              Sound Familiar?
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--fg)] tracking-tight mb-5 leading-[1.1]">
              You&apos;ve tried Meta Ads.{" "}
              <span className="gradient-text">It didn&apos;t work.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--fg-muted)] leading-relaxed max-w-xl mx-auto">
              You&apos;re not alone. Most small businesses go through the same frustrating cycle —
              spend, hope, get nothing, give up. The problem isn&apos;t social media.
              The problem is running it without a clear strategy.
            </p>
          </div>
        </Reveal>

        {/* Pain point cards */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <StaggerItem key={i}>
                <div className="glass flex gap-4 rounded-3xl p-5 sm:p-6 glow-hover group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/15 flex items-center justify-center group-hover:bg-red-500/15 transition-colors">
                    <Icon size={18} className="text-red-500 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--fg)] text-sm sm:text-base mb-1.5 leading-snug">
                      {pain.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">
                      {pain.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bridge to solution */}
        <Reveal delay={0.3}>
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block glass rounded-3xl px-7 sm:px-10 py-5 sm:py-6 max-w-xl">
              <p className="text-sm sm:text-base font-semibold text-[var(--fg)] leading-relaxed">
                This is exactly what I fix.{" "}
                <span className="text-[#FF7A00]">
                  I turn your ad budget into actual customer inquiries — not just
                  impressions and likes.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
