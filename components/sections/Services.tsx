"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Megaphone, LayoutGrid, BarChart3, ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const services = [
  {
    icon: Megaphone,
    badge: "Most In-Demand",
    title: "Meta Ads Management",
    hook: "I find your ideal customer on Facebook & Instagram — and get them to contact you.",
    description:
      "Running ads without a strategy is like driving blindfolded. I build campaigns that target the right people, at the right time, with the right message — so your budget generates actual inquiries, not just reach.",
    benefits: [
      "Campaign built around your specific business goal",
      "Audience research to find your exact ideal customer",
      "WhatsApp & inquiry-focused call-to-actions",
      "Weekly optimization — we improve, not just monitor",
      "Clear reporting: spend, leads, cost per result",
    ],
    featured: true,
  },
  {
    icon: LayoutGrid,
    badge: "Foundation",
    title: "Social Media Management",
    hook: "Consistent content that builds trust — so when you run ads, people already know you.",
    description:
      "Your social media should be working for you 24/7. I create and manage a structured content calendar that positions your business as the go-to choice in your area — before a single ad rupee is spent.",
    benefits: [
      "Monthly content calendar planned in advance",
      "Reels strategy to increase organic reach",
      "Branded visual templates (Canva)",
      "Engagement management — no ignored comments",
      "Educational + promotional content mix",
    ],
  },
  {
    icon: BarChart3,
    badge: "Data & ROI",
    title: "Performance Tracking & Reporting",
    hook: "You'll always know exactly where your money went and what it brought back.",
    description:
      "No more guessing. No more vague 'reach increased by 20%' reports. I give you plain-English summaries showing leads generated, cost per inquiry, ROAS — numbers that actually tell you if the investment is working.",
    benefits: [
      "Weekly performance reports in plain English",
      "ROAS & cost-per-lead breakdown",
      "A/B test results — what copy and creative won",
      "Monthly strategy review & budget recommendations",
      "Meta Pixel & conversion tracking setup",
    ],
  },
];

export default function Services() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-24 sm:py-32 bg-[var(--bg)] relative overflow-hidden mesh-gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center mb-5">
              <Badge variant="accent">Services</Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--fg)] mb-4 tracking-tight leading-[1.1]">
              What I Do —{" "}
              <span className="gradient-text">And Why It Works</span>
            </h2>
            <p className="text-[var(--fg-muted)] max-w-xl mx-auto leading-relaxed">
              These aren&apos;t packages designed to look impressive. They&apos;re built around one
              goal: turning your social media investment into real business results.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-5 sm:gap-6" staggerDelay={0.15}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div
                  className={`relative glass rounded-3xl flex flex-col overflow-hidden glow-hover group ${
                    service.featured
                      ? "border-[#FF7A00]/30 shadow-lg shadow-[#FF7A00]/5 ring-1 ring-[#FF7A00]/10"
                      : ""
                  }`}
                >
                  {/* Top accent bar */}
                  {service.featured && (
                    <div className="h-[3px] bg-gradient-to-r from-[#FF7A00] to-[#FF4500]" />
                  )}

                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    {/* Badge + icon row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--accent-muted)] border border-[#FF7A00]/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={22} className="text-[#FF7A00]" />
                      </div>
                      <span
                        className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full border ${
                          service.featured
                            ? "bg-[#FF7A00] text-white border-[#FF7A00]"
                            : "bg-[var(--accent-muted)] text-[#FF7A00] border-[#FF7A00]/15"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-[var(--fg)] mb-2">
                      {service.title}
                    </h3>

                    {/* Hook */}
                    <p className="text-sm font-semibold text-[var(--fg)] mb-3 leading-snug">
                      {service.hook}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--fg-muted)] mb-6 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2.5 mb-6">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="text-[#FF7A00] mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-[var(--fg-muted)]">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={scrollToContact}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#FF7A00] hover:gap-2.5 transition-all duration-200 group/cta mt-auto"
                    >
                      Discuss this service
                      <ArrowRight size={13} className="group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
