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
  LineChart,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const skills = [
  {
    icon: BarChart3,
    name: "Meta Ads Manager",
    benefit: "Reach the right people.",
    desc: "I use Meta\u2019s full ad infrastructure \u2014 campaign objectives, custom audiences, retargeting, A/B testing \u2014 so your budget targets warm buyers instead of random scrollers.",
  },
  {
    icon: Layout,
    name: "Meta Business Suite",
    benefit: "Your brand, one dashboard.",
    desc: "Scheduling, inbox management, analytics, and ad review \u2014 all in one place. You get a consistent brand presence without manually managing every post.",
  },
  {
    icon: Palette,
    name: "Canva",
    benefit: "Professional visuals, zero agency cost.",
    desc: "Branded templates, story ads, post designs, and Reel thumbnails that look polished and on-brand \u2014 without paying a separate graphic designer.",
  },
  {
    icon: Video,
    name: "CapCut",
    benefit: "Thumb-stopping Reels that expand reach.",
    desc: "Short-form video editing with trending effects, auto-captions, and clean cuts \u2014 so your content competes with the big guys in the feed.",
  },
  {
    icon: LineChart,
    name: "Google Analytics",
    benefit: "Know exactly what\u2019s working.",
    desc: "Website tracking setup so you can see which ads actually sent visitors to your site, and which ones turned into contact form submissions or calls.",
  },
  {
    icon: CalendarDays,
    name: "Content Calendar Planning",
    benefit: "Consistency that builds trust.",
    desc: "A structured monthly content plan means you never miss posting days \u2014 and consistent posting trains the algorithm to show your content to more people.",
  },
  {
    icon: Map,
    name: "Social Media Strategy",
    benefit: "Followers become paying clients.",
    desc: "Audience research, funnel-based content mapping, and competitor gap analysis \u2014 designed to move your audience from \u2018just browsing\u2019 to \u2018I need to call this business\u2019.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-[var(--bg)] relative overflow-hidden mesh-gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center mb-5">
              <Badge variant="accent">Skills & Tools</Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--fg)] mb-4 tracking-tight leading-[1.1]">
              My Toolbox —{" "}
              <span className="gradient-text">What It Does For You</span>
            </h2>
            <p className="text-[var(--fg-muted)] max-w-xl mx-auto leading-relaxed">
              These aren&apos;t just tools on a CV. Every platform I use has a specific
              purpose — and one goal: making your business more money.
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          staggerDelay={0.08}
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <StaggerItem key={skill.name}>
                <div
                  className={`glass rounded-3xl p-5 sm:p-6 glow-hover group flex flex-col gap-3 ${
                    i % 3 === 1 ? "sm:translate-y-4" : ""
                  }`}
                >
                  {/* Icon + name row */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--accent-muted)] border border-[#FF7A00]/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF7A00] transition-all duration-300 flex-shrink-0">
                      <Icon size={18} className="text-[#FF7A00] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--fg)] text-sm leading-tight">{skill.name}</h4>
                      <p className="text-[#FF7A00] text-[11px] font-semibold leading-tight mt-0.5">{skill.benefit}</p>
                    </div>
                  </div>

                  {/* Benefit description */}
                  <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
