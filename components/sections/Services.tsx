"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, LayoutGrid, Megaphone, FileText } from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Social Media Management",
    description:
      "End-to-end management of your social media presence with a consistent, on-brand strategy.",
    features: [
      "Content planning & calendar",
      "Reel strategy and execution guidance",
      "Consistent posting structure",
      "Engagement & community management",
    ],
    color: "indigo",
  },
  {
    icon: Megaphone,
    title: "Meta Ads (Lead Generation)",
    description:
      "Data-driven paid advertising campaigns designed to generate qualified inquiries and customers.",
    features: [
      "Campaign setup and optimization",
      "Local audience targeting",
      "WhatsApp and inquiry-focused campaigns",
      "Ad creative strategy",
    ],
    color: "violet",
    featured: true,
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "A structured content approach that builds trust, educates your audience, and drives organic reach.",
    features: [
      "Service-based content planning",
      "Educational and trust-building content",
      "Reels optimization for reach",
      "Monthly content roadmap",
    ],
    color: "indigo",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">Services</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          How I Can Help Your Business
        </h2>
        <p className="text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-16 leading-relaxed">
          Focused services that work together to grow your online presence and
          convert social media followers into paying customers.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`relative overflow-hidden flex flex-col ${
                  service.featured
                    ? "ring-2 ring-[#FF7A00] shadow-[#FF7A00]/10 shadow-xl"
                    : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7A00] to-[#FF4500]" />
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#FF7A00]" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-sm text-[var(--fg-muted)] mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#FF7A00] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-[var(--fg-muted)]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
