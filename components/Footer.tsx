"use client";

import React from "react";
import { ArrowUp, MapPin, Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Toolbox", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const socialLinks = [
  { Icon: WhatsAppIcon, href: "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.", label: "WhatsApp", brandColor: "#25D366" },
  { Icon: MailIcon, href: "mailto:kosala@example.com", label: "Email", brandColor: "#EA4335" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/in/kosala", label: "LinkedIn", brandColor: "#0A66C2" },
  { Icon: InstagramIcon, href: "https://instagram.com/kosalasocialmedia", label: "Instagram", brandColor: "#E1306C" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-footer-bg border-t border-card-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#FF7A00]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-6 sm:pb-8">

        {/* ══ MOBILE LAYOUT (hidden on lg+) ══ */}
        <div className="lg:hidden mb-8">
          {/* Brand */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#FF7A00] to-[#CC5500] flex items-center justify-center shadow-lg shadow-[#FF7A00]/20">
              <span className="text-white font-black text-sm leading-none">K</span>
            </div>
            <span className="text-fg font-extrabold text-lg tracking-tight">
              Kosala<span className="text-[#FF7A00]">.</span>
            </span>
          </div>
          <p className="text-xs text-fg-subtle leading-relaxed mb-5">
            Helping businesses in UAE &amp; Sri Lanka grow through Meta Ads &amp; content marketing.
          </p>

          {/* Social icons row */}
          <div className="flex items-center gap-2 mb-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                style={{ "--brand": link.brandColor } as React.CSSProperties}
                className="w-9 h-9 rounded-xl bg-icon-bg border border-card-border flex items-center justify-center hover:border-[var(--brand)]/50 hover:bg-[var(--brand)]/10 text-fg-subtle hover:text-[var(--brand)] transition-all"
              >
                <link.Icon />
              </a>
            ))}
          </div>

          {/* Nav links — horizontal wrap */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-xs text-fg-subtle hover:text-[#FF7A00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* ══ DESKTOP LAYOUT (hidden below lg) ══ */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-[#FF7A00] to-[#CC5500] flex items-center justify-center shadow-lg shadow-[#FF7A00]/20">
                <span className="text-white font-black text-base leading-none">K</span>
              </div>
              <span className="text-fg font-extrabold text-xl tracking-tight">
                Kosala<span className="text-[#FF7A00]">.</span>
              </span>
            </div>
            <p className="text-sm text-fg-subtle leading-relaxed mb-6 max-w-sm">
              Helping service-based businesses in UAE &amp; Sri Lanka generate loyal customers
              through data-driven Meta advertising and structured content marketing.
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-fg-subtle hover:text-[#FF7A00] transition-colors group w-fit">
                <div className="w-7 h-7 rounded-lg bg-icon-bg border border-card-border flex items-center justify-center group-hover:border-[#FF7A00]/30 transition-colors">
                  <Phone size={12} className="group-hover:text-[#FF7A00] transition-colors" />
                </div>
                +94 XX XXX XXXX
              </a>
              <a href="mailto:kosala@example.com"
                className="flex items-center gap-2.5 text-xs text-fg-subtle hover:text-[#FF7A00] transition-colors group w-fit">
                <div className="w-7 h-7 rounded-lg bg-icon-bg border border-card-border flex items-center justify-center group-hover:border-[#FF7A00]/30 transition-colors">
                  <Mail size={12} className="group-hover:text-[#FF7A00] transition-colors" />
                </div>
                kosala@example.com
              </a>
              <div className="flex items-center gap-2.5 text-xs text-fg-subtle">
                <div className="w-7 h-7 rounded-lg bg-icon-bg border border-card-border flex items-center justify-center">
                  <MapPin size={12} />
                </div>
                Al Ain, UAE
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold text-fg uppercase tracking-widest mb-4">Quick Links</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => scrollTo(e, link.href)}
                  className="text-sm text-fg-subtle hover:text-[#FF7A00] transition-colors flex items-center gap-1.5 group w-fit">
                  <span className="w-1 h-1 rounded-full bg-[#FF7A00]/40 group-hover:bg-[#FF7A00] transition-colors shrink-0" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social / CTA */}
          <div>
            <p className="text-xs font-bold text-fg uppercase tracking-widest mb-4">Follow Me</p>
            <div className="flex flex-col gap-2 mb-6">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{ "--brand": link.brandColor } as React.CSSProperties}
                  className="flex items-center gap-2.5 text-sm text-fg-subtle hover:text-[var(--brand)] transition-colors group w-fit">
                  <div className="w-7 h-7 rounded-lg bg-icon-bg border border-card-border flex items-center justify-center group-hover:border-[var(--brand)]/40 group-hover:bg-[var(--brand)]/10 transition-all shrink-0">
                    <span className="group-hover:text-[var(--brand)] transition-colors"><link.Icon /></span>
                  </div>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-card-border" />

        {/* ── Bottom bar ── */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-fg-subtle text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Kosala Dananjaya. All rights reserved.
          </p>

          {/* Developer credit — professional badge */}
          <a
            href="https://milanmadusanka.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="order-3 sm:order-2 group flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-icon-bg hover:border-[#FF7A00]/40 hover:bg-[#FF7A00]/5 transition-all duration-300"
          >
            <span className="text-[10px] text-fg-subtle group-hover:text-fg transition-colors">Designed &amp; Developed by</span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-linear-to-br from-[#FF7A00] to-[#CC5500] flex items-center justify-center shrink-0">
                <span className="text-white font-black text-[8px] leading-none">M</span>
              </span>
              <span className="text-[11px] font-bold text-[#FF7A00] group-hover:text-[#FF9230] transition-colors">Milan Madusanka</span>
            </span>
          </a>

          <button
            onClick={scrollToTop}
            className="group w-9 h-9 rounded-xl bg-icon-bg hover:bg-[#FF7A00] flex items-center justify-center transition-all duration-300 border border-card-border hover:border-[#FF7A00] order-1 sm:order-3 touch-target"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="text-fg-subtle group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
