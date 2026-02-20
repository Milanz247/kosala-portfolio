"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experience = [
  {
    title: "Freelance Social Media Marketer",
    period: "2024 – Present",
    sector: "Service-Based Businesses · UAE & Sri Lanka",
    points: [
      "Managing social media accounts for service-based businesses including clinics and local brands",
      "Creating content strategies and Reels concepts aligned with business objectives",
      "Running Meta ad campaigns focused on inquiry generation and customer acquisition",
      "Supporting businesses in improving online presence, reach, and engagement",
      "Delivering monthly performance reports and optimization recommendations",
    ],
    highlight: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">Experience</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          Work Experience
        </h2>
        <p className="text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-16 leading-relaxed">
          Focused on building real-world experience through direct client work
          across industries.
        </p>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp) => (
            <div
              key={exp.title}
              className="relative bg-[var(--surface)] rounded-3xl border border-[var(--border)] hover:border-[#FF7A00]/40 p-5 sm:p-8 shadow-sm transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7A00] to-[#FF4500] rounded-t-3xl" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FF7A00] flex items-center justify-center shadow-md shadow-[#FF7A00]/30">
                  <Briefcase size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h3 className="text-xl font-extrabold text-[var(--fg)]">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-semibold text-[#FF7A00] bg-[var(--accent-muted)] border border-[#FF7A00]/20 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[var(--fg-muted)] text-sm font-medium mb-6">
                    {exp.sector}
                  </p>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-[#FF7A00] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-[var(--fg-muted)] text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
