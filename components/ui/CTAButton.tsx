"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

// メインの行動喚起ボタン。
// 白地に映える、黒の無地ボタン（Apple/Notion風）。控えめだが芯がある。
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
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-block ${className}`}
    >
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-stone-900 px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-12px_rgba(28,25,23,0.5)] transition-colors hover:bg-stone-800"
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    </motion.div>
  );
}
