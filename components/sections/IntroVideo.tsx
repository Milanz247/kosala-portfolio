"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, MessageCircle, Quote, Clock } from "lucide-react";

/* ── 30-second intro script ──────────────────────────────────────── */
const SCRIPT_LINES = [
  {
    time: "0–5s",
    line: "\"Hi, I'm Kosala — a Meta Ads Specialist helping service businesses in Sri Lanka and the UAE get real customers from social media.\"",
  },
  {
    time: "5–12s",
    line: "\"If you've ever boosted a post and got nothing back, or spent money on ads without knowing if it worked — I completely understand that frustration.\"",
  },
  {
    time: "12–20s",
    line: "\"I build Meta ad systems built around one goal: getting qualified people to contact your business. Not vanity metrics. Real inquiries.\"",
  },
  {
    time: "20–27s",
    line: "\"I work with a small number of clients at a time — so you get direct attention, honest communication, and results you can actually measure.\"",
  },
  {
    time: "27–30s",
    line: "\"Let's have a free 30-minute call. Click below — I'd love to talk about your business.\"",
  },
];

export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="intro-video"
      className="py-16 sm:py-24 bg-[var(--bg)] relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #FF7A0010 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">Meet Kosala</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          Still Not Sure?{" "}
          <span className="gradient-text">Watch This First.</span>
        </h2>
        <p className="text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-14 leading-relaxed">
          A quick 30-second intro so you can see who I am before we talk.
          Because working with someone is personal — you should know who you&apos;re dealing with.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-5xl mx-auto">

          {/* ── Video Placeholder ── */}
          <div className="relative group">
            {/* Outer glow ring on hover */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF7A00]/30 to-[#FF4500]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] group-hover:border-[#FF7A00]/50 transition-colors shadow-xl">
              {/* Thumbnail */}
              <div
                className="relative w-full aspect-video flex items-center justify-center cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #1a0a00 100%)",
                }}
                onClick={() => setPlaying(true)}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #FF7A00 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Orange glow behind play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#FF7A00]/20 blur-2xl" />
                </div>

                {/* Avatar / name overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#CC5000] flex items-center justify-center text-white font-extrabold text-sm shadow-lg">
                    K
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold leading-tight">Kosala Dananjaya</div>
                    <div className="text-white/60 text-[11px]">Meta Ads Specialist</div>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
                  <Clock size={10} />
                  0:30
                </div>

                {/* Play button */}
                {!playing ? (
                  <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF7A00] hover:bg-[#FF4500] flex items-center justify-center shadow-2xl shadow-[#FF7A00]/50 transition-all duration-300 group-hover:scale-110">
                    <Play size={28} className="text-white fill-white ml-1" />
                  </div>
                ) : (
                  /* Real video element — replace src when ready */
                  <video
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    src="/intro-video.mp4"
                    onError={() => setPlaying(false)}
                  />
                )}
              </div>

              {/* Below thumbnail — caption bar */}
              <div className="bg-[var(--surface)] px-5 py-3 flex items-center justify-between border-t border-[var(--border)]">
                <span className="text-xs text-[var(--fg-muted)]">
                  Replace <code className="text-[#FF7A00]">/public/intro-video.mp4</code> with your real video
                </span>
                <Button
                  size="sm"
                  variant="default"
                  className="h-8 text-xs px-4"
                  onClick={scrollToContact}
                >
                  <MessageCircle size={12} />
                  Book a Call
                </Button>
              </div>
            </div>
          </div>

          {/* ── Script Card ── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <Quote size={18} className="text-[#FF7A00]" />
              <h3 className="font-extrabold text-[var(--fg)] text-base sm:text-lg">
                30-Second Intro Script
              </h3>
              <span className="ml-auto text-[10px] font-bold tracking-widest text-[var(--fg-muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded-full">
                USE AS GUIDE
              </span>
            </div>

            <p className="text-xs text-[var(--fg-muted)] leading-relaxed -mt-1">
              Record naturally — don&apos;t memorise word-for-word. Use this as a
              structure and speak in your own voice.
            </p>

            <div className="flex flex-col gap-3">
              {SCRIPT_LINES.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 hover:border-[#FF7A00]/30 transition-colors"
                >
                  <span className="flex-shrink-0 text-[10px] font-mono font-bold text-[#FF7A00] bg-[var(--accent-muted)] border border-[#FF7A00]/20 px-2 py-0.5 rounded-md h-fit mt-0.5 whitespace-nowrap">
                    {item.time}
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed italic">
                    {item.line}
                  </p>
                </div>
              ))}
            </div>

            {/* Recording tips */}
            <div className="bg-[#FF7A00]/5 border border-[#FF7A00]/20 rounded-xl p-4 mt-1">
              <p className="text-xs font-bold text-[var(--fg)] mb-2">Quick recording tips:</p>
              <ul className="space-y-1 text-xs text-[var(--fg-muted)]">
                <li className="flex gap-2"><span className="text-[#FF7A00] font-bold">→</span> Film in natural light, simple background</li>
                <li className="flex gap-2"><span className="text-[#FF7A00] font-bold">→</span> Wear solid colour clothing (avoid patterns)</li>
                <li className="flex gap-2"><span className="text-[#FF7A00] font-bold">→</span> Smile at the start and end — warmth sells</li>
                <li className="flex gap-2"><span className="text-[#FF7A00] font-bold">→</span> Edit with CapCut — add subtitles for silent viewers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
