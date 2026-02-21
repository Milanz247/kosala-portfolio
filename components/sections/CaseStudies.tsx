"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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

/* ─── Section label ─────────────────────────────────────── */
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
    <div className="flex flex-col items-center justify-center gap-2 bg-card-bg border-2 border-dashed border-card-border rounded-2xl p-6 text-center">
      <ImageOff size={20} className="text-fg-subtle" />
      <span className="text-xs text-fg-subtle font-medium">{label}</span>
    </div>
  );
}

/* ─── Modal ──────────────────────────────────────────────── */
function CaseStudyModal({ onClose }: { onClose: () => void }) {
  const cs = clearSkinCaseStudy;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-8 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-modal-bg rounded-3xl shadow-2xl shadow-black/50 border border-card-border overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#FF7A00] to-[#CC5500] p-6 sm:p-8 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="text-white/70 text-sm font-semibold mb-2">Case Study {cs.number}</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">{cs.client}</h2>
                <p className="text-white/70 text-sm">{cs.type}</p>
              </div>
              <button onClick={onClose} className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {cs.tools.map((t) => (
                <span key={t} className="text-xs bg-white/20 border border-white/30 px-3 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-10">
            <div>
              <SectionLabel icon={Lightbulb} label="Overview" />
              <p className="text-fg-muted leading-relaxed text-sm sm:text-base">{cs.overview}</p>
            </div>

            <div>
              <SectionLabel icon={Target} label="Objectives" />
              <ul className="space-y-2">
                {cs.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-fg-muted text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Challenge" />
              <div className="bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 rounded-2xl p-5">
                <p className="text-fg-muted text-sm leading-relaxed">{cs.challenge}</p>
              </div>
            </div>

            <div>
              <SectionLabel icon={Lightbulb} label="Strategy" />
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.strategy.map((s) => (
                  <div key={s.title} className="bg-card-bg rounded-2xl p-4 border border-card-border">
                    <h4 className="font-bold text-fg text-sm mb-2">{s.title}</h4>
                    <p className="text-fg-subtle text-xs leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Execution" />
              <ul className="space-y-2.5">
                {cs.execution.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#FF7A00] mt-0.5 flex-shrink-0" />
                    <span className="text-fg-muted text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel icon={BarChart3} label="Results" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cs.results.map((r) => (
                  <div key={r.metric} className="bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 rounded-2xl p-4 text-center">
                    <div className="text-[#FF7A00] font-extrabold text-sm mb-1">{r.value}</div>
                    <div className="text-fg-subtle text-xs">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel icon={ImageOff} label="Campaign Visuals (Placeholders)" />
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-zinc-500 font-semibold mb-2 uppercase tracking-wider">Ads Manager Screenshots</p>
                  <div className="grid sm:grid-cols-2 gap-3">{cs.placeholders.ads.map((p) => <PlaceholderBox key={p} label={p} />)}</div>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold mb-2 uppercase tracking-wider">Reel Thumbnails</p>
                  <div className="grid sm:grid-cols-2 gap-3">{cs.placeholders.reels.map((p) => <PlaceholderBox key={p} label={p} />)}</div>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold mb-2 uppercase tracking-wider">Post Samples</p>
                  <div className="grid sm:grid-cols-2 gap-3">{cs.placeholders.posts.map((p) => <PlaceholderBox key={p} label={p} />)}</div>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel icon={Wrench} label="Tools Used" />
              <div className="flex flex-wrap gap-2">
                {cs.tools.map((tool) => (
                  <span key={tool} className="text-sm bg-icon-bg text-fg-muted border border-card-border px-3 py-1.5 rounded-xl font-medium">{tool}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-card-border p-4 sm:p-6 flex flex-wrap justify-between items-center gap-3">
            <p className="text-xs text-fg-subtle flex-1 min-w-0">Details summarized for confidentiality.</p>
            <button onClick={onClose} className="inline-flex items-center gap-2 h-9 px-5 text-xs font-semibold rounded-full border border-card-border text-fg-muted hover:text-fg hover:border-card-border transition-all">
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ────────────────────────────────────── */
export default function CaseStudies() {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" ref={ref} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg-secondary to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-4 py-1.5 rounded-full mb-5">
            Case Studies
          </span>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl text-fg mb-4">
            Real Work. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Detailed breakdowns of Meta ads campaigns that delivered measurable results
            for service-based businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className={`group relative rounded-3xl border overflow-hidden flex flex-col transition-all duration-500 ${
                cs.status === "coming-soon"
                  ? "border-card-border opacity-60"
                  : "border-[#FF7A00]/20 bg-card-bg hover:-translate-y-2 hover:border-[#FF7A00]/40 hover:shadow-xl hover:shadow-[#FF7A00]/5"
              }`}
            >
              {/* Top accent */}
              <div
                className={`h-[2px] w-full ${
                  cs.status === "live"
                    ? "bg-linear-to-r from-transparent via-[#FF7A00] to-transparent"
                    : "bg-card-border"
                }`}
              />

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-5xl sm:text-6xl font-black text-fg/[0.04] select-none leading-none">
                    {cs.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      cs.status === "live"
                        ? "text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06]"
                        : "text-fg-subtle border border-card-border bg-card-bg"
                    }`}>
                      {cs.tag}
                    </span>
                    {cs.status === "coming-soon" && (
                      <span className="text-xs font-semibold text-fg-subtle border border-card-border bg-card-bg px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-fg mb-1 tracking-tight">{cs.client}</h3>
                <p className="text-[#FF7A00] text-sm font-semibold mb-4">{cs.type}</p>
                <p className="text-fg-subtle text-sm leading-relaxed mb-6 flex-1">{cs.summary}</p>

                {/* Result badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.results.map((r) => (
                    <span
                      key={r}
                      className="text-xs bg-[#FF7A00]/[0.06] text-[#FF7A00] border border-[#FF7A00]/15 px-3 py-1 rounded-full font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                {cs.status === "live" ? (
                  <button
                    onClick={() => setOpenModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 h-11 text-sm font-semibold rounded-2xl bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-lg shadow-[#FF7A00]/20 transition-all duration-300 active:scale-95"
                  >
                    View Full Case Study
                    <ExternalLink size={14} />
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2 h-11 text-sm font-semibold rounded-2xl border border-card-border text-fg-subtle cursor-not-allowed"
                  >
                    Details Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openModal && <CaseStudyModal onClose={() => setOpenModal(false)} />}
      </AnimatePresence>
    </section>
  );
}
