"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Performance-Focused",
    desc: "Every piece of content and every ad campaign is designed to generate measurable inquiries.",
  },
  {
    icon: Users,
    title: "Service Business Specialist",
    desc: "Deep experience with clinics, local businesses, and service providers in UAE and Sri Lanka.",
  },
  {
    icon: TrendingUp,
    title: "Integrated Approach",
    desc: "Combining organic social media strategy with paid Meta advertising for compounded results.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">About Me</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          Meet Kosala Dananjaya
        </h2>
        <p className="text-sm sm:text-base text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-14 leading-relaxed">
          Social Media Marketer specializing in management and Meta advertising for service-based businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Profile card */}
          <div className="relative">
            <div className="bg-[var(--surface)] rounded-2xl p-6 sm:p-8 border border-[var(--border)] hover:border-[#FF7A00]/40 transition-colors">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FF7A00] flex items-center justify-center text-white text-3xl font-extrabold mb-5 shadow-lg shadow-[#FF7A00]/30">
                K
              </div>
              <h3 className="text-xl font-bold text-[var(--fg)] mb-1">Kosala Dananjaya</h3>
              <p className="text-[#FF7A00] text-sm font-semibold mb-4">
                Social Media Manager & Meta Ads Specialist
              </p>
              <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4">
                I focus on combining content strategy with performance marketing to help businesses
                increase visibility and generate inquiries through social media platforms.
              </p>
              <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                Experience working with{" "}
                <span className="font-semibold text-[var(--fg)]">dental and skincare clinics</span>{" "}
                and local businesses — improving engagement, awareness, and customer inquiries through
                structured content and advertising strategies.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Social Media Management", "Meta Ads", "Content Strategy", "Al Ain, UAE", "Sri Lanka"].map((tag) => (
                  <span key={tag} className="text-xs bg-[var(--accent-muted)] text-[#FF7A00] border border-[#FF7A00]/20 px-2.5 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-[#FF7A00] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#FF7A00]/30 hidden sm:block">
              Available for Projects
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-[var(--surface)] p-5 rounded-2xl border border-[var(--border)] hover:border-[#FF7A00]/40 transition-all group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center group-hover:bg-[#FF7A00] transition-colors">
                    <Icon size={18} className="text-[#FF7A00] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--fg)] mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">{item.desc}</p>
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
