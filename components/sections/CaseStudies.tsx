"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  TrendingUp,
  Lightbulb,
  Settings2,
  BarChart3,
  Wrench,
  X,
  ExternalLink,
  ChevronRight,
  ImageOff,
} from "lucide-react";

/* ─── Case Study Data ─────────────────────────────────── */
const clearSkinCaseStudy = {
  id: "clear-skin-panadura",
  number: "01",
  client: "Clear Skin Panadura",
  tag: "Skincare Clinic",
  type: "Social Media Management & Meta Ads Campaign",
  status: "live",
  overview:
    "Clear Skin Panadura is a skincare clinic based in Panadura, Sri Lanka, offering treatments such as laser hair removal, facials, and skin consultation services. The clinic needed to build a stronger online presence and generate consistent customer inquiries through digital channels.",
  objectives: [
    "Build brand awareness for the clinic on social media",
    "Generate consistent customer inquiries via Meta advertising",
    "Create an engaging and professional social media presence",
    "Target local audiences in Panadura and surrounding areas",
    "Increase engagement through educational and promotional content",
  ],
  challenge:
    "The clinic had minimal social media presence and no established digital marketing strategy. There was a need to create content from scratch, develop a consistent brand voice, and run paid advertising campaigns to generate tangible inquiries — all while managing a limited budget effectively.",
  strategy: [
    {
      title: "Content Strategy",
      description:
        "Developed a structured content plan mixing educational posts, before-and-after showcases, service highlights, and trust-building content to position the clinic as an authority in skincare.",
    },
    {
      title: "Meta Ads Targeting",
      description:
        "Set up Facebook and Instagram ad campaigns targeting women aged 18–45 within a 10–20km radius of Panadura, using interest-based and behavioral targeting related to beauty and skincare.",
    },
    {
      title: "Inquiry-Focused Campaigns",
      description:
        "Designed ads with clear WhatsApp and Messenger CTAs to drive direct inquiries, reducing friction in the customer journey from ad to consultation booking.",
    },
    {
      title: "Reels & Visual Content",
      description:
        "Produced and guided Reels content to improve organic reach and engagement, using trending audio and treatment demonstration formats.",
    },
  ],
  execution: [
    "Set up and optimized Meta Business Suite and Ads Manager",
    "Created a monthly content calendar with 16–20 posts per month",
    "Designed branded templates in Canva for consistent visual identity",
    "Produced Reels scripts and shot-list guidance for the client team",
    "Launched lead generation campaigns with A/B testing on creatives",
    "Monitored ad performance weekly and adjusted targeting and budgets",
    "Managed audience engagement and responded to inquiries",
  ],
  results: [
    { metric: "Reach Growth", value: "Significant increase", note: "in monthly organic reach" },
    { metric: "Inquiries Generated", value: "Consistent inbound", note: "inquiries via WhatsApp & DM" },
    { metric: "Engagement Rate", value: "Above-average", note: "engagement vs. industry benchmark" },
    { metric: "Ad Campaigns", value: "Lower CPR", note: "cost per result through optimization" },
  ],
  tools: ["Meta Ads Manager", "Meta Business Suite", "Canva", "CapCut", "WhatsApp Business"],
  placeholders: {
    ads: ["Ads Manager Screenshot — Campaign Overview", "Ads Manager Screenshot — Audience Insights"],
    reels: ["Reel Thumbnail 01 — Service Highlight", "Reel Thumbnail 02 — Before & After"],
    posts: ["Post Sample — Educational Content", "Post Sample — Promotional Offer"],
  },
};

const caseStudies = [
  {
    id: "clear-skin-panadura",
    number: "01",
    client: "Clear Skin Panadura",
    tag: "Skincare Clinic",
    type: "Social Media Management & Meta Ads Campaign",
    summary:
      "Built brand awareness from scratch and generated consistent customer inquiries for a skincare clinic in Panadura, Sri Lanka through structured content and targeted Meta advertising.",
    results: ["Consistent WhatsApp inquiries", "Organic reach growth", "Lower CPR achieved"],
    status: "live",
  },
  {
    id: "braces-dental",
    number: "02",
    client: "Braces & Specialist Dental Clinic",
    tag: "Dental Clinic",
    type: "Social Media Management & Content Strategy",
    summary:
      "Content strategy and social media management tailored for a specialist dental clinic — positioning, educational content, and organic growth focus.",
    results: ["Content strategy developed", "Audience targeting defined", "Coming soon"],
    status: "coming-soon",
  },
];

/* ─── Section label component ───────────────────────────── */
function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[#FF7A00] font-semibold text-sm mb-3">
      <Icon size={16} />
      {label}
    </div>
  );
}

/* ─── Placeholder Box ────────────────────────────────────── */
function PlaceholderBox({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-[var(--surface)] border-2 border-dashed border-[var(--border)] rounded-xl p-6 text-center">
      <ImageOff size={20} className="text-[var(--fg-muted)] opacity-40" />
      <span className="text-xs text-[var(--fg-muted)] font-medium">{label}</span>
    </div>
  );
}

/* ─── Full Case Study Modal ──────────────────────────────── */
function CaseStudyModal({ onClose }: { onClose: () => void }) {
  const cs = clearSkinCaseStudy;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-8 sm:pt-12">
        <div className="relative w-full max-w-4xl bg-[var(--surface)] rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#FF7A00] to-[#CC5500] p-5 sm:p-8 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-white/80 text-sm font-semibold mb-2">
                  Case Study {cs.number}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-1">
                  {cs.client}
                </h2>
                <p className="text-white/80 text-sm">{cs.type}</p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {cs.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-white/20 border border-white/30 px-3 py-1 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-10">
            {/* Overview */}
            <div>
              <SectionLabel icon={Lightbulb} label="Overview" />
              <p className="text-[var(--fg-muted)] leading-relaxed text-sm sm:text-base">
                {cs.overview}
              </p>
            </div>

            {/* Objectives */}
            <div>
              <SectionLabel icon={Target} label="Objectives" />
              <ul className="space-y-2">
                {cs.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-muted)] text-[#FF7A00] text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-[var(--fg-muted)] text-sm leading-relaxed">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenge */}
            <div>
              <SectionLabel icon={Settings2} label="Challenge" />
              <div className="bg-[var(--accent-muted)] border border-[#FF7A00]/20 rounded-xl p-5">
                <p className="text-[var(--fg)] text-sm leading-relaxed">
                  {cs.challenge}
                </p>
              </div>
            </div>

            {/* Strategy */}
            <div>
              <SectionLabel icon={Lightbulb} label="Strategy" />
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.strategy.map((s) => (
                  <div
                    key={s.title}
                    className="bg-[var(--bg-secondary)] rounded-xl p-4 border border-[var(--border)]"
                  >
                    <h4 className="font-bold text-[var(--fg)] text-sm mb-2">
                      {s.title}
                    </h4>
                    <p className="text-[var(--fg-muted)] text-xs leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution */}
            <div>
              <SectionLabel icon={Settings2} label="Execution" />
              <ul className="space-y-2.5">
                {cs.execution.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight
                      size={16}
                      className="text-[#FF7A00] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[var(--fg-muted)] text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <SectionLabel icon={BarChart3} label="Results" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cs.results.map((r) => (
                  <div
                    key={r.metric}
                    className="bg-[var(--accent-muted)] border border-[#FF7A00]/20 rounded-xl p-4 text-center"
                  >
                    <div className="text-[#FF7A00] font-extrabold text-sm mb-1">
                      {r.value}
                    </div>
                    <div className="text-[var(--fg-muted)] text-xs">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Placeholders */}
            <div>
              <SectionLabel icon={ImageOff} label="Campaign Visuals (Placeholders)" />
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[var(--fg-muted)] font-semibold mb-2 uppercase tracking-wide">
                    Ads Manager Screenshots
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cs.placeholders.ads.map((p) => (
                      <PlaceholderBox key={p} label={p} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[var(--fg-muted)] font-semibold mb-2 uppercase tracking-wide">
                    Reel Thumbnails
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cs.placeholders.reels.map((p) => (
                      <PlaceholderBox key={p} label={p} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[var(--fg-muted)] font-semibold mb-2 uppercase tracking-wide">
                    Post Samples
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cs.placeholders.posts.map((p) => (
                      <PlaceholderBox key={p} label={p} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <SectionLabel icon={Wrench} label="Tools Used" />
              <div className="flex flex-wrap gap-2">
                {cs.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm bg-[var(--bg-secondary)] text-[var(--fg)] border border-[var(--border)] px-3 py-1.5 rounded-lg font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[var(--border)] p-4 sm:p-6 flex flex-wrap justify-between items-center gap-3">
            <p className="text-xs text-[var(--fg-muted)] flex-1 min-w-0">
              Content details are summarized for confidentiality.
            </p>
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ────────────────────────────────────── */
export default function CaseStudies() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">Case Studies</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          Real Work. Real Results.
        </h2>
        <p className="text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-16 leading-relaxed">
          Detailed breakdowns of social media and Meta ads campaigns run for
          service-based businesses.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className={`bg-[var(--surface)] rounded-3xl border overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group ${
                cs.status === "coming-soon"
                  ? "border-[var(--border)] opacity-70"
                  : "border-[#FF7A00]/20 hover:-translate-y-1"
              }`}
            >
              {/* Top banner */}
              <div
                className={`h-2 w-full ${
                  cs.status === "live"
                    ? "bg-gradient-to-r from-[#FF7A00] to-[#CC5500]"
                    : "bg-[var(--border)]"
                }`}
              />

              <div className="p-5 sm:p-8 flex flex-col flex-1">
                {/* Number & tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl sm:text-6xl font-black text-[var(--border)] select-none leading-none">
                    {cs.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <Badge variant={cs.status === "live" ? "accent" : "secondary"}>
                      {cs.tag}
                    </Badge>
                    {cs.status === "coming-soon" && (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                  </div>
                </div>

                {/* Client name */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--fg)] mb-1">
                  {cs.client}
                </h3>
                <p className="text-[#FF7A00] text-sm font-semibold mb-4">
                  {cs.type}
                </p>

                {/* Summary */}
                <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-6 flex-1">
                  {cs.summary}
                </p>

                {/* Results pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.results.map((r) => (
                    <span
                      key={r}
                      className="text-xs bg-[var(--accent-muted)] text-[#FF7A00] border border-[#FF7A00]/20 px-3 py-1 rounded-full font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {cs.status === "live" ? (
                  <Button
                    size="sm"
                    className="w-full group-hover:bg-[#FF9230]"
                    onClick={() => setOpenModal(true)}
                  >
                    View Full Case Study
                    <ExternalLink size={14} />
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    Details Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openModal && <CaseStudyModal onClose={() => setOpenModal(false)} />}
    </section>
  );
}
