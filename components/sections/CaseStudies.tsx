"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
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
  MessageCircle,
  DollarSign,
  Zap,
  ZoomIn,
  ChevronLeft,
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
  images: [
    "/case_study/clear_skin_panadura/1.jpeg",
    "/case_study/clear_skin_panadura/2.jpeg",
    "/case_study/clear_skin_panadura/3.jpeg",
    "/case_study/clear_skin_panadura/4.jpeg",
    "/case_study/clear_skin_panadura/5.jpeg",
  ],
};

/* ─── Layan Wellness Data ─────────────────────────────── */
const layanWellnessCaseStudy = {
  id: "layan-wellness",
  number: "02",
  client: "Layan Wellness UAE",
  tag: "Wellness Brand",
  type: "WhatsApp Lead Generation Campaign",
  status: "live",
  flag: "🇦🇪",
  overview:
    "Layan Wellness is a UAE-based wellness brand offering Energy Healing Workshops, Pregnancy Massage Services, and Sound Meditation Sessions. The goal was to generate qualified WhatsApp inquiries for bookings and event participation using Meta Ads.",
  objectives: [
    "Generate consistent WhatsApp messaging conversations",
    "Keep cost per messaging conversation under AED 12",
    "Test multiple service offers to identify highest-performing campaigns",
    "Optimize ad spend across different wellness services",
  ],
  strategy: [
    {
      title: "Multi-Service Campaign Structure",
      description:
        "Instead of promoting a single service, separate campaigns were launched for Energy Healing Workshop, Pregnancy Massage, and Sound Meditation — each with its own creative angle, audience targeting, and ad copy.",
    },
    {
      title: "WhatsApp-Focused Funnel",
      description:
        "Campaign objective set to Messaging Conversations with direct Click-to-WhatsApp setup, clear call-to-action, benefit-driven messaging, and continuous creative testing.",
    },
    {
      title: "Budget & Optimization Approach",
      description:
        "Daily budgets between AED 60–85. A/B testing multiple ad copies and creatives, monitoring cost per messaging conversation, scaling high-performing campaigns, and pausing underperforming variations.",
    },
    {
      title: "Micro Test Campaigns",
      description:
        "Small-budget test campaigns used to identify winning creatives and copy combinations, achieving costs as low as AED 5.10 per messaging conversation before scaling.",
    },
  ],
  campaigns: [
    {
      name: "Energy Healing Workshop",
      conversations: 11,
      cpc: "AED 8.84",
      spend: "AED 97.23",
    },
    {
      name: "Pregnancy Massage",
      conversations: 11,
      cpc: "AED 8.32",
      spend: "AED 91.54",
    },
    {
      name: "Sound Meditation",
      conversations: 18,
      cpc: "AED 10.23",
      spend: "AED 184.22",
    },
    {
      name: "Micro Test Campaigns",
      conversations: null,
      cpc: "From AED 5.10",
      spend: "Low budget",
    },
  ],
  summary: [
    { metric: "40+", note: "WhatsApp Conversations" },
    { metric: "AED 8–10", note: "Avg. Cost per Conversation" },
    { metric: "AED 12", note: "Target CPR — Consistently Met" },
    { metric: "3 Services", note: "Tested & Optimised" },
  ],
  tools: ["Meta Ads Manager", "Click-to-WhatsApp", "A/B Testing", "Meta Business Suite"],
  images: [
    "/case_study/layan_wellness/1.jpeg",
    "/case_study/layan_wellness/2.jpeg",
    "/case_study/layan_wellness/3.jpeg",
    "/case_study/layan_wellness/4.jpeg",
    "/case_study/layan_wellness/5.jpeg",
    "/case_study/layan_wellness/6.jpeg",
    "/case_study/layan_wellness/7.jpeg",
  ],
};

/* ─── Braces & Specialist Dental Clinic Data ─────────── */
const bracesDentalCaseStudy = {
  id: "braces-dental",
  number: "03",
  client: "Braces & Specialist Dental Clinic",
  tag: "Dental Clinic",
  type: "Social Media Management & Content Strategy",
  status: "live",
  overview:
    "Braces & Specialist Dental Clinic, located in Kottawa, Sri Lanka, is a specialist dental practice offering orthodontic treatments, braces, and a range of dental care services. The clinic required a strong social media presence and a consistent content strategy to attract new patients and build trust in the local community.",
  objectives: [
    "Establish a professional and engaging social media presence",
    "Create educational content to build trust with potential patients",
    "Position the clinic as the go-to specialist dental provider in Kottawa",
    "Drive patient inquiries through organic and targeted content",
    "Build a consistent brand identity across social media platforms",
  ],
  challenge:
    "The clinic had limited digital visibility and required a content strategy built from scratch. The challenge was to create medically credible yet approachable content that would resonate with a local audience while consistently highlighting specialist services like orthodontics and braces.",
  strategy: [
    {
      title: "Content Strategy",
      description:
        "Developed a structured monthly content plan including educational posts about treatments, patient FAQs, clinic culture content, and before-and-after showcases to build authority and trust.",
    },
    {
      title: "Brand Positioning",
      description:
        "Crafted a consistent visual style and brand voice that conveyed professionalism and approachability — targeting families, young adults, and parents seeking orthodontic treatment for their children.",
    },
    {
      title: "Audience Targeting",
      description:
        "Focused on local audiences in Kottawa and surrounding areas, tailoring content to address common dental concerns and treatment questions relevant to the target demographic.",
    },
    {
      title: "Engagement & Growth",
      description:
        "Implemented engagement-driven content formats including polls, tips, and Reels to grow organic reach and encourage profile visits and direct inquiries.",
    },
  ],
  execution: [
    "Developed a full social media content calendar with 16–20 posts per month",
    "Designed branded visual templates for consistent identity across posts",
    "Created educational carousel posts and Reels explaining treatments",
    "Managed community engagement and responded to comments and DMs",
    "Produced before-and-after content showcasing orthodontic results",
    "Regularly reviewed content performance and adjusted the strategy",
  ],
  results: [
    { metric: "Content Strategy", value: "Fully developed", note: "monthly content plan in place" },
    { metric: "Brand Identity", value: "Consistent", note: "visual identity established" },
    { metric: "Audience Targeting", value: "Defined", note: "local audience segments identified" },
    { metric: "Engagement", value: "Growing", note: "organic engagement improving" },
  ],
  tools: ["Meta Business Suite", "Canva", "CapCut", "Instagram", "Facebook"],
  images: [
    "/case_study/braces_and_specialist_clinic_kottawa/1.jpeg",
    "/case_study/braces_and_specialist_clinic_kottawa/2.jpeg",
    "/case_study/braces_and_specialist_clinic_kottawa/3.jpeg",
    "/case_study/braces_and_specialist_clinic_kottawa/4.jpeg",
  ],
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
    id: "layan-wellness",
    number: "02",
    client: "Layan Wellness UAE 🇦🇪",
    tag: "Wellness Brand",
    type: "WhatsApp Lead Generation — Meta Ads",
    summary:
      "Generated 40+ qualified WhatsApp messaging conversations across three wellness services in the UAE market, maintaining an average cost per conversation of AED 8–10 — well below the AED 12 target.",
    results: ["40+ WhatsApp conversations", "AED 8–10 avg. CPR", "3 services tested & scaled"],
    status: "live",
  },
  {
    id: "braces-dental",
    number: "03",
    client: "Braces & Specialist Dental Clinic",
    tag: "Dental Clinic",
    type: "Social Media Management & Content Strategy",
    summary:
      "Content strategy and social media management tailored for a specialist dental clinic in Kottawa — positioning, educational content, and organic growth focus.",
    results: ["Content strategy developed", "Audience targeting defined", "Brand identity established"],
    status: "live",
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


/* ─── Layan Wellness Modal ───────────────────────────────── */
function LayanWellnessModal({ onClose }: { onClose: () => void }) {
  const cs = layanWellnessCaseStudy;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((p) => (p !== null ? (p - 1 + cs.images.length) % cs.images.length : 0));
  const nextImage = () => setLightbox((p) => (p !== null ? (p + 1) % cs.images.length : 0));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-start justify-center p-3 sm:p-4 pt-4 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-modal-bg rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/50 border border-card-border overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#FF7A00] to-[#CC5500] p-5 sm:p-8 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <div className="text-white/70 text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Case Study {cs.number}</div>
                <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-1">{cs.flag} {cs.client}</h2>
                <p className="text-white/70 text-xs sm:text-sm">{cs.type}</p>
              </div>
              <button onClick={onClose} className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <X size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {cs.tools.map((t) => (
                <span key={t} className="text-[10px] sm:text-xs bg-white/20 border border-white/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-10">

            {/* Overview */}
            <div>
              <SectionLabel icon={Lightbulb} label="Overview" />
              <p className="text-fg-muted leading-relaxed text-xs sm:text-base">{cs.overview}</p>
            </div>

            {/* Objectives */}
            <div>
              <SectionLabel icon={Target} label="Objectives" />
              <ul className="space-y-2">
                {cs.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-fg-muted text-xs sm:text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div>
              <SectionLabel icon={Lightbulb} label="Strategy" />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {cs.strategy.map((s) => (
                  <div key={s.title} className="bg-card-bg rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-card-border">
                    <h4 className="font-bold text-fg text-xs sm:text-sm mb-1.5 sm:mb-2">{s.title}</h4>
                    <p className="text-fg-subtle text-[11px] sm:text-xs leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Results */}
            <div>
              <SectionLabel icon={BarChart3} label="Campaign Results" />
              <div className="space-y-3">
                {cs.campaigns.map((c) => (
                  <div key={c.name} className="bg-card-bg border border-card-border rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex-1">
                      <p className="font-bold text-fg text-xs sm:text-sm">{c.name}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {c.conversations !== null && (
                        <div className="flex items-center gap-1.5">
                          <MessageCircle size={13} className="text-[#FF7A00]" />
                          <span className="text-xs font-semibold text-fg">{c.conversations}</span>
                          <span className="text-[10px] text-fg-subtle">conversations</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Zap size={13} className="text-[#FF7A00]" />
                        <span className="text-xs font-semibold text-fg">{c.cpc}</span>
                        <span className="text-[10px] text-fg-subtle">per conv.</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign size={13} className="text-[#FF7A00]" />
                        <span className="text-xs font-semibold text-fg">{c.spend}</span>
                        <span className="text-[10px] text-fg-subtle">spend</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Summary */}
            <div>
              <SectionLabel icon={TrendingUp} label="Overall Performance" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {cs.summary.map((r) => (
                  <div key={r.metric} className="bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="text-[#FF7A00] font-extrabold text-xs sm:text-sm mb-0.5 sm:mb-1">{r.metric}</div>
                    <div className="text-fg-subtle text-[10px] sm:text-xs">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Screenshots */}
            <div>
              <SectionLabel icon={Settings2} label="Campaign Screenshots" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {cs.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => openLightbox(i)}
                    className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-card-border bg-card-bg aspect-video cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50"
                  >
                    <Image
                      src={src}
                      alt={`Layan Wellness campaign screenshot ${i + 1}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {lightbox !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                  onClick={closeLightbox}
                >
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                  {/* Close */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <X size={18} className="text-white" />
                  </button>

                  {/* Prev */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 sm:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>

                  {/* Next */}
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>

                  {/* Image */}
                  <motion.div
                    key={lightbox}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 w-full max-w-4xl max-h-[85vh] aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={cs.images[lightbox]}
                      alt={`Screenshot ${lightbox + 1}`}
                      fill
                      className="object-contain rounded-xl"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>

                  {/* Counter */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                    {cs.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setLightbox(idx); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          idx === lightbox ? "bg-white w-4" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tools */}
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

/* ─── Braces & Specialist Dental Clinic Modal ───────────── */
function BracesDentalModal({ onClose }: { onClose: () => void }) {
  const cs = bracesDentalCaseStudy;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((p) => (p !== null ? (p - 1 + cs.images.length) % cs.images.length : 0));
  const nextImage = () => setLightbox((p) => (p !== null ? (p + 1) % cs.images.length : 0));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-start justify-center p-3 sm:p-4 pt-4 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-modal-bg rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/50 border border-card-border overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#FF7A00] to-[#CC5500] p-5 sm:p-8 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <div className="text-white/70 text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Case Study {cs.number}</div>
                <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-1">{cs.client}</h2>
                <p className="text-white/70 text-xs sm:text-sm">{cs.type}</p>
              </div>
              <button onClick={onClose} className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <X size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {cs.tools.map((t) => (
                <span key={t} className="text-[10px] sm:text-xs bg-white/20 border border-white/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-10">
            <div>
              <SectionLabel icon={Lightbulb} label="Overview" />
              <p className="text-fg-muted leading-relaxed text-xs sm:text-base">{cs.overview}</p>
            </div>

            <div>
              <SectionLabel icon={Target} label="Objectives" />
              <ul className="space-y-2">
                {cs.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-fg-muted text-xs sm:text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Challenge" />
              <div className="bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <p className="text-fg-muted text-xs sm:text-sm leading-relaxed">{cs.challenge}</p>
              </div>
            </div>

            <div>
              <SectionLabel icon={Lightbulb} label="Strategy" />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {cs.strategy.map((s) => (
                  <div key={s.title} className="bg-card-bg rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-card-border">
                    <h4 className="font-bold text-fg text-xs sm:text-sm mb-1.5 sm:mb-2">{s.title}</h4>
                    <p className="text-fg-subtle text-[11px] sm:text-xs leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Execution" />
              <ul className="space-y-2 sm:space-y-2.5">
                {cs.execution.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <ChevronRight size={14} className="text-[#FF7A00] mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-fg-muted text-xs sm:text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel icon={BarChart3} label="Results" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {cs.results.map((r) => (
                  <div key={r.metric} className="bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="text-[#FF7A00] font-extrabold text-xs sm:text-sm mb-0.5 sm:mb-1">{r.value}</div>
                    <div className="text-fg-subtle text-[10px] sm:text-xs">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Work Samples" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {cs.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => openLightbox(i)}
                    className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-card-border bg-card-bg aspect-video cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50"
                  >
                    <Image
                      src={src}
                      alt={`Braces Dental work sample ${i + 1}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {lightbox !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                  onClick={closeLightbox}
                >
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <X size={18} className="text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 sm:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                  <motion.div
                    key={lightbox}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 w-full max-w-4xl max-h-[85vh] aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={cs.images[lightbox]}
                      alt={`Sample ${lightbox + 1}`}
                      fill
                      className="object-contain rounded-xl"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                    {cs.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setLightbox(idx); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          idx === lightbox ? "bg-white w-4" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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

/* ─── Clear Skin Modal ───────────────────────────────────── */
function CaseStudyModal({ onClose }: { onClose: () => void }) {
  const cs = clearSkinCaseStudy;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((p) => (p !== null ? (p - 1 + cs.images.length) % cs.images.length : 0));
  const nextImage = () => setLightbox((p) => (p !== null ? (p + 1) % cs.images.length : 0));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-start justify-center p-3 sm:p-4 pt-4 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-modal-bg rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/50 border border-card-border overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#FF7A00] to-[#CC5500] p-5 sm:p-8 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <div className="text-white/70 text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Case Study {cs.number}</div>
                <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-1">{cs.client}</h2>
                <p className="text-white/70 text-xs sm:text-sm">{cs.type}</p>
              </div>
              <button onClick={onClose} className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors touch-target">
                <X size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {cs.tools.map((t) => (
                <span key={t} className="text-[10px] sm:text-xs bg-white/20 border border-white/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-10">
            <div>
              <SectionLabel icon={Lightbulb} label="Overview" />
              <p className="text-fg-muted leading-relaxed text-xs sm:text-base">{cs.overview}</p>
            </div>

            <div>
              <SectionLabel icon={Target} label="Objectives" />
              <ul className="space-y-2">
                {cs.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-fg-muted text-xs sm:text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Challenge" />
              <div className="bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <p className="text-fg-muted text-xs sm:text-sm leading-relaxed">{cs.challenge}</p>
              </div>
            </div>

            <div>
              <SectionLabel icon={Lightbulb} label="Strategy" />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {cs.strategy.map((s) => (
                  <div key={s.title} className="bg-card-bg rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-card-border">
                    <h4 className="font-bold text-fg text-xs sm:text-sm mb-1.5 sm:mb-2">{s.title}</h4>
                    <p className="text-fg-subtle text-[11px] sm:text-xs leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Execution" />
              <ul className="space-y-2 sm:space-y-2.5">
                {cs.execution.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <ChevronRight size={14} className="text-[#FF7A00] mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-fg-muted text-xs sm:text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel icon={BarChart3} label="Results" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {cs.results.map((r) => (
                  <div key={r.metric} className="bg-[#FF7A00]/[0.04] border border-[#FF7A00]/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="text-[#FF7A00] font-extrabold text-xs sm:text-sm mb-0.5 sm:mb-1">{r.value}</div>
                    <div className="text-fg-subtle text-[10px] sm:text-xs">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel icon={Settings2} label="Campaign Screenshots" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {cs.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => openLightbox(i)}
                    className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-card-border bg-card-bg aspect-video cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50"
                  >
                    <Image
                      src={src}
                      alt={`Clear Skin campaign screenshot ${i + 1}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {lightbox !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                  onClick={closeLightbox}
                >
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <X size={18} className="text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 sm:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                  <motion.div
                    key={lightbox}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 w-full max-w-4xl max-h-[85vh] aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={cs.images[lightbox]}
                      alt={`Screenshot ${lightbox + 1}`}
                      fill
                      className="object-contain rounded-xl"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                    {cs.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setLightbox(idx); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          idx === lightbox ? "bg-white w-4" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
  const [openModal, setOpenModal] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" ref={ref} className="relative py-16 sm:py-32 lg:min-h-screen lg:flex lg:items-center">
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg-secondary to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <span className="inline-block text-[11px] sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            Case Studies
          </span>
          <h2 className="heading text-2xl sm:text-4xl md:text-5xl text-fg mb-3 sm:mb-4">
            Real Work. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            Detailed breakdowns of Meta ads campaigns that delivered measurable results
            for service-based businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className={`group relative rounded-2xl sm:rounded-3xl border overflow-hidden flex flex-col transition-all duration-500 ${
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

              <div className="p-5 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-4xl sm:text-6xl font-black text-fg/[0.04] select-none leading-none">
                    {cs.number}
                  </span>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
                    <span className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                      cs.status === "live"
                        ? "text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06]"
                        : "text-fg-subtle border border-card-border bg-card-bg"
                    }`}>
                      {cs.tag}
                    </span>
                    {cs.status === "coming-soon" && (
                      <span className="text-[10px] sm:text-xs font-semibold text-fg-subtle border border-card-border bg-card-bg px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg sm:text-2xl font-extrabold text-fg mb-1 tracking-tight">{cs.client}</h3>
                <p className="text-[#FF7A00] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">{cs.type}</p>
                <p className="text-fg-subtle text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">{cs.summary}</p>

                {/* Result badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {cs.results.map((r) => (
                    <span
                      key={r}
                      className="text-[10px] sm:text-xs bg-[#FF7A00]/[0.06] text-[#FF7A00] border border-[#FF7A00]/15 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                {cs.status === "live" && (
                  <button
                    onClick={() => setOpenModal(cs.id)}
                    className="w-full inline-flex items-center justify-center gap-2 h-10 sm:h-11 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-2xl bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-lg shadow-[#FF7A00]/20 transition-all duration-300 active:scale-95"
                  >
                    View Full Case Study
                    <ExternalLink size={13} className="sm:w-3.5 sm:h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openModal === "clear-skin-panadura" && <CaseStudyModal onClose={() => setOpenModal(null)} />}
        {openModal === "layan-wellness" && <LayanWellnessModal onClose={() => setOpenModal(null)} />}
        {openModal === "braces-dental" && <BracesDentalModal onClose={() => setOpenModal(null)} />}
      </AnimatePresence>
    </section>
  );
}
