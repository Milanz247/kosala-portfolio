"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9 rounded-xl bg-transparent", className)} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative w-9 h-9 rounded-xl flex items-center justify-center",
        "border border-[var(--border)] bg-[var(--bg-secondary)]",
        "hover:border-[#FF7A00] hover:bg-[var(--accent-muted)]",
        "text-[var(--fg-muted)] hover:text-[#FF7A00]",
        "transition-all duration-200 cursor-pointer",
        className
      )}
    >
      <span
        key={isDark ? "moon" : "sun"}
        className="transition-transform duration-300"
        style={{
          display: "flex",
          transform: "scale(1)",
          animation: "spin-in 0.3s ease",
        }}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </span>
    </button>
  );
}
