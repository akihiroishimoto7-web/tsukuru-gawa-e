"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ZukanItem } from "@/lib/types";
import { categories } from "@/lib/zukan-data";
import { ZukanDetailModal } from "./ZukanDetailModal";

// 難易度を★で表す（1〜5）
function DifficultyStars({ level }: { level: number }) {
  return (
    <span className="tracking-wider" aria-label={`難易度 ${level} / 5`}>
      <span className="text-ember">{"★".repeat(level)}</span>
      <span className="text-slate-700">{"★".repeat(5 - level)}</span>
    </span>
  );
}

export function ZukanCard({ item, index }: { item: ZukanItem; index: number }) {
  const category = categories.find((c) => c.id === item.category);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="group flex h-full cursor-pointer flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/60 card-glow"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="text-3xl">{item.emoji}</span>
          {category && (
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-400">
              {category.label}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-lg font-bold text-slate-100">
          {item.name}
        </h3>

        {/* 何を作り変えるか：このカードの主役 */}
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          {item.whatChanges}
        </p>

        {/* ここから育つと：スケールを見せる */}
        <div className="mt-3 border-l-2 border-ember/40 pl-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ember/90">
            ここから育つと
          </p>
          <p className="mt-1 text-sm leading-relaxed text-gradient">
            {item.vision}
          </p>
        </div>

        <div className="mt-4 space-y-3 border-t border-white/5 pt-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">難易度</span>
            <DifficultyStars level={item.difficulty} />
          </div>

          <div>
            <span className="text-xs text-slate-500">必要スキル</span>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 今日できる最初の一歩：行動を具体化する */}
        <div className="mt-4 rounded-xl border border-ember/20 bg-ember/[0.06] p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ember">
            今日できる、最初の一歩
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-200">{item.mvp}</p>
        </div>

        {/* タップで詳細（つくり方）へ誘導するヒント */}
        <p className="mt-4 text-sm font-medium text-ember">
          はじめ方を見る{" "}
          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </p>
      </motion.article>

      <ZukanDetailModal item={item} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
