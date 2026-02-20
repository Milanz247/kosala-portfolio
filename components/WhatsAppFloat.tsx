"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {tooltip && (
        <div className="bg-[var(--surface)] text-[var(--fg)] text-xs font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap border border-[var(--border)]">
          Chat with Kosala on WhatsApp 👋
          <div className="absolute bottom-[-4px] right-5 w-2 h-2 bg-[var(--surface)] rotate-45 border-r border-b border-[var(--border)]" />
        </div>
      )}

      {/* Button */}
      <button
        onClick={() =>
          window.open(
            "https://wa.me/94XXXXXXXXX?text=Hi Kosala, I'd like to discuss a project.",
            "_blank"
          )
        }
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        className="w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-xl hover:shadow-green-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} fill="white" stroke="none" />
      </button>
    </div>
  );
}
