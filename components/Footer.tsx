"use client";

import React from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[var(--fg-muted)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="text-white font-extrabold text-xl mb-2">
              Kosala<span className="text-[#FF7A00]">.</span>
            </div>
            <p className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed">
              Social Media Manager & Meta Ads Specialist helping service-based
              businesses grow through structured content and performance
              marketing.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm hover:text-[#FF7A00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.",
                "_blank"
              )
            }
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </button>
        </div>

        <div className="border-t border-[var(--border)] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--fg-muted)] opacity-60 text-center sm:text-left">
            © {new Date().getFullYear()} Kosala Dananjaya. All rights reserved.
          </p>
          <p className="text-xs text-[var(--fg-muted)] opacity-60 text-center">
            Social Media Manager · Al Ain, UAE
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] hover:bg-[#FF7A00] flex items-center justify-center transition-colors border border-[var(--border)]"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="text-[var(--fg-muted)] group-hover:text-white" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[10px] text-[var(--fg-muted)] opacity-40">
            Developed by{" "}
            <span className="hover:text-[#FF7A00] hover:opacity-100 transition-colors cursor-default">
              Kavindu Manahara
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
