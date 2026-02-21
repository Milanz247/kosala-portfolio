"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Toolbox", href: "#skills" },
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-nav-bg backdrop-blur-xl border-b border-card-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-extrabold text-xl tracking-tight text-fg hover:text-[#FF7A00] transition-colors flex-shrink-0"
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
              className="relative px-4 py-2 text-sm text-fg-muted hover:text-fg font-medium rounded-full hover:bg-card-bg-hover transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <a
            href="https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to book a free audit."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-10 px-5 text-sm font-semibold rounded-full bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-lg shadow-[#FF7A00]/20 hover:shadow-[#FF7A00]/40 transition-all duration-300 active:scale-95"
          >
            <Phone size={14} />
            Book a Call
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-card-border bg-icon-bg text-fg-muted hover:text-[#FF7A00] hover:border-[#FF7A00]/40 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-b border-card-border"
          >
            <div className="bg-nav-bg backdrop-blur-xl px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm text-fg-muted hover:text-fg hover:bg-card-bg-hover rounded-2xl font-medium transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 pb-1">
                <a
                  href="https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to book a free audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 text-sm font-semibold rounded-2xl bg-[#FF7A00] text-white hover:bg-[#FF9230] shadow-lg shadow-[#FF7A00]/20 transition-all active:scale-95"
                >
                  <Phone size={15} />
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

