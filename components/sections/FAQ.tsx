"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How fast will I see results?",
    a: "Most clients start seeing WhatsApp inquiries within the first 7–14 days of a campaign going live. Full optimization — where costs drop and volume increases — typically happens over 30–60 days as we test and refine what works for your specific audience.",
  },
  {
    q: "What does working with you cost?",
    a: "Campaigns start at AED 1,500/month (around $400 USD) plus your ad spend. Social media management is quoted based on scope. I'm transparent about pricing from the first call — if your budget doesn't match what the goal actually needs, I'll tell you that before we start, not after.",
  },
  {
    q: "You're based in Al Ain — does location matter?",
    a: "For most of what I do, not at all. Calls happen via WhatsApp or Google Meet and reporting is shared digitally. That said, being based in the UAE means I understand local market behaviour and what actually resonates for UAE clinics and service businesses. The Sri Lanka experience means I run dual-market campaigns without needing anyone to explain the cultural nuance. Most agencies in Dubai don't have both.",
  },
  {
    q: "Do you work with small budgets?",
    a: "Yes. I've run effective campaigns with daily budgets as low as AED 60–85. The key isn't the size of the budget — it's the strategy behind it. I'll tell you honestly upfront what's realistic with your budget before we start.",
  },
  {
    q: "Do I need a website to run Meta Ads?",
    a: "Not at all. Most of my campaigns use Click-to-WhatsApp as the destination, so customers go directly from the ad to a WhatsApp chat with you. It's faster, simpler, and tends to convert better for service-based businesses.",
  },
  {
    q: "Do you handle everything, or do I need a team?",
    a: "I handle the full campaign — strategy, ad setup, targeting, copy, and optimization. For social media management, I'll need content from your side (photos, videos of your services), but I take care of the planning, editing, scheduling, and reporting.",
  },
  {
    q: "How is working with you different from an agency?",
    a: "When you hire an agency, your account gets handed to a junior. With me, you talk directly to the person running your campaigns — always. I work with a small number of clients at a time specifically so I can give each business proper attention and real results.",
  },
  {
    q: "What happens in the free 15-minute call?",
    a: "We talk about your business, what you've tried before, and what you're trying to achieve. I'll give you honest feedback on what I think will work — no sales pitch. If I'm not the right fit, I'll tell you that too.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 + index * 0.07 }}
      className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-[#FF7A00]/30 bg-[#FF7A00]/[0.03]"
          : "border-card-border bg-card-bg hover:border-[#FF7A00]/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left"
      >
        <span className="font-semibold text-fg text-sm sm:text-base">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`text-[#FF7A00] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm text-fg-subtle leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="relative py-16 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-[11px] sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            FAQ
          </span>
          <h2 className="heading text-2xl sm:text-4xl md:text-5xl text-fg mb-3 sm:mb-4">
            Questions People{" "}
            <span className="gradient-text">Always Ask Me</span>
          </h2>
          <p className="text-fg-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            Honest answers — no marketing fluff.
          </p>
        </motion.div>

        {/* Accordion */}
        {inView && (
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        )}

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 sm:mt-14"
        >
          <p className="text-fg-subtle text-sm mb-4">
            Still have a question? Just ask directly.
          </p>
          <a
            href="https://wa.me/971545030693?text=Hi%20Kosala%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-6 text-sm font-semibold rounded-full bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-lg shadow-[#FF7A00]/20 transition-all duration-300 active:scale-95"
          >
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
