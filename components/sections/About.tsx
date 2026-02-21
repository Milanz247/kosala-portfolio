"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[var(--bg-secondary)] relative overflow-hidden mesh-gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center mb-5">
              <Badge variant="accent">Why Me?</Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--fg)] mb-4 tracking-tight leading-[1.1]">
              To an Agency, You&apos;re Just Another Client.{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">To Me, You&apos;re a Partner.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--fg-muted)] max-w-2xl mx-auto leading-relaxed">
              You won&apos;t get a copy-paste strategy here. You&apos;ll get a plan
              personally crafted for your business &mdash; and someone who genuinely cares
              whether it works.
            </p>
          </div>
        </Reveal>

        {/* ── Photo + Story Card ── */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-14 items-start">
          {/* Photo column */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative group">
                {/* Photo placeholder */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border border-[var(--border)] group-hover:border-[#FF7A00]/40 transition-all duration-500 shadow-2xl shadow-[#FF7A00]/5">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF7A00 0%, #CC5000 50%, #FF7A00 100%)",
                    }}
                  >
                    <span className="text-white text-6xl font-extrabold select-none">
                      K
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-medium px-3 py-1 bg-black/50 rounded-full">
                      Add your photo here
                    </span>
                  </div>
                </div>
                {/* Available badge */}
                <div className="absolute -bottom-2 -right-2 bg-[#FF7A00] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#FF7A00]/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Available
                </div>
              </div>

              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-xl font-extrabold text-[var(--fg)]">
                  Kosala Dananjaya
                </h3>
                <p className="text-[#FF7A00] text-sm font-semibold">
                  Meta Ads Specialist &amp; Social Media Strategist
                </p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
                  {["Al Ain, UAE", "Sri Lanka", "Meta Certified"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-[var(--accent-muted)] text-[#FF7A00] border border-[#FF7A00]/15 px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Story column */}
          <Reveal direction="right" className="lg:col-span-3">
            <div className="space-y-5 text-sm sm:text-base text-[var(--fg-muted)] leading-relaxed">
              <p>
                I got into digital marketing because I watched too many small
                businesses{" "}
                <span className="text-[var(--fg)] font-semibold">
                  waste money on ads that were never built to work.
                </span>{" "}
                Boosting posts without targeting. Running ads with no clear goal.
                Spending a budget and calling it &quot;marketing.&quot;
              </p>
              <p>
                After working with{" "}
                <span className="text-[var(--fg)] font-semibold">
                  dental clinics, skincare businesses, and local service providers
                </span>{" "}
                in Sri Lanka and the UAE, I learned one thing: most businesses
                don&apos;t need more ads. They need <em>better</em> ads &mdash; with a
                real strategy behind them.
              </p>
              <p>
                So that&apos;s what I do. I build ad systems that are measurable,
                honest, and designed specifically for{" "}
                <span className="text-[var(--fg)] font-semibold">your</span>{" "}
                business &mdash; not copied from a template.
              </p>

              {/* Free audit CTA in story */}
              <div className="glass flex gap-3 rounded-3xl p-5 sm:p-6 mt-3">
                <Phone
                  size={20}
                  className="text-[#FF7A00] flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--fg)] mb-1">
                    Free Page Audit &mdash; No Strings Attached
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">
                    Before we talk money, I&apos;ll look at your page and ads for
                    free and tell you what&apos;s wrong and how to fix it. If I
                    can&apos;t help, I&apos;ll say so honestly.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
