"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      )}
    >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-extrabold text-lg text-[var(--fg)] hover:text-[#FF7A00] transition-colors flex-shrink-0"
        >
          Kosala<span className="text-[#FF7A00]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm text-[var(--fg-muted)] hover:text-[#FF7A00] font-medium rounded-lg hover:bg-[var(--accent-muted)] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() =>
              window.open("https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.", "_blank")
            }
          >
            <MessageCircle size={14} />
            <span className="hidden md:inline">WhatsApp</span>
          </Button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--fg-muted)] hover:text-[#FF7A00] hover:border-[#FF7A00] transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-screen border-b border-[var(--border)]" : "max-h-0"
        )}
      >
        <div className="bg-[var(--bg)] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-3 text-sm text-[var(--fg-muted)] hover:text-[#FF7A00] hover:bg-[var(--accent-muted)] rounded-xl font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <Button
              variant="whatsapp"
              size="sm"
              className="w-full"
              onClick={() =>
                window.open("https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.", "_blank")
              }
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

