"use client";

import React from "react";
import { MessageCircle, ArrowUp, Mail, Globe, Camera } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Toolbox", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: MessageCircle, href: "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.", label: "WhatsApp" },
  { icon: Mail, href: "mailto:kosala@example.com", label: "Email" },
  { icon: Globe, href: "https://linkedin.com/in/kosala", label: "LinkedIn" },
  { icon: Camera, href: "https://instagram.com/kosalasocialmedia", label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-footer-bg border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="text-fg font-extrabold text-xl tracking-tight mb-2">
              Kosala<span className="text-[#FF7A00]">.</span>
            </div>
            <p className="text-sm text-fg-subtle max-w-xs leading-relaxed">
              Meta Ads Strategist helping service-based businesses scale through
              high-converting ads and structured content marketing.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-fg-subtle hover:text-[#FF7A00] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group w-9 h-9 rounded-xl bg-icon-bg border border-card-border flex items-center justify-center hover:bg-[#FF7A00]/10 hover:border-[#FF7A00]/30 transition-all duration-300"
                >
                  <Icon size={15} className="text-fg-subtle group-hover:text-[#FF7A00] transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-fg-subtle text-center sm:text-left">
            © {new Date().getFullYear()} Kosala Dananjaya. All rights reserved.
          </p>
          <p className="text-xs text-fg-subtle text-center">
            Meta Ads Strategist · Al Ain, UAE
          </p>
          <button
            onClick={scrollToTop}
            className="group w-8 h-8 rounded-xl bg-icon-bg hover:bg-[#FF7A00] flex items-center justify-center transition-all duration-300 border border-card-border hover:border-[#FF7A00]"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="text-fg-subtle group-hover:text-white transition-colors" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[10px] text-fg-subtle">
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
