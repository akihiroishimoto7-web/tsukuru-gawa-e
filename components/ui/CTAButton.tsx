"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

// メインの行動喚起ボタン。
// 夜明けのグラデーション + ホバーでふわっと光る。
export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/[0.06] ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-block ${className}`}
    >
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-dawn-gradient px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_-12px_rgba(168,85,247,0.6)]"
      >
        {/* ホバー時に走る光のハイライト */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    </motion.div>
  );
}
