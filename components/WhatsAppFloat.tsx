"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {tooltip && (
        <div className="relative bg-modal-bg text-fg text-[11px] sm:text-xs font-medium px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-2xl whitespace-nowrap border border-icon-border backdrop-blur-xl hidden sm:block">
          Chat with Kosala on WhatsApp 👋
          <div className="absolute bottom-[-4px] right-5 w-2 h-2 bg-modal-bg rotate-45 border-r border-b border-icon-border" />
        </div>
      )}

      {/* Button with ping animation */}
      <div className="relative">
        <span className="ping-green absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        <a
          href="https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-xl shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-target"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} fill="white" stroke="none" className="sm:w-[26px] sm:h-[26px]" />
        </a>
      </div>
    </div>
  );
}
