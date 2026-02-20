"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Layout,
  Palette,
  Video,
  CalendarDays,
  Map,
} from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    name: "Meta Ads Manager",
    level: 90,
    desc: "Campaign setup, A/B testing, optimization & reporting",
  },
  {
    icon: Layout,
    name: "Meta Business Suite",
    level: 88,
    desc: "Page management, scheduling, inbox & insights",
  },
  {
    icon: Palette,
    name: "Canva",
    level: 92,
    desc: "Brand templates, posts, stories & ad creatives",
  },
  {
    icon: Video,
    name: "CapCut",
    level: 80,
    desc: "Reels editing, transitions, captions & effects",
  },
  {
    icon: CalendarDays,
    name: "Content Calendar Planning",
    level: 90,
    desc: "Monthly structured planning for consistent posting",
  },
  {
    icon: Map,
    name: "Social Media Strategy",
    level: 87,
    desc: "Audience targeting, funnel-based content & growth strategy",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">Skills & Tools</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          My Toolbox
        </h2>
        <p className="text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-16 leading-relaxed">
          The platforms and skills I use daily to deliver results for
          service-based businesses.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-3 sm:p-5 hover:border-[#FF7A00]/40 hover:bg-[var(--accent-muted)]/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center shadow-sm group-hover:border-[#FF7A00]/40 transition-colors flex-shrink-0">
                    <Icon size={15} className="text-[#FF7A00] sm:hidden" />
                    <Icon size={18} className="text-[#FF7A00] hidden sm:block" />
                  </div>
                  <h4 className="font-bold text-[var(--fg)] text-xs sm:text-sm leading-tight">
                    {skill.name}
                  </h4>
                </div>

                <p className="text-[11px] sm:text-xs text-[var(--fg-muted)] mb-3 leading-relaxed hidden sm:block">
                  {skill.desc}
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] sm:text-xs text-[var(--fg-muted)] font-medium hidden sm:block">
                      Proficiency
                    </span>
                    <span className="text-xs text-[#FF7A00] font-bold ml-auto">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF7A00] to-[#FF4500] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
