"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

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
    <footer className="bg-footer-bg border-t border-card-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-16">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-fg font-extrabold text-lg sm:text-xl tracking-tight mb-2">
              Kosala<span className="text-[#FF7A00]">.</span>
            </div>
            <p className="text-xs sm:text-sm text-fg-subtle max-w-xs mx-auto md:mx-0 leading-relaxed">
              Meta Ads Strategist helping service-based businesses scale through
              high-converting ads and structured content marketing.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-xs sm:text-sm text-fg-subtle hover:text-[#FF7A00] transition-colors duration-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                style={{ "--brand": link.brandColor } as React.CSSProperties}
                className="group w-10 h-10 sm:w-9 sm:h-9 rounded-xl bg-icon-bg border border-card-border flex items-center justify-center hover:border-[var(--brand)]/50 hover:bg-[var(--brand)]/10 transition-all duration-300 touch-target"
              >
                <span className="text-fg-subtle transition-colors duration-300 group-hover:text-[var(--brand)]">
                  <link.Icon />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-card-border mt-6 sm:mt-8 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] sm:text-xs text-fg-subtle text-center sm:text-left">
            © {new Date().getFullYear()} Kosala Dananjaya. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-fg-subtle text-center">
            Meta Ads Strategist · Al Ain, UAE
          </p>
          <button
            onClick={scrollToTop}
            className="group w-9 h-9 sm:w-8 sm:h-8 rounded-xl bg-icon-bg hover:bg-[#FF7A00] flex items-center justify-center transition-all duration-300 border border-card-border hover:border-[#FF7A00] touch-target"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="text-fg-subtle group-hover:text-white transition-colors" />
          </button>
        </div>

        <div className="mt-3 sm:mt-4 text-center">
          <p className="text-[9px] sm:text-[10px] text-fg-subtle">
            Developed by{" "}
            <span className="hover:text-[#FF7A00] transition-colors cursor-default">
              Kavindu Manahara
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
