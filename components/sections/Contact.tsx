"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Mesh gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="mesh-gradient w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(circle, #FF7A00 0%, transparent 70%)", opacity: 0.08 }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Big CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-[#FF7A00]/20 bg-card-bg p-8 sm:p-14 text-center mb-10 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-block text-xs sm:text-sm font-semibold text-[#FF7A00] border border-[#FF7A00]/20 bg-[#FF7A00]/[0.06] px-4 py-1.5 rounded-full mb-6">
              Ready to Scale?
            </span>

            <h2 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-fg mb-4 sm:mb-6">
              Ready to Stop Guessing{" "}
              <br className="hidden sm:block" />
              and <span className="gradient-text">Start Growing?</span>
            </h2>

            <p className="text-fg-subtle text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10">
              Whether you need Meta ads, social media management, or a full
              content strategy — let&apos;s talk about what your business
              actually needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to book a free 15-min audit."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 h-13 sm:h-14 px-8 sm:px-10 text-sm sm:text-base font-semibold rounded-3xl bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-xl shadow-[#FF7A00]/25 hover:shadow-[#FF7A00]/40 transition-all duration-300 active:scale-95"
              >
                <Phone size={16} />
                Book a Free 15-Min Audit
                <Sparkles size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:kosala@example.com"
                className="inline-flex items-center gap-2 h-13 sm:h-14 px-8 sm:px-10 text-sm sm:text-base font-semibold rounded-3xl border border-card-border text-fg-muted hover:text-fg hover:border-card-border hover:bg-card-bg-hover transition-all duration-300 active:scale-95"
              >
                <Mail size={16} />
                Send an Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-10 text-fg-subtle text-sm"
        >
          <MapPin size={14} />
          <span>Based in Al Ain, UAE · Serving clients in UAE & Sri Lanka</span>
        </motion.div>
      </div>
    </section>
  );
}
