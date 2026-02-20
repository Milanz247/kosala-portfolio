"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Linkedin, Instagram, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat directly with me",
    href: "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.",
    color: "green",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "kosala@example.com",
    href: "mailto:kosala@example.com",
    color: "indigo",
    primary: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://linkedin.com/in/kosala",
    color: "indigo",
    primary: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kosalasocialmedia",
    href: "https://instagram.com/kosalasocialmedia",
    color: "pink",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="accent">Contact</Badge>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] text-center mb-3 tracking-tight">
          Let&apos;s Work Together
        </h2>
        <p className="text-[var(--fg-muted)] text-center max-w-xl mx-auto mb-10 sm:mb-16 leading-relaxed">
          Ready to grow your business through social media? Reach out and let&apos;s
          discuss how I can help generate more inquiries for your brand.
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative bg-[var(--surface)] border border-[#FF7A00]/30 rounded-3xl p-6 sm:p-10 text-center mb-8 overflow-hidden shadow-xl shadow-[#FF7A00]/10">
            {/* Subtle orange glow background blur */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FF7A00]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[var(--accent-muted)] border border-[#FF7A00]/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Send size={22} className="text-[#FF7A00] sm:hidden" />
                <Send size={28} className="text-[#FF7A00] hidden sm:block" />
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[var(--fg)] mb-2 sm:mb-3">
                Start a Conversation
              </h3>
              <p className="text-sm sm:text-base text-[var(--fg-muted)] mb-5 sm:mb-8 max-w-md mx-auto leading-relaxed">
                Whether you need social media management, Meta ads, or a full
                content strategy — I&apos;d love to hear about your business.
              </p>
              <div className="flex flex-row items-center justify-center gap-3">
                <Button
                  variant="default"
                  size="sm"
                  className="sm:h-11 sm:px-6 sm:text-sm rounded-xl shadow-lg shadow-[#FF7A00]/20"
                  onClick={() =>
                    window.open(
                      "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle size={15} />
                  <span className="hidden sm:inline">Message on WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="sm:h-11 sm:px-6 sm:text-sm rounded-xl"
                  onClick={() => window.open("mailto:kosala@example.com", "_blank")}
                >
                  <Mail size={15} />
                  <span className="hidden sm:inline">Send an Email</span>
                  <span className="sm:hidden">Email</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[var(--surface)] hover:bg-[var(--accent-muted)]/40 border border-[var(--border)] hover:border-[#FF7A00]/40 rounded-2xl p-4 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] group-hover:border-[#FF7A00]/40 group-hover:bg-[#FF7A00] flex items-center justify-center shadow-sm transition-all">
                    <Icon
                      size={18}
                      className="text-[var(--fg-muted)] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--fg)] text-sm">
                      {link.label}
                    </div>
                    <div className="text-[var(--fg-muted)] text-xs">{link.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Location note */}
          <div className="flex items-center justify-center gap-2 mt-8 text-[var(--fg-muted)] text-sm">
            <MapPin size={14} />
            <span>Based in Al Ain, UAE · Serving clients in UAE & Sri Lanka</span>
          </div>
        </div>
      </div>
    </section>
  );
}
