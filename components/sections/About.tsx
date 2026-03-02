"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-16 sm:py-32 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl sm:rounded-[2.5rem] border border-card-border bg-card-bg p-6 sm:p-10 md:p-14"
        >
          {/* Layout: Photo + Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#FF7A00]/20 border-2 border-[#FF7A00]/20">
                <Image
                  src="/photo.jpg"
                  alt="Kosala Dananjaya"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-[11px] sm:text-xs font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-3 py-1 rounded-full mb-4">
                About Me
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-fg mb-2 tracking-tight">
                Kosala <span className="gradient-text">Dananjaya</span>
              </h2>
              
              <p className="text-[#FF7A00] text-sm sm:text-base font-semibold mb-5">
                Meta Ads Strategist & Social Media Manager
              </p>
              
              <p className="text-fg-muted text-sm sm:text-base leading-relaxed mb-4">
                I grew up in Sri Lanka watching businesses run on word of mouth.
                The sign above the door. A neighbour recommending a neighbour.
                There was nothing wrong with that — until the world moved.
                My first properly built Meta campaign was for a small skincare clinic
                in Panadura. Their phone started ringing within a week.
                I&apos;ve been doing this ever since, and ended up in Al Ain, UAE,
                running campaigns for clinics and service brands across both markets.
              </p>

              <p className="text-fg-subtle text-sm sm:text-base leading-relaxed mb-4">
                I&apos;m not an agency. You talk directly to me, and I do the work.
                Every campaign I run is built around{" "}
                <span className="text-fg font-medium">your specific niche, your budget, and your goals</span>{" "}
                — not a copy-paste template.
              </p>

              <p className="text-fg-subtle text-sm sm:text-base leading-relaxed mb-6">
                The benchmark I hold myself to:{" "}
                <span className="text-fg font-medium">your cost per conversation should make
                the ad spend feel obvious</span>. If it doesn&apos;t, we fix it.
                Every campaign comes with a real monthly breakdown — what we spent,
                what came back, and exactly what I&apos;m changing next month.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {["Meta Ads", "Social Media", "Content Strategy", "Al Ain, UAE", "Sri Lanka"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#FF7A00] border border-[#FF7A00]/15 bg-[#FF7A00]/[0.06] px-3 py-1.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-3 mb-6">
                <a
                  href="https://www.linkedin.com/in/kosala-dananjaya-9aa326285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-9 px-4 text-xs font-semibold rounded-full border border-card-border text-fg-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/[0.06] transition-all duration-300"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/kosala.social?igsh=MWQ5aXZpcnRlenJ1Zw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-9 px-4 text-xs font-semibold rounded-full border border-card-border text-fg-muted hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/[0.06] transition-all duration-300"
                >
                  <Instagram size={14} />
                  Instagram
                </a>
              </div>

              {/* Credentials row */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {[
                  { label: "🏆 Meta Blueprint Learner", note: "Meta Certified" },
                  { label: "📊 50+ Client Campaigns", note: "Active results" },
                  { label: "🇺🇦 Based in UAE", note: "Al Ain, UAE" },
                  { label: "🇱🇰 Sri Lanka Roots", note: "Dual market expertise" },
                ].map((c) => (
                  <span
                    key={c.label}
                    title={c.note}
                    className="text-[11px] text-fg-subtle border border-card-border bg-icon-bg px-3 py-1.5 rounded-full font-medium hover:border-[#FF7A00]/30 hover:text-fg transition-all duration-200 cursor-default"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
