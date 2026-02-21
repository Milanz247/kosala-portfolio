"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Mail, Linkedin, Instagram, MapPin, Calendar, CalendarCheck } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message me directly",
    href: "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.",
    bg: "bg-emerald-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kosala@example.com",
    href: "mailto:kosala@example.com",
    bg: "bg-[#FF7A00]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://linkedin.com/in/kosala",
    bg: "bg-blue-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kosalasocialmedia",
    href: "https://instagram.com/kosalasocialmedia",
    bg: "bg-pink-500",
  },
];

const faqs = [
  {
    q: "Do I need a big budget to start?",
    a: "Not at all. We can start with a small test budget and scale up once we know what works. I\u2019ll tell you the minimum that makes sense for your goals.",
  },
  {
    q: "How quickly can I expect results?",
    a: "Honestly? Most clients see meaningful inquiry volume improvements within the first 2\u20134 weeks after launch. But I set realistic expectations upfront \u2014 no overnight miracles.",
  },
  {
    q: "I\u2019m not tech-savvy. Will I understand what\u2019s happening?",
    a: "Absolutely. I explain everything in plain language. No jargon, no confusion. You\u2019ll get WhatsApp updates and simple reports you can actually understand.",
  },
  {
    q: "What\u2019s included in the free audit?",
    a: "I\u2019ll review your current social media pages, any existing ads, and your targeting. Then I\u2019ll tell you exactly what\u2019s wrong and how to fix it \u2014 whether you hire me or not.",
  },
  {
    q: "Do you work with businesses outside Sri Lanka and UAE?",
    a: "My core expertise is in the Sri Lanka and UAE markets, but the Meta Ads principles I use apply globally. Let\u2019s chat and see if I can help.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center mb-5">
              <Badge variant="accent">Let&apos;s Talk</Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--fg)] mb-4 tracking-tight leading-[1.1]">
              Ready to Stop Guessing{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">and Start Growing?</span>
            </h2>
            <p className="text-[var(--fg-muted)] max-w-xl mx-auto leading-relaxed">
              Let&apos;s have a casual chat about your business. No sales pitch. No pressure.
              Just an honest conversation about whether I can help you —{" "}
              <span className="text-[var(--fg)] font-semibold">completely free.</span>
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {/* ── Main CTA Hero Card ── */}
          <Reveal>
            <div className="relative bg-gradient-to-br from-[#FF7A00] to-[#CC5000] rounded-3xl p-6 sm:p-10 text-center mb-8 overflow-hidden shadow-2xl shadow-[#FF7A00]/20">
              {/* Inner glow */}
              <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: "radial-gradient(circle at 70% 10%, #fff3 0%, transparent 50%)" }} />

              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <Calendar size={24} className="text-white sm:hidden" />
                  <Calendar size={30} className="text-white hidden sm:block" />
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2 sm:mb-3">
                  Book a Free 15-Min Audit Call
                </h3>
                <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                  In 15 minutes I&apos;ll audit your current ads or social media and tell you
                  exactly what to fix — for free. No sales pitch. No obligation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    size="sm"
                    className="sm:h-12 sm:px-7 sm:text-base bg-white text-[#FF7A00] hover:bg-white/90 font-bold shadow-lg rounded-2xl w-full sm:w-auto"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/YOUR_CALENDLY_LINK",
                        "_blank"
                      )
                    }
                  >
                    <CalendarCheck size={16} />
                    <span className="hidden sm:inline">Book on Calendly — It&apos;s Free</span>
                    <span className="sm:hidden">Book on Calendly</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="sm:h-12 sm:px-7 sm:text-base border-white/40 text-white hover:bg-white/10 hover:text-white rounded-2xl w-full sm:w-auto"
                    onClick={() =>
                      window.open(
                        "https://wa.me/94XXXXXXXXX?text=Hi Kosala! I'd like to book a free 15-min audit call.",
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle size={16} />
                    <span className="hidden sm:inline">Or Book via WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Find me on ── */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" staggerDelay={0.08}>
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <StaggerItem key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2.5 glass rounded-3xl p-4 sm:p-5 text-center glow-hover group"
                  >
                    <div className={`w-11 h-11 rounded-2xl ${link.bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[var(--fg)] text-sm">{link.label}</div>
                      <div className="text-[var(--fg-muted)] text-[11px]">{link.value}</div>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* ── FAQs with Accordion ── */}
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-5 sm:p-7 mb-8">
              <h4 className="font-extrabold text-[var(--fg)] text-base mb-5">Questions I always get asked:</h4>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-[var(--border)]">
                    <AccordionTrigger className="text-sm font-semibold text-[var(--fg)] hover:text-[#FF7A00] text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-2 text-[var(--fg-muted)] text-sm">
              <MapPin size={14} />
              <span>Based in Al Ain, UAE &middot; Working with clients in UAE &amp; Sri Lanka</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

